const express = require('express');
const {router, database} = require ('./App_resources/resources');
const connection = require('./Database');

router.get('/employee/:employee_id', (request, response) => { 

    const employee_id = request.params.employee_id; // requests individual parameter value id

    connection.query(`SELECT * FROM employee WHERE employee_id = ? `, [employee_id], (error,result) =>{
     
        if(error){

            response.status(404).send("Error retrieving employee details");
            console.log('Error retrieving employee details', error);
        }
         if(result.length)  {  //length of the database table (number of records in table)

          //  const {first_name, last_name, supervisor, ...newEmployee} = result[0]

           const {employee_id} =  result[0];
            response.status(201).json({employee_id}); // status code 201 means request succeeded
            console.log('Employee Details successfully retrieved with ID:', employee_id, result);
        }
        else {
            response.status(404).send("Employee ID not found"); //returns error if id does not exist in database 
            console.log("Employee ID not found");                  
        }
    })

})
 console.log("Database", database);
module.exports = router;