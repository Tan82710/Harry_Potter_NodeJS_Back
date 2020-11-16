const express = require('express');
const app = express()
const axios = require("axios");
// const bodyParser = require('body-parser')
const cors = require('cors')
//Debug CORS Policy
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
         "Access-Control-Allow-Headers",
         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
         "Access-Control-Allow-Methods",
         "GET, POST, PUT, DELETE, OPTIONS"
    );
    next();
});

app.get('/', (req, res) => {
    res.send('TEST VALIDAX')
})

//Récupération des personnages
// app.get('/characters', (req, res) => {
//     axios.get('https://www.potterapi.com/v1/characters?key=$2a$10$W7ts/if.x2W/MDf3PtgQxuOJgOK/JZbFZAPI5FRdCCHNuVnz3QEMm').then((response) => {
//         console.log(response.data)

//         let result = response.data;  
//         res.json(result)
//     }).catch((err) => {
//         console.log(err);
//     });
   
// })

//Récupération des personnages
app.get('/characters', (req, res) => {
    axios.get('http://hp-api.herokuapp.com/api/characters').then((response) => {
        console.log(response.data)

        let result = response.data;  
        res.json(result)
    }).catch((err) => {
        console.log(err);
    });
   
})

//Récupération des détails de chaque personnage
// app.get('/details/:id', (req, res) => {
//     console.log('ID:', req.params.id);
//     let id = req.params.id
//     axios.get(`https://www.potterapi.com/v1/characters/${id}?key=$2a$10$W7ts/if.x2W/MDf3PtgQxuOJgOK/JZbFZAPI5FRdCCHNuVnz3QEMm`).then((response) => {
//         console.log(response.data)
//         let result = response.data;  
//         res.json(result)
//     }).catch((err) => {
//         console.log(err);
//     });
   
// })

//Récupération des détails de chaque personnage
app.get('/details/:id', (req, res) => {
    console.log('ID:', req.params.id);
    let id = req.params.id
    axios.get(`http://hp-api.herokuapp.com/api/characters`).then((response) => {
        console.log(response.data)
        let result = response.data;  
        res.json(result)
    }).catch((err) => {
        console.log(err);
    });
   
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Le serveur est connecté sur le port ${PORT}`)
})