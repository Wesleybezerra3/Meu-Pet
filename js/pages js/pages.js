$(document).ready(() => {
  let margin = 0;
  let rotation = 0;
  $(".btn").click(() => {
    rotation += 180;
    $("nav").css("margin-left", `${margin}px`);
    if (margin == 0) {
      margin = -122;
    } else {
      margin = 0;
    };
  });
});
$(document).ready(()=>{
  let rotation = 0;
  $('#summary1').click(()=>{
    rotation+= 180;
    $('#arrow1').css('transform',`rotate(${rotation}deg)`)
    if(rotation === 180){
        rotation =- 180;
    };
  });
});
$(document).ready(()=>{
  let rotation = 0;
  $('#summary2').click(()=>{
    rotation+= 180;
    $('#arrow2').css('transform',`rotate(${rotation}deg)`)
    if(rotation === 180){
        rotation =- 180;
    };
  });
});
$(document).ready(()=>{
  let rotation = 0;
  $('#summary3').click(()=>{
    rotation+= 180;
    $('#arrow3').css('transform',`rotate(${rotation}deg)`)
    if(rotation === 180){
        rotation =- 180;
    };
  });
});
$(document).ready(()=>{
  let rotation = 0;
  $('#summary4').click(()=>{
    rotation+= 180;
    $('#arrow4').css('transform',`rotate(${rotation}deg)`)
    if(rotation === 180){
        rotation =- 180;
    };
  });
});
$(document).ready(()=>{
  let rotation = 0;
  $('#summary5').click(()=>{
    rotation+= 180;
    $('#arrow5').css('transform',`rotate(${rotation}deg)`)
    if(rotation === 180){
        rotation =- 180;
    };
  });
});
