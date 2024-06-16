import connection from "../../../db/connectiom.js"


// ========================== getPosts ====================

export const getPosts = (req , res , next)=>{

    const query = `select * from posts`
    connection.execute(query , (err , result)=>{
        if (err){
            return res.status(404).json({msg : "query erorr !!"});
        }
            if (!result.length){
                return res.status(400).json({msg : "not posts find"});
            }

            return res.status(201).json({msg : "done" , result});
    })

}


// ============================= addPost ========================

export const addPost = (req , res , next)=>{

    const {title , description , price} = req.body;

    connection.execute(`select title from posts where title = "${title}"` , (err, result)=>{
        if (err){
            return res.status(404).json({msg : "query erorr !!"});
        }

        if(result.length){
            res.status(400).json("title is already exist")
        }

        const query = `insert into posts (title , description , price) values ("${title}","${description}","${price}")`
        connection.execute(query , (err , result)=>{
            if (err){
                return res.status(404).json({msg : "query erorr !!"});
            }
                if (!result.affectedRows){
                    return res.status(400).json({msg : "failure add ....."});
                }
    
                return res.status(201).json({msg : "done" });
        })
    })



}


// ========================= updatePost ===============================

export const updatePost = (req , res , next)=>{

    const {title , description , price , id} = req.body
    const query = `update posts set title = "${title}" , description = "${description}" , price = "${price}" where id = "${id}"`
    connection.execute(query , (err , result)=>{
        if (err){
            return res.status(404).json({msg : "query erorr !!"});
        }
        if(!result.affectedRows){
            return res.status(400).json({msg : "id is not exist"})
        }
        return res.status(200).json({msg: "done"});
    })
}

// ====================== deletePost ============================

export const deletePost = (req , res , next)=>{

    const {id} = req.body
    const query = `delete from posts where id = "${id}" `
    connection.execute(query , (err , result)=>{
        if (err){
            return res.status(404).json({msg : "query erorr !!"});
        }
        if(!result.affectedRows){
            return res.status(400).json({msg : "id is not exist"})
        }
        return res.status(200).json({msg: "done"});
    })
}
