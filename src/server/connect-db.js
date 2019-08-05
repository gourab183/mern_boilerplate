import {MongoClient} from 'mongodb';
let db = null;

export async function connectDb() {
    if(db) return db;
    const client  = await MongoClient.connect('mongodb://localhost:27017/Tasks',{useNewUrlParser: true});
    db = client.db();
    //console.info(db);
    return db;
}