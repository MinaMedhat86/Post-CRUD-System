import express from "express"
import routerPost from "./src/module/posts/posts.routes.js";
import connection from "./db/connectiom.js";
import cors from "cors";

const app = express();

const port = process.env.port || 3000;


connection;
app.use(cors());
app.use(express.json())
app.use(routerPost);


app.get("/" , (req , res)=>{
    res.status(200).join({msg : "hello on server"})
})

app.use("*", (req, res) => {
    res.status(400).join({msg : "page not found .........."});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
