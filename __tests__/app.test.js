const request = require('supertest');
const app = require('../lib/app');
const { zodiac } = require('../lib/zodiac-data');

describe('zodiac routes', () => {
  it('/zodiac should return a list of zodiac signs', async () => {
    const res = await request(app).get('/zodiac');
    const expected = zodiac.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expect(res.body).toEqual(expected);
  });
});

describe('zodiac routes', () => {
  it('/zodiac/:id should return a single zodiac sign by ID', async () => {
    const res = await request(app).get('/zodiac/9');
    const sagittarius = {
      id: '9',
      name: 'sagittarius',
      dates: 'Nov 22 - Dec 21',
      symbol: 'Archer',
    };
    expect(res.body).toEqual(sagittarius);
  });
});
