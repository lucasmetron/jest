test("dois mais dois é quatro", () => {
  expect(2 + 2).toBe(4);
});

test("comparadando se um objeto é igual o outro", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("comparadando se um objeto é igual o outro", () => {
  const data = { one: 1 };
  data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("comparadando se uma array é igual a outra", () => {
  const data = [1];
  data.push(2);
  expect(data).toEqual([1, 2]);
});

test("adicionando números positivos, e o resultado nao pode ser zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("comparadando se um objeto NÂO é igual o outro", () => {
  const data = { one: 1 };
  data.tree = 3;
  expect(data).not.toEqual({ one: 1, tree: 2 });
});

test("nulo", () => {
  const n = null;
  expect(n).toBeNull();
  // por mais que seja null, n é um valor definido por isso do toBeDefined
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  // Em not.toBeTruthy, como o valor é zero, considera como false
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test("um", () => {
  const z = 1;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  // Em toBeTruthy, como o valor é 1, considera como true
  expect(z).toBeTruthy();
  expect(z).not.toBeFalsy();
});

test("dois mais dois", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe e toEqual são equivalentes para números
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// Para numeros flutuantes (quebrados), não utilize o toBe() por que essa função sempre vai procrar pelo valor exato, então use o toBeCloseTo que dará o valor aproximado

test("adicionando números de ponto flutuante", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);     Isso não vai funcionar por causa de um erro de arredondamento
  expect(value).toBeCloseTo(0.3); // Isso funciona.
});

// string pode ser comparado com expressões regulares

test('não existe I em team', () => {
  expect('team').not.toMatch(/I/);
});

test('mas existe "stop" em Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});


// verificando dentro de uma array se existe o item esperado

const shoppingList = [
  'fraldas',
  'kleenex',
  'sacos de lixo',
  'papel toalha',
  'leite',
];

test('a lista de compras tem leite nela', () => {
  expect(shoppingList).toContain('leite');
  expect(new Set(shoppingList)).toContain('leite');
});

function compileAndroidCode() {
  throw new Error('você está usando o JDK errado');
}

test('compilando para android segue conforme esperado', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // Você também pode procurar pela mensagem exata de erro ou uma regexp
  expect(() => compileAndroidCode()).toThrow('você está usando o JDK errado');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});