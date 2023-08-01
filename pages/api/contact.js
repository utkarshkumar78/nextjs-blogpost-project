import {MongoClient} from 'mongodb'
const uri=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lxus8cs.mongodb.net/nextblog?retryWrites=true&w=majority`

export default async function handler(req,res){
 if(req.method==="POST"){
  const body=req.body

  let client;

  try{
       client=await  MongoClient.connect(uri)

  }catch(err){

   return res.status(500).json({message:"Something went wrong"})
  }
 
  try{

      const db=client.db()
   
      await db.collection('contact').insertOne(body)
      client.close()
  }catch(err){
    return res.status(500).json({message:"Could not add contact detail"})
  }



  return res.status(200).json({statusTexdt:"success"})


 }
return res.status(422).json({statusText:"failed"})

}