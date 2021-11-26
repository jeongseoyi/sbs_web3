$(function(){

    const interverTime = 5000
    const fadeTime = 2000
    // :gt(index)
    // -index 보다 큰 번호의 요소들을 선택
    // 첫 번째 사진 제외하고 숨김

    $('#slide > div:gt(0)').hide()

        setInterval(function(){
            //슬라이드 박스의 첫 번째 자식요소                     //   1             2       ---> 6
            $('#slide > div:first').fadeOut(fadeTime)                // 1번 째 사진  2번 째 사진  ---> 1번째 사진
                                   .next().fadeIn(fadeTime)         //  2번 째 사진  3번 째 사진  ---> 2번째 사진
                                   .end().appendTo('#slide');  //   1번 째 사진  2번 째 사진  ---> 1번째 사진
        }, interverTime);


});

// .fadeOut(1000) : 서서히 어둡게 1초동안
// .next() : 선택한 요소의 다음 요소를 선택하는 메서드
// .fadeIn(1000) : 서서히 밝게 1초 동안
// .end() : 현재 선택한 요소의 이전 요소 선택하는 메서드
// .appendTo('#slide') : 선택한 요소를 지정한 부모요소의 마지막 자식 요소로 추가하는 메서드