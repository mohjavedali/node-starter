const db = require('../db');
let Record = db.Record;

temp = async()=>{
    for (let index = 0; index< 100000; index++) {
        
        let data={
            title:"kasim"+index,
            lastn:"chaudhary"+index,
            mobile:9990538642+index,
            email:"Javedkh777@gmail.com"+index,
            address:"a265 shri ram colony khajuri khas"+index,
            localAddres1:"javassss Rajasthan mansarovar"+index,
            localAddres2:"javassss Rajasthan mansarovar"+index,
            localAddres3:"javassss Rajasthan mansarovar"+index,
            localAddres4:"javassss Rajasthan mansarovar"+index,
            localAddres5:"javassss Rajasthan mansarovar"+index,
            localAddres6:"javassss Rajasthan mansarovar"+index,
            localAddres7:"javassss Rajasthan mansarovar"+index,
            localAddres8:"javassss Rajasthan mansarovar"+index,
            localAddres9:"javassss Rajasthan mansarovar"+index,
            localAddres10:"javassss Rajasthan mansarovar"+index,
            localAddres11:"javassss Rajasthan mansarovar"+index,
            localAddres12:"javassss Rajasthan mansarovar"+index,
            localAddres13:"javassss Rajasthan mansarovar"+index,
            localAddres14:"javassss Rajasthan mansarovar"+index,
            localAddres15:"javassss Rajasthan mansarovar"+index,
            desc:"123456"+index,
        }
        console.log(data);
        try {
    
            var testUser = new Record(data);
            var responnse =  await testUser.save();
            console.log("res ",responnse);
            // process.exit(0);
    
        } catch (error) {
    
            console.log(error);
            // process.exit(0);
        
    }
 }
   
}
temp();
// for(let i = 2; i <=100000; i++){
//     temp();
// }