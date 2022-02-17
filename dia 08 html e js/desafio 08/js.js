function exibeMensagem(){
    let dt = new Date();
    let hora = dt.getHours();

    if(hora > 6 && hora <= 12){
      window.alert("Bom dia!");
    }
    if( hora > 12 && hora < 18){
      window.alert("Boa tarde!");
    }else{
      window.alert("Boa noite!");
    }
    console.log("hora", hora);
}