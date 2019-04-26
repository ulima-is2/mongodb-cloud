# Start
````
npm init
npm install -g typescript
tsc --init

npm install mongoose --save
npm install @types/mongoose --save
````
# install
````
npm install
````
# run
````
tsc
node index.js
````

# Steps Cloud
- Crear cuenta de mongoDB
  - https://www.mongodb.com/download-center
  - Develop a new app
  - Creaste e new cluster
- Connect
- Add IP
  - Clic en Add
- Crear user
  - admin
  - admin
  - Clic en Create
- Connect your application (as connection method)
  - NodeJS 3.0 or later
  - Copy connection string

# Steps Local
- Download as zip
- Crear "C:\Users\w3133\Downloads\data"
- Execute in one cmd
````shell
mongod.exe --dbpath "C:\Users\w3133\Downloads\data"
````
- Execute in other cmd
````shell
mongo.exe
````
- Execute in mongo shell
````
show dbs
use app
show collections
db.products.count()
db.products.find()
````

# reference
- examples
  - https://tutorialedge.net/typescript/typescript-mongodb-beginners-tutorial/ 
  - https://medium.com/@tomanagle/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722
- commands
  - https://dzone.com/articles/top-10-most-common-commands-for-beginners
- mongoose queries
  - https://mongoosejs.com/docs/api.html#model_Model.find  