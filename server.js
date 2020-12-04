const express = require('express');
const app = express();
const { linter } = require('./Lib/linter.js')


app.use(express.json());


// app.get('/', (req, res) => {
//     res.send('Please work');
// });


app.post('/lint', (req, res) => {
    const result = linter(req.body.lint)
    res.send(result);
});

app.listen(5000, () => {
    console.log('started on 5000')
});