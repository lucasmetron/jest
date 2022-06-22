let cities = [];

// aqui as funções estao assincronas
function initializeCityDatabase() {
  return new Promise((resolve) => {
    setTimeout(() => {
      cities.push("Vienna");
      cities.push("San Juan");
      resolve();
    }, 100);
  });
}

function clearCityDatabase() {
  return new Promise((resolve) => {
    setTimeout(() => {
      cities = [];
      resolve();
    }, 100);
  });
}

function isCity(name) {
  return cities.includes(name);
}

// as funcções beforeAll e afterAll, são funções que seram executas apenas 1 vez antes do incio(beforeAll) e 1 vez no termino (afterAll)
beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

// mesmo se for comentado o afterAll, esse teste vai dar certo pq o beforeAll só executado 1 vez, então só tem 2 cidades de array
test("has 2 cities", () => {
  expect(cities.length).toBe(2);
});
