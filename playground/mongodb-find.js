const {MongoClient, ObjectId} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);
const dbName = 'TodoApp';

const main = async () => {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    // const result = await db.collection('Todos').findOne({_id: ObjectId('6382ef8be9d172498749bae9')})
    // const result = await db.collection('Todos').countDocuments().then((count) => {
    //     console.log(`Total count: ${count}`);
    //     // console.log(JSON.stringify(docs));
    // });
    const result = await db.collection('Users').find({name: "Sarvjeet"}).toArray().then((users) => {
        console.log(JSON.stringify(users));
    });
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());