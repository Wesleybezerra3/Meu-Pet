$(document).ready(() => {
  let margin = 0;
  let rotation = 0;
  $(".btn").click(() => {
    rotation += 180;
    $("nav").css("margin-left", `${margin}px`);
    if (margin == 0) {
      margin = -110;
    } else {
      margin = 0;
    };
    $('.btn').css('transform',`rotate(${rotation}deg)`)
    if(rotation == 180){
       rotation =- 180;
    };
  });
});
