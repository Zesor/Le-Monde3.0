# IPFS SERVICE

## Routes

--------------------------
- **/ipfs/ping**
--------------------------
- **/ipfs/add**
    - ***Description***: add content to ipfs
    - ***Method***: POST
    - ***Require***: data(content of the post), title, wallet_id,  *(body)*
    - ***Responses***:
        - *201* Created
        - *400* Bad info given, need wallet id
        - *400* User already exist
        - *503* Can't connect to database
--------------------------
- **/ipfs/get**
    - ***Description***: get all posts in the user database
    - ***Method***: GET
    - ***Responses***:
        - *200* *Post list*
        - *503* Can't connect to database

