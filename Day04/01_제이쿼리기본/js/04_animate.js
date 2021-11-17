
// 익명/화살표 함수 둘 다 사용가능.
// fuction()  /   ()=>
$(function(){

   //item1
   $('#item1 .hide').on('click',function(){
    $('#item1 .inner').hide();
   });

   $('#item1 .show').on('click',function(){
    $('#item1 .inner').show();
   });

   $('#item1 .hide1000').on('click',function(){
    $('#item1 .inner').hide(1000);
   });

   $('#item1 .show1000').on('click',function(){
    $('#item1 .inner').show(1000);
   });


   //item2
   $('#item2 .fadeOut').on('click',function(){
      $('#item2 .inner').fadeOut(2000);
   });

   $('#item2 .fadeIn').on('click',function(){
      $('#item2 .inner').fadeIn(2000);
   });

   $('#item2 .fadeToggle').on('click',function(){
      $('#item2 .inner').fadeToggle(2000);
   });

   $('#item2 .fadeTo').on('click',function(){
      $('#item2 .inner').fadeTo('slow',0.8);
   });


   //item3
   $('#item3 .slideDown').on('click',function(){
         $('#item3 .inner').slideDown();
   });

   $('#item3 .slideUp').on('click',function(){
      $('#item3 .inner').slideUp();
   });

   $('#item3 .slideToggle').on('click',function(){
      $('#item3 .inner').slideToggle();
   });

   //item4
   $('#item4 .animate').on('click',function(){
      //.animate(css속성, 지속시간);
      $('#item4 .inner').animate({
         'left': '400px',
         'opacity':  '0.5',  
      },5000);
   });


   //item5
   $('#item5')
      .on('mouseover',function(){
         $('#item5 .inner').stop().animate({
            'opacity': '0.5'
         },1000);
      })
      .on('mouseout',function(){
         $('#item5 .inner').stop().animate({
            'opacity': '0.9'
         },1000);
      })


});
