import mongoose from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/suheldb");
  console.log("Connected to DB");

  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
}

main().catch((err) => console.log(err));
