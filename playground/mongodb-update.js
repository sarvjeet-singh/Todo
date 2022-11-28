const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "TodoApp";

const main = async () => {
  await client.connect();
  const db = client.db(dbName);
  //   const result = await db.collection("Todos").findOneAndUpdate({ _id: ObjectId("638412e1859f72b2c6a55dd1") },{ $set: {completed: true}}, {returnOriginal: false}).then((resp) => {
  //     console.log(JSON.stringify(resp));
  //   });
  const result = await db
    .collection("Users")
    .findOneAndUpdate(
      { _id: ObjectId("63842c8ae9e5a742cfa0a5a5") },
      { $inc: { age: 1 }, $set: { name: "Ashi" } },
      {
        returnDocument: 'after',
      }
    )
    .then((update) => {
      console.log(JSON.stringify(update));
    });
};

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
