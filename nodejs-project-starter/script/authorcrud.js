const db = require('../db');
let Author = db.Author;

temp = async()=>{
    let data={
        bookid:"614f47f85b21df257cc556d0",
        title:"kasim",
        desc:"123456"
    }
    console.log(data);
    try {
        var testUser = new Author(data);
        var responnse =  await testUser.save();
        console.log("res ",responnse);
        process.exit(0);

    } catch (error) {

        console.log(error);
        process.exit(0);
    }
   
}

temp();