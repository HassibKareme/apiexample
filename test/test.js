const request = require('supertest');
const fs = require('fs');
const {
    json
} = require('express');

describe('get campus', () => {
    it('should return first campus', async () => {
        await request('https://campus-api-example.netlify.app') //Dit is de api van de docent. Je kan die van jezelf ook gebruiken.
            .get('/.netlify/functions/api/campus')
            .expect(200) //request geslaagd opvragen
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect((res) => {

                fs.writeFile("output.json"), JSON.stringify(res.body[0]), 'utf8',
                    function (err) {
                        if (err) {
                            console.log("An error occured while writing JSON Object to File.");
                            return console.log(err);
                        }

                        console.log("Json file has been saved.");
                    }
                    console.log(res.body[0]) //We verwachte de eerste campus terug.
                })
    })
})

//Json file uploaden naar 