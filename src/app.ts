import express from "express";
import pool from "./database/db_connect";

const app = express();
const port = 3000;
app.get('/', async (req, res) => {
    const query = 'select * from employees;';
    const response = await pool.query(query);
    console.log(response);
    res.send('Hola Mundo');
});
app.listen(port, () =>{
    return console.log('server is listening on ${port}');
});