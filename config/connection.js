// Set up MySQL connection.
var mysql = require("mysql");
var connection = (process.env.CLEARDB_DATABASE_URL)
var connectionF = mysql.createConnection(connection)

function handleDisconnect() {
  connectionF = mysql.createConnection(connection); 
                                                  

  connectionF.connect(function(err) {             
    if(err) {                                     
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); 
    }                                    
  });                                    
                                 
  connectionF.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                        
    } else {                                      
       throw err;                                 
    }});
}

handleDisconnect();

// ORM Connection
module.exports = connectionF;
