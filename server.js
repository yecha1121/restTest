const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!\n');
});

app.post('/wmcs/api/getTestString', (req, res) => {
  // res.send('Hello World!\n');
  let str1 = req.param("str");
  let str = '{"a":""}';
  let obj = JSON.parse(str)
  obj.a = str1;
  // obj.b = 2;

  res.send(JSON.stringify(obj))
  // res.send(str0);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});


