const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI ,{ useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`connected to database: ${connect.connection.host} `)
        
        // Create TTL index for session expiration
        await createTTLIndex();

    }catch(err){
        console.log(err);
        process.exit(1);
    }
}


const createTTLIndex = async () => {
    try {
        await mongoose.connection.db.collection('userSessions').createIndex(
            { "expires": 1 },
            { expireAfterSeconds: 0 }
        );
        console.log('TTL index created successfully');
    } catch (err) {
        console.error('Error creating TTL index:', err);
    }
};


module.exports = connectDB;
