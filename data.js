ql= require('mysql');
exports.connecting = function(){
   var connection = mysql.createConnection({
           host: 'localhost',
           user: 'root',
           password: 'shnak74tjrn',
           database: 'mydb'
   });
   return connection;
};
