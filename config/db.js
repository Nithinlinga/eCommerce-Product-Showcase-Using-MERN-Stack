import mongoose from 'mongoose';

const connectDB =async()=>{
    try{
        // const conn=await mongoose.connect(process.env.MONGO_URL);
         mongoose.connect(`${process.env.MONGO_URL}`, {useNewUrlParser: true, useUnifiedTopology: true});
        // console.log(`connected ro MongoDB ${conn.connection.host}`)
    }catch(error){
        console.log(`Error Mongodb ${error}`) ;
    }
}
export default connectDB;
