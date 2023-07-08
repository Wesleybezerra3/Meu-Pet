$(document).ready(() => {
    
  $(".btn").click(() => {
    let text = $("#text").val().toLowerCase();
    text=text.replace(/\s/g,'');
    // Mapeamento de raças e redirecionamentos
    const raças = {
      pitbull: "pitbull",
      golden: "golden",
      dachushund:"dachushund",
      labrador:"labrador",
      pastoralemão:"pastoralemão",
      shihtzu:"shihtzu",
      pinscher:"pinscher",
    };
    if (raças.hasOwnProperty(text)){
      const url = `../pages/${raças[text]}.html`;
      $(".feedback").css("display", "block");//O loader ficará visivel

      setTimeout(() => {
        location.href = url;
      }, 1000);//Contagem até carregar a pagina

    }else {
      alert("Infelizmente não temos essa raça no nosso site.");
    }
  });
});
