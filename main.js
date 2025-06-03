const express = require('express');
const app= express();
const path = require('path');
const userModel = require('./models/User');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {    
    res.render('index');
}); 

app.get('/read',async (req, res) => {
    let users=await userModel.find();
    res.render('read',{ users });
})



app.post('/create', async (req, res) => {
    let { name, email, phone } = req.body;
    let createdUser = await userModel.create({ name, email, phone });
    res.redirect('/read');     
})


app.get('/edit/:id', async (req, res) => {
    let users=await userModel.findOne({_id:req.params.id});
    res.render('edit', { users });     
})

app.post('/update/:id', async (req, res) => {
    let { name, email, phone } = req.body;
    let users=await userModel.findOneAndUpdate({_id:req.params.id}, { name, email, phone });
    res.redirect('/read');     
})  

app.get('/delete/:id', async (req, res) => {
    let users=await userModel.findOneAndDelete({_id:req.params.id});
    res.redirect('/read');
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
}   );