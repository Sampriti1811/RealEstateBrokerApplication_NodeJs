const client = require('../config/connection.js')
const express = require('express');

exports.getAll = async (req, res, next) => {
    client.query(`Select * from customer`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
}

exports.addCustomer = async (req, res, next) => {
    const customer = req.body;

    client.query(`select * from customer where cust_name ='${customer.cust_name}'`, (err, result) => {
        user = result;
        if (result.rows.length !== 0) {
            return res.send({ "up": true })
        }
        else {
            let insertQuery = `insert into customer(cust_age, cust_gender, cust_id, cust_name, cust_password) 
    values('${customer.cust_age}', '${customer.cust_gender}', '${customer.cust_id}','${customer.cust_name}', '${customer.cust_password}')`

            client.query(insertQuery, (err, result) => {
                if (!err) {
                    res.send('Insertion was successful')
                }
                else { console.log(err.message) }
            })
            client.end;
        }
    })


}

exports.customerLogin = async (req, res, next) => {
    const customer = req.body;
    let user
    client.query(`select * from customer where cust_name ='${customer.cust_name}'`, (err, result) => {
        user = result;
        if (result.rows.length == 0) {
            return res.send({ "unp": true })
        }
        let pass = user.rows[0].cust_password;
        if (pass === customer.cust_password) {
            return res.send({ "auth": true })
        }
        return res.send({ "auth": false })
    });
}
