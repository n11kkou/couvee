
function big(element){
    element.style.fontSize = "35px";
}
function small(element){
    element.style.fontSize = "30px";
}


function return_top() {
  scroll(0, $('#header').position().top)
}


$("#cou").animate({top: '38%'},1200);
$("#counone").animate({top: '35%'},1200);

$("#hand1").animate({left: '750px'},1000);
$("#hand2").animate({left: '600px'},1000);


function openNav(){
   document.querySelector(".bg-text").style.display = "block";
   document.body.style.overflow = "hidden"; 
}
function closeNav(){
   document.querySelector(".bg-text").style.display = "none";
   document.body.style.overflow = "scroll";
  } 



// slider //
 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
// slider //


// description of products //
function popup1(){
    document.querySelector(".popup1").style.display = "flex";
    $(".popup1").animate({opacity: "1"}, "slow");
    document.body.style.overflow = "hidden";  }       
function close_popup1(){
    $(".popup1").animate({opacity: "0"}, "slow");
    document.querySelector(".popup1").style.display = "none";
    document.body.style.overflow = "scroll"; }

function popup2(){
    document.querySelector(".popup2").style.display = "flex";
    $(".popup2").animate({opacity: "1"}, "slow");
    document.body.style.overflow = "hidden"; }
function close_popup2(){
    $(".popup2").animate({opacity: "0"}, "slow");
    document.querySelector(".popup2").style.display = "none";
    document.body.style.overflow = "scroll"; }

function popup3(){
    document.querySelector(".popup3").style.display = "flex";
    $(".popup3").animate({opacity: "1"}, "slow");
    document.body.style.overflow = "hidden"; }
function close_popup3(){
    $(".popup3").animate({opacity: "0"}, "slow");
    document.querySelector(".popup3").style.display = "none";
    document.body.style.overflow = "scroll"; }

function popup4(){
    document.querySelector(".popup4").style.display = "flex";
    $(".popup4").animate({opacity: "1"}, "slow");
    document.body.style.overflow = "hidden"; }
function close_popup4(){
    $(".popup4").animate({opacity: "0"}, "slow");
    document.querySelector(".popup4").style.display = "none";
    document.body.style.overflow = "scroll"; }

function popup5(){
    document.querySelector(".popup5").style.display = "flex";
    $(".popup5").animate({opacity: "1"}, "slow");
    document.body.style.overflow = "hidden"; }
function close_popup5(){
    $(".popup5").animate({opacity: "0"}, "slow");
    document.querySelector(".popup5").style.display = "none";
    document.body.style.overflow = "scroll"; }
// description of products //
