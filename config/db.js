import mongoose from 'mongoose';

const connectDB =async()=>{
    try{
        // const conn=await mongoose.connect(process.env.MONGO_URL);
         mongoose.connect(`mongodb://nithinlinga2:Nithin@ac-e1ztx5j-shard-00-00.otzisrp.mongodb.net:27017,ac-e1ztx5j-shard-00-01.otzisrp.mongodb.net:27017,ac-e1ztx5j-shard-00-02.otzisrp.mongodb.net:27017/?replicaSet=atlas-xywy94-shard-0&ssl=true&authSource=admin`, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`connected to MongoDB ${conn.connection.host}`)
    }catch(error){
        console.log(`Error Mongodb ${error}`) ;
    }
}
export default connectDB;
