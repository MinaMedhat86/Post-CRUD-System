import { Router } from "express";
import * as PC from "./posts.controller.js"

const routerPost= Router();

routerPost.get("/getPosts" , PC.getPosts)
routerPost.post("/addPost" , PC.addPost);
routerPost.put("/updatePost" , PC.updatePost)
routerPost.delete("/deletePost" , PC.deletePost)




export default routerPost;
