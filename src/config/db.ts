import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cursonodejs.uvau9nn.mongodb.net/database?retryWrites=true&w=majority&appName=CursoNodeJs`
    );
    if (connection.connection.readyState === 1) {
      console.log("Database connection finished with success");
    } else {
      console.error(
        "ERROR! Connection was established, but state is not active!"
      );
    }
  } catch (error) {
    console.error(`Error trying to connect with database: ${error}`);
  }
};

export default connectToDatabase;
