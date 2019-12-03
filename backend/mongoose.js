const mongoose=require('mongoose');
// const config=require('config');
// const url= JSON.parse(config.get('mongoURI'));
const url="mongodb+srv://vaishakhmh:"+encodeURIComponent('Gamblers@1')+"@cluster0-f4q2o.mongodb.net/Social?retryWrites=true&w=majority";

const connect=async ()=>{
    try{
       await mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true})
       console.log('DB Connected');
        
    }catch(e){
        console.error(e);
        process.exit(1);

    }
}

module.exports=connect;