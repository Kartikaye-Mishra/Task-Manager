import mongoose from "mongoose"

export const userDB = () => {mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "minProject",
  })
  .then((c) => {
    console.log(`Database Connected with ${c.connection.host}`);
  })
  .catch((e) => {
    console.log(e);
  })
}
