const request =require ('supertest');

describe('get campus', () => {
    it('should return first campus', async () => {
        await request('http://campus-api-example.netlify.app') //Dit is de api van de docent. Je kan die van jezelf ook gebruiken.
        .get('/.netlify/functions/api/campus')
        .expect(200) //request geslaagd opvragen
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect((res) => {
            console.log(res.body[0]) //We verwachte de eerste campus terug.
        }
    )})
})

