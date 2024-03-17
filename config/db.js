import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected'); 
  } catch (error) {
    console.error(`Error: ${error.message}`); 
    process.exit(1); // Exit the process on failure
  }
};

export default connectDB;
