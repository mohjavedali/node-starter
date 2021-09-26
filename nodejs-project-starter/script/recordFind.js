const db = require('../db');
const { Parser } = require('json2csv');
var fs = require('fs')
let Record = db.Record;

const fields = ['title', 'lastn', 'mobile','email', 'address', 'localAddres1','localAddres2', 'localAddres3', 'localAddres4','localAddres5', 'localAddres6', 'localAddres7','localAddres8', 'localAddres9', 'localAddres10', 'localAddres11','localAddres12', 'localAddres13', 'localAddres14','localAddres15'];
const opts = { fields };

temp = async()=>{
    // let data={
    //     title:"admin",
    //     desc:"123456"
    // }

    try {
        //var testUser = new Book(data);
        var responnse =  await db.Record.find();
        const parser = new Parser(opts);
        const csv = parser.parse(responnse);
        let writeStream = fs.createWriteStream('./records1111s.csv')
        writeStream.write(csv);
        // fs.createReadStream(__dirname+'/records.csv').pipe(csv);
        //console.log(csv);
        console.log("res ",writeStream);

    } catch (error) {

        console.log(error);
        process.exit(0);
    }
   
}

temp();