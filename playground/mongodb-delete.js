const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const dbName = "TodoApp";

const client = new MongoClient(url);

const main = async () => {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
//   const result = await db
//     .collection("Todos")
//     .countDocuments()
//     .then((count) => {
//       console.log(`Total count: ${count}`);
//     });

    const result = await db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
        console.log('Successfully deleted');
        console.log(result);
    })
};

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());