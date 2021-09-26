const db = require('../db');
let Author = db.Author;

temp = async()=>{
    // let data={
    //     title:"admin",
    //     desc:"123456"
    // }

    try {
        //var testUser = new Book(data);
        //var responnse =  await db.Book.find();
        //var responnse =  await db.Author.find().populate('bookid').setOptions({limit:1,'title':'asc'}).sort({_id:-1});
       // var responnse = await db.Author.aggregate([{$match:{title:"kasim"}},{$count:"Total in kaism"}])
       var responnse = await Author.aggregate(
        [
            { 
                "$lookup" : {
                          from: "Book",
                          localField: "bookid",
                          foreignField: "_id",
                          as: "bookdata"
                          }
    
            }
       ]
    );
        // console.log("res ", responnse);
        console.log("res ",JSON.stringify(responnse));
        process.exit(0);

    } catch (error) {

        console.log(error);
        process.exit(0);
    }
   
}

temp();