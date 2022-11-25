import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/burnFrom', (req, res) => {
    if (!req.body.account) {
        res.sendStatus(400);
        console.log("Bad info, account address needed.");
        return;
    }
    else if (!req.body.amount) {
        res.sendStatus(400);
        console.log("Bad info, amount needed.");
        return;
    }
    const account = req.body.account;
    const amount = req.body.amount;

    const axiosInstance = axios.create({
        baseURL: "https://api.starton.io",
        headers: {
            "x-api-key": `${API_KEY}`,
        },
    })

    axiosInstance.post(
        "/v3/smart-contract/binance-testnet/0x0e6C23269e61e822f909E8A008327a0E64de4b0B/call",
        {
            functionName: "burnFrom",
            params: [
                `${account}`,
                `${amount}`
            ],
            signerWallet: "0x6C0c750E4b5EB932f893cf0CcdF6E61009BdF95d",
            speed: "average"
        }
    ).then((response) => {
        res.send(response.data);
    });
});

app.listen(PORT);
console.log(`App listening on port ${PORT}`);
