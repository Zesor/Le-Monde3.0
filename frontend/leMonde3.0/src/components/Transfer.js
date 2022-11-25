import React from 'react';
import axios from 'axios';

export default class Transfer extends React.Component {

    manage_transfer(account) {
        var data = JSON.stringify({
            "account": account,
            "amount": 100000000000
        });
    
        var config = {
            method: 'post',
            url: 'http://localhost:8080/burnFrom',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
    
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);
            });    
    }

    render() {
        return (
            <>
            </>
        )
    }
}