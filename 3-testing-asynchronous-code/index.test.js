const axios = require('axios').default;

async function fetchData(){
  let teste = await axios.get('http://api.somai.org.br/v1/tis')
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    return error
  })

  return teste
}

async function string(){
  let teste = await axios.get('http://api.somai.org.br/v1/tis')
  .then(function (response) {
    return 'abacaxi'
  })
  .catch(function (error) {
    return error
  })

  return teste
}

function fetchErro(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      reject('error')
    },1000)
  })
}


// com promisse 
test('array de tis precisa ser baixado e nao pode ser null', () => {
  return fetchData().then(data => {
    expect(data).not.toBeNull();
  });
});

// com promisse porém esperando um erro
test('erro promisse', () => {
  return fetchErro().catch(data => {
    expect(data).toMatch('error');
  });
});

// com async await
test('array de tis precisa ser baixado e nao pode ser null com async', async () => {
  const data = await fetchData();
  expect(data).not.toBeNull();
});

// resolves é a espera que a função tem q dar certo 
test('the data is abacaxi', () => {
  return expect(string()).resolves.toBe('abacaxi');
});

// rejects é a espera que a função tem q dar errado 
test('the fetch fails with an error', () => {
  return expect(fetchErro()).rejects.toMatch('error');
});

// assertions pode ser passadado um numero que siguinifica a quantidade de afirmações que está sendo feita na função
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchErro().catch(e => expect(e).toMatch('error'));
});