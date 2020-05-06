const request = require("request");
const util = require('util')
const MongoClient = require('mongodb').MongoClient;
fs = require('fs');

const options = {
    method: 'GET',
    url: 'https://unogs-unogs-v1.p.rapidapi.com/api.cgi',
    qs: { t: 'deleted' },
    headers: {
        'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
        'x-rapidapi-key': 'e25aa326acmsh9ff482cbd0cc207p1bb90fjsn64431f90df34'
    }
};



request(options, function (error, response, body) {
    if (error) throw new Error(error)
    const genre = JSON.parse(body);
    

    for (var item in genre) {
        console.log(util.inspect(genre[item], { maxArrayLength: null }))

        fs.writeFileSync('deleted.json', JSON.stringify(genre), function (err) {
            if (err) return console.log(err);
            console.log('deleted > deleted.json');
        });

        
        

    }
    
    
})


// mongoimport--host Netflixdb - shard - 0 / netflixdb - shard - 00 - 00 - pnlng.mongodb.net: 27017, netflixdb - shard - 00 - 01 - pnlng.mongodb.net: 27017, netflixdb - shard - 00 - 02 - pnlng.mongodb.net: 27017 --ssl--username test--password XXXXXXXX--authenticationDatabase admin--db nf--collection genres--type json --file C: \Users\Conor\Pictures\genre.json



   




