import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

export const connectMongoDB = async () => {
  try{
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  }
  catch (error) {
    console.log("Error connecting to MongoDB")
  }
}

// let isConnected = false; 

// export const connectToDB = async () => {
//   mongoose.set('strictQuery', true);

//   if(isConnected) {
//     console.log('MongoDB is already connected');
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "share_prompt",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })

//     isConnected = true;

//     console.log('MongoDB connected')
//   } catch (error) {
//     console.log(error);
//   }
// }