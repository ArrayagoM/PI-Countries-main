const request = require('supertest');
const app = require('../src/app');
const { Country, Activity, conn } = require('../src/db.js');

const countries = [  { name: 'Argentina', code: 'ARG', capital: 'Buenos Aires', region: 'Americas', subregion: 'South America', area: 2780400, population: 44494502 },  { name: 'Mexico', code: 'MEX', capital: 'Mexico City', region: 'Americas', subregion: 'Central America', area: 1964375, population: 128649565 },  { name: 'Spain', code: 'ESP', capital: 'Madrid', region: 'Europe', subregion: 'Southern Europe', area: 505992, population: 46754783 },];

// describe('GET /countries', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
//   beforeEach(async () => {
//     await Country.sync({ force: true });
//     await Activity.sync({ force: true });
//     await Country.bulkCreate(countries, { returning: true });
//     const activities = [      { name: 'Hiking', difficulty: 3, duration: 5, season: 'Winter', countryId: 1 },      { name: 'Skiing', difficulty: 4, duration: 7, season: 'Winter', countryId: 1 },      { name: 'Sightseeing', difficulty: 1, duration: 1, season: 'All year', countryId: 2 },      { name: 'Cultural visit', difficulty: 1, duration: 3, season: 'All year', countryId: 2 },      { name: 'Surfing', difficulty: 3, duration: 7, season: 'Summer', countryId: 2 },    ];
//     await Activity.bulkCreate(activities, { returning: true });
//   });

//   it('should get all countries with their activities', async () => {
//     const res = await request(app).get('/countries');
//     expect(res.statusCode).toEqual(200);
//     expect(res.body.length).toEqual(3);
//     expect(res.body[0].activities.length).toEqual(2);
//     expect(res.body[1].activities.length).toEqual(3);
//     expect(res.body[2].activities.length).toEqual(0);
//   });

//   it('should get a country by name', async () => {
//     const res = await request(app).get('/countries?name=arg');
//     expect(res.statusCode).toEqual(200);
//     expect(res.body.length).toEqual(1);
//     expect(res.body[0].name).toEqual(countries[0].name);
//     expect(res.body[0].code).toEqual(countries[0].code);
//     expect(res.body[0].activities.length).toEqual(2);
//   });

//   it('should get a country by code', async () => {
//     const res = await request(app).get('/countries?code=esp');
//     expect(res.statusCode).toEqual(200);
//     expect(res.body.length).toEqual(1);
//     expect(res.body[0].name).toEqual(countries[2].name);
//     expect(res.body[0].code).toEqual(countries[2].code);
//     expect(res.body[0].activities.length).toEqual(3);
//   });

// });


describe("POST /activity", () => {
  test("It should respond with 200 and create a new activity in the database", async () => {
    const response = await request(app)
      .post("/activity")
      .send({
        idCountries: [1, 2],
        name: "Hiking",
        difficulty: "3",
        duration: "02:00:00",
        season: "summer",
      });
      
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("name", "Hiking");
    expect(response.body).toHaveProperty("difficulty", "3");
    expect(response.body).toHaveProperty("duration", "02:00:00");
    expect(response.body).toHaveProperty("season", "summer");
    expect(response.body.Countries).toHaveLength(2);
  });

  test("It should respond with 404 when name, difficulty, duration, and season are missing", async () => {
    const response = await request(app).post("/activity").send({});
    expect(response.statusCode).toBe(404);
  });
});
