import * as IPFS from 'ipfs-core'
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import all from 'it-all'
import axios from 'axios';
import { concat as uint8ArrayConcat } from 'uint8arrays/concat'
import { fromString as uint8ArrayFromString } from 'uint8arrays/from-string'
import { toString as uint8ArrayToString } from 'uint8arrays/to-string'

dotenv.config();
const app = express();
const ipfs = await IPFS.create({repo: 'ok' + Math.random()})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/ipfs/ping', (req, res) => {
  res.status(200).send('pong');
});

app.post('/ipfs/add', async (req, res) => {
  const cid  = await ipfs.add(req.body.data);
  const str = cid.path.toString();
  console.log(str);
  //! ADD CID TO DATABASE
  axios({
    method: 'POST',
    url: 'http://127.0.0.1:9020/db/newPost',
    data: {
      wallet_id: req.body.wallet_id,
      cid: str,
      title: req.body.title,
    }
  })
  .then(response => {
    res.status(response.status).send('ok');
  })
  .catch(error => {
    res.status(error).send(error);
  });
});

app.get('/ipfs/get', async (req, res) => {
  var data = {};
  await axios({
    method: 'GET',
    url: 'http://127.0.0.1:9020/db/getAllPost',
  })
  .then(response => {
    data = response.data;
  })
  .catch(error => {
    res.status(error).send(error);
  });
  console.log(data);
  for (let content in data) {
    const byteArray = uint8ArrayConcat(await all(ipfs.cat(data[content][1])));
    data[content][3] = uint8ArrayToString(byteArray);
  }
  res.status(200).send(data);
});

app.listen(process.env.PORT, () =>
    console.log('listening on port ' + process.env.PORT)
)