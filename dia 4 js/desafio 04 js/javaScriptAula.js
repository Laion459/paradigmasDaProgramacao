function soma(a,b){

    return a+b;
  
  }
  
  function converteCaixaAlta(texto){
  
    return texto.toUpperCase();
  
  }
  
  let substracao = function (a, b){
  
    return a - b;
  
  }
  
  
  
  let multiplicacao = (a,b) => a * b;
  
  
  
  let divisao = (a,b) => {
  
    if(b == 0){
  
      console.log("Erro.... Divisor 0");
  
    }else{
  
      return a / b;
  
    }
  
  }
  
  
  
  let sub = substracao;
  
  
  
  function cumprimento(){
  
    console.log("Olá! Vamos programar em JS/Node!");
  
  }
  
  
  
  function despedida(){
  
    console.log("Obrigado pelo trabalho. Até amanhã!");
  
  }
  
  let sum = soma;
  
  
  
  function resultados(valorSoma, funcaoMensagem){
  
    console.log("O valor obtido foi", valorSoma);
  
    funcaoMensagem();
  
  }
  
  
  
  
  
  
  
  let n1 = 5;
  
  let n2 = 3;
  
  
  
  let m1 = multiplicacao(n1,n2);
  
  console.log("mult", m1);
  
  
  
  let d1 = divisao(n1,n2);
  
  console.log("div", d1);
  
  
  
  let c1 = sub(n1,n2);
  
  console.log("Sub", c1);
  
  let c = soma(n1,n2);
  
  console.log("Soma", c);
  
  let d = sum(c,n1);
  
  console.log("Sum", d);
  
  let dt = new Date();
  
  let x = null;
  
  if(dt.getSeconds() > 30){
  
    x = despedida;
  
  }else{
  
    x = cumprimento;
  
  }
  
  //x();
  
  resultados(d, x);
  
  resultados(c1, function (){
  
    console.log("Oi! Eu sou uma função anônima!!!");
  
  });
  
  //console.log(typeof(dt.getSeconds), typeof(soma), typeof(sum), sum === soma, 1 == "1", 1 === "1", 1+"1","1"+1);
  
  
  
  
  
  let lista = [5.5, 7.8, 9.5, 10, 10, 3, 2, 8];
  
  let limear = 6;
  
  let listaFiltrada = [];
  
  for(let i = 0; i < lista.length; i++){
  
    if(lista[i] > 6){
  
      listaFiltrada.push(lista[i]);
  
    }
  
  }
  
  console.log("Lista original:", lista, "lista filtrada", listaFiltrada);
  
  
  
  listaFiltrada = lista.filter(el => el > limear);
  
  console.log("Lista original:", lista, "lista filtrada (com filter)", listaFiltrada);
  
  
  
  listaMapeada = lista.map((x) => parseInt(x));
  
  console.log("lista mapeada:", listaMapeada);
  
  
  
  let somatorio = listaMapeada.reduce((valorAcumulado, valorAtual)=>{
  
      return valorAcumulado + valorAtual;
  
  });
  
  console.log("Somatório", somatorio);
  
  console.log("média", somatorio/listaMapeada.length);
  
  
  
  let produtorio = listaMapeada.reduce((valorAcumulado, valorAtual)=>{
  
    return valorAcumulado * valorAtual;
  
  });
  
  console.log("Produtório", produtorio);
  
  
  
  listaMapeada = lista.map( function (element){
  
    return element * element;
  
  });
  
  console.log("lista mapeada:", listaMapeada);
  
  
  
  
  
  
  
  lista = ["arthur","fabio","diogo"];
  
  listaMapeada = lista.map(converteCaixaAlta);
  
  console.log("lista mapeada:", listaMapeada);