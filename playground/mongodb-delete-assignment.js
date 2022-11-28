const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "TodoApp";

const main = async () => {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const result = await db.collection('Users')
    .findOneAndDelete({age: 37})
    .then((deleted) => {
      console.log(JSON.stringify(deleted));
    });
};

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());
