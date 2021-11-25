const { APPCENTER } = require('ci-info');
const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

const users = [];

const app = express();
const port = 3000;

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'Ashar'})
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res) => {

})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    console.log(users);
})

app.use(express.static(path.join(__dirname, 'public')));

app.get('/chapter-3', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/chapter-3/index.html'));
});
app.get('/chapter-4', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/chapter-4/index.html'));
});


app.listen(port);
console.log('Server started at http://localhost:' + port);