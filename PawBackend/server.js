import express, { response } from 'express';
import mysql from 'mysql'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt, { hash } from 'bcrypt'
import cookieParser from 'cookie-parser';
const salt = 10;

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT"],
    credentials: true
}));
app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'pawdb'
})

// check connection
db.connect((err) => {
    if(err) console.log(err);
    else console.log("MySQL Connected...");
})

app.post('/Singup', (req, res) =>{
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
        bcrypt.hash(req.body.password, salt, (err, hash) =>{
            console.log(hash)
            if(err) return res.json({Error: "Error for hassing Password"});
            const values = [
                req.body.name,
                req.body.email,
                hash
            ]
            console.log(values)
            db.query(sql, [values], (err, result) =>{
                if(err) return res.json({Error: "Inserting data Error in server"});
                return res.json({Status: "Success"})
            })
        })
})

app.post('/Login', (req, res) => {
    const sql = 'SELECT * FROM login WHERE email = ?';
    db.query(sql, [req.body.email], (err, data) => {
        if(err) return res.json({Error: "Login Error in server"});
        if(data.length > 0){
            console.log(req.body.password)

            console.log(data[0].password)
            bcrypt.compare(req.body.password, data[0].password, (err, response) => {
                if(err) return res.json({Error: "Password compare error"});
                console.log(response)
                if(response) {
                    const name = data[0].name;
                    const email = data[0].email;
                    const id = data[0].id;
                    const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: '1d'});
                    res.cookie('token', token)
                    return res.json({Status: "Success", data: {name, email, id, token}});
                } else {
                    return res.json({Error: "Password not matched"})
                }
            })
        } else {
            return res.json({Error: "No Email existed"});
        }
    })
})

app.put('/editprofil', async(req, res) => {
    console.log(req.body);
    let sql = "UPDATE login SET name = ?, email = ?"
    let values = [
        req.body.name,
        req.body.email,
        req.body.id
    ]

    if(req.body.password){
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if(err) return res.json({Error: "Error for hassing Password"});
            values.push(hash);
        })
        sql += ", password = ?"
    }
    sql += " WHERE id = ?"

    db.query(sql, values, (err, result) => {
        if(err) return res.json({Error: "Update Error in server"});
        return res.json({Status: "Success", data: {name: req.body.name, email: req.body.email}})
    })
})


app.post('/FAQ', (req, res) => {
    const sql = "INSERT INTO message (`name`, `email`, `message`) Values (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.message
    ]
    db.query(sql, [values], (err, result) =>{
        if(err) return res.json({Error: "Inserting data Error in server"});
        return res.json({Status: "Success"})
    })
})

app.post('/Beranda', (req, res) => {
    const sql = "INSERT INTO touch (`name`, `email`, `message`) Values (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.message
    ]
    db.query(sql, [values], (err, result) =>{
        if(err) return res.json({Error: "Inserting data Error in server"});
        return res.json({Status: "Success"})
    })
})


app.post('/Bookfix', (req, res) => {
    const sql = "INSERT INTO book (`name`, `nophone`, `email`, `type`, `namepet`, `gender`, `ras`, `age`, `weight`, `complaint`) Values (?)";
    const values = [
        req.body.name,
        req.body.nophone,
        req.body.email,
        req.body.type,
        req.body.namepet,
        req.body.gender,
        req.body.ras,
        req.body.age,
        req.body.weight,
        req.body.complaint
    ]
    db.query(sql, [values], (err, result) =>{
        if(err) return res.json({Error: "Inserting data Error in server"});
        return res.json({Status: "Success"})
    })
})

app.get('/Forumdiskusi', (req, res) => {
    const sql = "SELECT * FROM thread";
    db.query(sql, (err, result) => {
        if(err) return res.json({Error: "Selecting data Error in server"});
        return res.json({data: result})
    })
})

app.post('/Tambahforumdiskusi', (req, res) => {
    const sql = "INSERT INTO thread (`judul`, `isi`) Values (?)";
    const values = [
        req.body.judul,
        req.body.isi,
    ]
    db.query(sql, [values], (err, result) =>{
        if(err) return res.json({Error: "Inserting data Error in server"});
        return res.json({Status: "Success"})
    })
})

app.listen(5000, () => {
    console.log("Server started on port 5000");
})
