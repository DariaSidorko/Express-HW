
const express = require('express');
const app = express();

const colors = require('./data');
//console.log(data);

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


app.get('/', (req, res) => {
  res.send(
    `<a href='/colors'> Learn more about colors</a>
    `)
});

app.get('/colors', (req, res) => {
  res.render('Index', { colors: colors });
})

app.get('/colors/:indexOfColorsArray', (req, res) => {
  res.render('Data', { 
    color: colors[req.params.indexOfColorsArray],
    index: req.params.indexOfColorsArray
});
});

app.get('/colors/code/:indexOfColorsArray', (req, res) => {
  res.render('Code', { 
    color: colors[req.params.indexOfColorsArray] 
});
});




app.listen(3000, () => {
  console.log('listening');
});