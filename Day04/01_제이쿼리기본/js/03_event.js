
// 익명/화살표 함수 둘 다 사용가능.
// fuction()  /   ()=>
$(function(){
    $('#item1').on('click', () => {
        $('#item1').css('color','pink');
    });

    $('#item2').on('click', function() {
        // $('#item2').css('color','pink');
        $(this).css('color','pink');
    });

    $('#item3').on('mouseover', function(){
        $('#item3').css('color','blue');
        $('#item3').css('background-color','green');
    });

    $('#item3').on('mouseout', function(){
        $('#item3').css('color','pink');
        $('#item3').css('background-color','yellow');
    });

    // 메소드체인 기법
    $('#item4')
        .on('mouseover', function(){
            $(this).css('color','blue');
            $(this).css('background-color','green');
        })//여기에 ;찍으면 끊김 마지막에 ;찍기

        .on('mouseout', function(){
            $(this).css('color','pink');
            $(this).css('background-color','yellow');
    });

    $('#item5')
        .on('mouseover', function(){
            $(this).css('color','blue');
            $(this).css('background-color','green');
        })//여기에 ;찍으면 끊김 마지막에 ;찍기

        .on('mouseout', function(){
            $(this).css('color','pink');
            $(this).css('background-color','yellow');
        })
        
        .on('click', function(){
            $(this).css('color','white');
            $(this).css('background-color','violet');
        })
        .on('dblclick', function(){
            $(this).css('color','yellow');
            $(this).css('background-color','pink');
        });
    


});



