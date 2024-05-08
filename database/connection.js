const mongoose = require('mongoose')

const connection =  async(db) => {
    try{
         await mongoose.connect(db);
         console.log('Database connection established!!!')

    }   catch(e){
            console.log(e)
            throw new Error('error connecting to the database')
        }
}

module.exports = connection

//  await mongoose.connect('mongodb://127.0.0.1:27017/socialMedia');