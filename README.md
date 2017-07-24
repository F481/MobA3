# MobA3
WebApp Project for Moba3. Onlineshop with React and Node.js

## Setup
1. clone the project
2. run `npm install`
3. run `npm update`
4. run `npm start` (default port is 3000)

for Mogno DB 

## setup
1. make db name= moba3db
code: use moba3db
2. create collection name = products
code: db.createCollection("products)
3. import whiskysJSON.json
in path from MongoDB is mongoimport, i put also the whiskysJSON.json file in there
code: mongoimport --jsonArray --db moba3db --collection products --file whiskysJSON.json
