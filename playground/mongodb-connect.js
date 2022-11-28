const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url, {monitorCommands: true});
const dbName = "TodoApp";

var user = {
  name: 'Sarvjeet',
  age: 25
};

var {name} = user;
console.log(name);

// return false;

main = async () => {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  // const result = await db.collection("Todos").insertOne({
  //   text: "Eat Lunch",
  //   completed: true
  // });
  // console.log(result);
  const result = await db.collection("Users").insertOne({
    name: "Sarvjeet",
    age: 39,
    location: "Delhi",
  });
  // const result = await db.collection('Users').findOne({_id: ObjectId('6382f38892a56752d9462802')});
  // console.log(result._id.getTimestamp());
  // return "done";
};

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
