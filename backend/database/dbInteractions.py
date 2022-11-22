import psycopg2
import configparser
from flask import Flask

config = configparser.ConfigParser()
config.read('config.ini')

app = Flask(__name__)

PORT_SERVER = config['db']['LOGIN_SERVER_PORT']

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
        query = "SELECT " + dataToSelect + " FROM " + tableName + ";";
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


# ! ********* ROUTES *********  

@app.route('/db/ping', methods=['GET'])
def ping():
    return "Ok", 200

@app.route('/db/register', methods=['POST'])
def register():
    return "Ok", 200

@app.route('/db/login', methods=['POST'])
def login():
    return "Ok", 200

@app.route('/db/newPost', methods=['POST'])
def newPost():
    return "Ok", 200

@app.route('/db/deletePost', methods=['DELETE'])
def deletePost():
    return "Ok", 200

@app.route('/db/updatePost', methods=['POST'])
def updatePost():
    return "Ok", 200


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=PORT_SERVER)