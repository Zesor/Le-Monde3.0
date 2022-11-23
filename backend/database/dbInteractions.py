import psycopg2
import configparser
import json
from flask import Flask
from flask import request

config = configparser.ConfigParser()
config.read('config.ini')

app = Flask(__name__)

PORT_SERVER = config['db']['SERVER_PORT']

# ! ********* CLASS TO INTERACT WITH DATABASE *********  

class Interaction:
    def __init__(self):
        self.user = config['db']['DB_USER']
        self.host = config['db']['DB_HOST']
        self.db_name = config['db']['DB_NAME']
        self.db_password = config['db']['DB_PASSWORD']
        self.port = config['db']['DB_PORT']

    def connectDatabase(self):
        try:
            self.conn = psycopg2.connect(database=self.db_name, user=self.user, host=self.host, password=self.db_password, port=self.port)
        except:
            return False
        self.conn.autocommit = True
        self.cursor = self.conn.cursor()
        return True

    def disconnectDatabase(self):
        self.cursor.close()
        self.conn.close()

    def selectQuery(self, tableName, dataToSelect, condition = ""):
        query = "SELECT " + dataToSelect + " FROM " + tableName;
        if len(condition) != 0:
            query += " WHERE " + condition + ";"
        else:
            query += ";"
        self.cursor.execute(query)
        res = self.cursor.fetchall()
        return res

    def updateQuery(self, tableName, dataToUpdate, condition = ""):
        query = "UPDATE " + tableName + " SET " + dataToUpdate
        if len(condition) != 0:
            query += " WHERE " + condition + ";"
        else:
            query += ";"
        self.cursor.execute(query)
        return True

    def deleteQuery(self, tableName, condition = ""):
        query = "DELETE FROM " + tableName
        if len(condition) != 0:
            query += " WHERE " + condition + ";"
        self.cursor.execute(query)

    def insertQuery(self, tableName, dataToInsert, datas, condition=""):
        query = "INSERT INTO " + tableName + " (" + dataToInsert + ") VALUES (" + datas + ")"
        if len(condition) != 0:
            query += " WHERE " + condition + ";"
        else:
            query += ";"
        print(query)
        self.cursor.execute(query)


# ! ********* ROUTES *********  

@app.route('/db/ping', methods=['GET'])
def ping():
    return "Ok", 200

@app.route('/db/pingdb', methods=['GET'])
def pingdb():
    interaction = Interaction()
    if (interaction.connectDatabase() == False):
        return "Can't connect to database", 400
    interaction.disconnectDatabase()
    return "Ok", 200

@app.route('/db/register', methods=['POST'])
def register():
    request_data = request.json
    try:
        walletId = request_data['wallet_id']
    except:
        return "Bad info given, need wallet id", 400
    interaction = Interaction()
    if (interaction.connectDatabase() == False):
        return "Can't connect to database", 503
    if len(interaction.selectQuery("public.user", "*", "wallet_id='"+walletId+"'")) != 0:
        return "User already exist", 400
    interaction.insertQuery("public.user", "wallet_id, logged_in", "'"+walletId+"', "+"true")
    interaction.disconnectDatabase()
    return "Created", 201

@app.route('/db/login', methods=['POST'])
def login():
    request_data = request.json
    try:
        walletId = request_data['wallet_id']
    except:
        return "Bad info given, need wallet id", 400
    interaction = Interaction()
    if (interaction.connectDatabase() == False):
        return "Can't connect to database", 503
    if len(interaction.selectQuery("public.user", "*", "wallet_id='"+walletId+"'")) == 0:
        return "User does not exist", 404
    else:
        interaction.updateQuery("public.user", "logged_in=true", "wallet_id='"+walletId+"'")
    interaction.disconnectDatabase()
    return "Ok", 200

@app.route('/db/logout', methods=['POST'])
def logout():
    request_data = request.json
    try:
        walletId = request_data['wallet_id']
    except:
        return "Bad info given, need wallet id", 400
    interaction = Interaction()
    if (interaction.connectDatabase() == False):
        return "Can't connect to database", 503
    if len(interaction.selectQuery("public.user", "*", "wallet_id='"+walletId+"'")) == 0:
        return "User does not exist", 404
    else:
        interaction.updateQuery("public.user", "logged_in=false", "wallet_id='"+walletId+"'")
    interaction.disconnectDatabase()
    return "Ok", 200

@app.route('/db/newPost', methods=['POST'])
def newPost():
    request_data = request.json
    try:
        walletId = request_data['wallet_id']
    except:
        return "Bad info given, need wallet id", 400
    try:
        cid = request_data['cid']
    except:
        return "Bad info given, need cid", 400
    try:
        title = request_data['title']
    except:
        return "Bad info given, need title", 400
    interaction = Interaction()
    if (interaction.connectDatabase() == False):
        return "Can't connect to database", 503
    if len(interaction.selectQuery("public.user", "*", "wallet_id='"+walletId+"'")) == 0:
        return "User does not exist", 404
    if len(interaction.selectQuery("public.posts", "*", "wallet_id='"+walletId+"' AND cid='"+cid+"' AND title='"+title+"'")) != 0:
        return "Post already exist on this user account", 400
    else:
        interaction.insertQuery("public.posts", "wallet_id, cid, title", "'"+walletId+"', '"+cid+"', '"+title+"'")
    interaction.disconnectDatabase()
    return "Post created", 201

@app.route('/db/deletePost', methods=['DELETE'])
def deletePost():
    request_data = request.json
    try:
        walletId = request_data['wallet_id']
    except:
        return "Bad info given, need wallet id", 400
    try:
        cid = request_data['cid']
    except:
        return "Bad info given, need cid", 400
    try:
        title = request_data['title']
    except:
        return "Bad info given, need title", 400
    interaction = Interaction()
    if (interaction.connectDatabase() == False):
        return "Can't connect to database", 503
    if len(interaction.selectQuery("public.user", "*", "wallet_id='"+walletId+"'")) == 0:
        return "User does not exist", 404
    if len(interaction.selectQuery("public.posts", "*", "wallet_id='"+walletId+"' AND cid='"+cid+"' AND title='"+title+"'")) == 0:
        return "Post does not exist", 404
    else:
        interaction.deleteQuery("public.posts", "wallet_id='"+walletId+"' AND cid='"+cid+"' AND title='"+title+"'")
    interaction.disconnectDatabase()
    return "Post deleted", 205

@app.route('/db/updatePost', methods=['POST'])
def updatePost():
    request_data = request.json
    try:
        walletId = request_data['wallet_id']
    except:
        return "Bad info given, need wallet id", 400
    try:
        oldCid = request_data['oldCid']
    except:
        return "Bad info given, need oldCid", 400
    try:
        newCid = request_data['newCid']
    except:
        return "Bad info given, need newCid", 400
    try:
        title = request_data['title']
    except:
        return "Bad info given, need title", 400
    interaction = Interaction()
    if (interaction.connectDatabase() == False):
        return "Can't connect to database", 503
    if len(interaction.selectQuery("public.user", "*", "wallet_id='"+walletId+"'")) == 0:
        return "User does not exist", 404
    if len(interaction.selectQuery("public.posts",  "*", "wallet_id='"+walletId+"' AND cid='"+oldCid+"'")) == 0:
        return "Post does not exist", 404
    else:
        interaction.updateQuery("public.posts", "cid='"+newCid+"', title='"+title+"'", "wallet_id='"+walletId+"' and cid='"+oldCid+"'")
    interaction.disconnectDatabase()
    return "Post updated", 200

@app.route('/db/getPostByWalletId', methods=['GET'])
def getPostByWalletId():
    walletId = request.args.get('wallet_id')
    if walletId == None or len(walletId) == 0:
        return "Bad info given, need wallet_id", 400
    interaction = Interaction()
    if (interaction.connectDatabase() == False):
        return "Can't connect to database", 503
    if len(interaction.selectQuery("public.user", "*", "wallet_id='"+walletId+"'")) == 0:
        return "User does not exist", 404
    else:
        resp = interaction.selectQuery("public.posts", "wallet_id, cid", "wallet_id='"+walletId+"'")
    interaction.disconnectDatabase()
    return json.dumps(resp), 200

@app.route('/db/getAllPost', methods=['GET'])
def getAllPost():
    interaction = Interaction()
    if (interaction.connectDatabase() == False):
        return "Can't connect to database", 503
    resp = interaction.selectQuery("public.posts", "*")
    interaction.disconnectDatabase()
    return json.dumps(resp), 200
    
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=PORT_SERVER)