let cities = [];

function initializeCityDatabase() {
  cities.push("Vienna");
  cities.push("San Juan");
}

function clearCityDatabase() {
  cities = [];
}

function isCity(name) {
  return cities.includes(name);
}

// as funcções beforeEach e afterEach, são funções que seram executas antes e depois de cada teste
beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});
// ----------------------------

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

// se for comentado o afterEach, esse teste vai dar erro por que ele nunca vai limpar a array cities depois que termina um teste
test("has 2 cities", () => {
  expect(cities.length).toBe(2);
});
