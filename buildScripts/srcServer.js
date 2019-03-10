/*eslint-disable */

import express from 'express';
import path from 'path';
import opn from 'opn';
import webpack from 'webpack';
import config from '../webpack.config.dev';
/*eslint-enable */

/*eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfor: true,
  publicPath: config.output.publicPath
}));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res){
  res.json([
    {"id":1, "frist Name":"Bob", "LastName":"Smith", "email":"bob@gmail.com"},
    {"id":2, "frist Name":"Tammy", "LastName":"Norton", "email":"tnorton@yahoo.com"},
    {"id":3, "frist Name":"Tina", "LastName":"Lee", "email":"lee.tina@hotmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err){
    console.log(err);
  }else{
    opn('http://localhost:'+port, {app:['Chrome', '--incognito']});
  }
});
