import app from "./app.js"
import {userDB} from './data/database.js'

userDB();

app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server is working at port ${process.env.PORT} in ${process.env.NODE_ENV} environment .`);
})
