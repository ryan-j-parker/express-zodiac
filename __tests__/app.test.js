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

describe('horoscope routes', () => {
  it('/horoscopes/:sign should return a single horoscope by sign', async () => {
    const res = await request(app).get('/horoscopes/leo');
    const leo = {
      name: 'leo',
      horoscope:
        'Try not to let your heart and mind spiral if the object of your desires seems closed off or distant this morning, dear Leo, as the Aquarius moon squares off with the nodes of fate. This cosmic climate will trigger emotional shutdowns within many, making it important that you give your sweetie some space if they need it. Be sure to focus on self-care and supporting yourself as the hours unfold, especially when Luna squares off with Uranus this afternoon. This celestial exchange will cause you to hit a wall if your balance is struggling, so be sure to give yourself a timeout.',
    };
    expect(res.body).toEqual(leo);
  });
});
