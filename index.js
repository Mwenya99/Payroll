const express = require("express");
const index = express();
const connection = require('./src/Database');
const employee = require('./src/Employee');
const { PORT } = require("./src/App_resources/resources");

index.use('/', employee);

connection.getConnection((error)=>{       // callback function
    if (error) {
        console.log("Connection to Database Failed" , error);
    }
    else {
        console.log("Connection first to Database Successful");
        connection.query('SELECT * FROM employee',(error, result) =>  //callback function to execute 
         {if (error) {
            console.log("Error in query", error);        //when unsuccessful connection is established
    
         }
         else{
            console.log("Result of query", result);      // when successful connection is established
         }
        });
    }
})

connection.getConnection((error)=>{       // callback function
    if (error) {
        console.log("Connection to Database Failed" , error);
    }
    else {
        console.log("Connection to second Database Successful");
        connection.query('SELECT * FROM supervisor',(error, result) =>  //callback function to execute 
         {if (error) {
            console.log("Error in query", error);        //when unsuccessful connection is established
    
         }
         else{
            console.log("Result of query", result);      // when successful connection is established
         }
        });
    }
})


index.listen(PORT, () => console.log("Listening on port ", PORT ));
