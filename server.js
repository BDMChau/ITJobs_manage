const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const path = require('path');
const jobRoute = require('./routes/job.route');
const expressLayouts = require('express-ejs-layouts');
//////////
app.set('view engine', 'ejs');
app.set('views', './views');
app.set('layout', 'layouts/layout');

app.use(expressLayouts); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, 'public'))); 


/////////
app.get('/', (req, res) => {
    res.render('search')
})

app.use('/jobs', jobRoute);



app.listen(port, () => {
    console.log("Server is listening at port "+ port);
});