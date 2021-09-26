const db = require('../db');
let Book = db.Book;

temp = async()=>{
    let data={
        title:"admin",
        desc:"123456"
    }

    try {
        var testUser = new Book(data);
        var responnse =  await testUser.save();
        console.log("res ",responnse);
        process.exit(0);

    } catch (error) {

        console.log(error);
        process.exit(0);
    }
   
}

temp();