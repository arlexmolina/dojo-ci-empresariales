const app = require('./app');
const supertest = require('supertest');
const request = supertest(app); // arrange

test('get the add endpoint', async done => {
    const responde = await request.get('/add?value1=2&value2=2') // Act
    expect(responde.status).toBe(200);
    expect(responde.type).toBe('application/json');
    expect(responde.body.result).toBe(4);
    done();
});

test('get the subtract endpoint', async done => {
    const responde = await request.get('/subtract?value1=2&value2=2') // Act
    expect(responde.status).toBe(200);
    expect(responde.type).toBe('application/json');
    expect(responde.body.result).not.toBeNull();
    expect(responde.body.result).toBe(0);
    done();
});
