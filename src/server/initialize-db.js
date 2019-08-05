import {connectDb} from './connect-db';
import {defaultState} from './defaultState';

async function initializeDb() {
    const db  = await connectDb();

    for(let collection in defaultState) {
        console.log('collection name',collection);
        let collectionName = db.collection(collection);
        await collectionName.insertMany(defaultState[collection]);
    }
};
initializeDb();





