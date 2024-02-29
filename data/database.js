import mongoose from "mongoose"

export const userDB = () => {mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "minProject",
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(e);
  })
}
