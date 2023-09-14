
// 후기관리 창 띄우기 
var isBoardVisible = false; // 초기에는 보이지 않는 상태
var isNull=false;
$('.reviewtab1').on('click', function() {
    if (isNull) {
        // 다른 요소 숨김
        $('.review-list-area1').css('display', 'none');
        // 현재 요소 스타일 변경
        $('.reviewtab2').css('backgroundColor', 'white');
        $('.reviewtab2').css('color', 'black');
    }
    if (isBoardVisible) {
        $('.reviewtab1').css('backgroundColor', 'white');
        $('.reviewtab1').css('color', 'black');
        $('.review-list-area').css('display', 'none'); // 이미 보이는 상태이면 숨김
    } else {
        $('.reviewtab1').css('backgroundColor', '#0ba891');
        $('.reviewtab1').css('color', 'white');
        $('.review-list-area').css('display', 'block'); // 보이지 않는 상태이면 보이게 함
    }
    
    isBoardVisible = !isBoardVisible; 
    isNull=false;// 상태를 반대로 변경
    console.log(1);
});

// 이벤트관리 창 띄우기 

$('.reviewtab2').on('click',function(){
    if (isBoardVisible) {
        // 다른 요소 숨김
        $('.review-list-area').css('display', 'none');
        // 현재 요소 스타일 변경
        $('.reviewtab1').css('backgroundColor', 'white');
        $('.reviewtab1').css('color','black');
        console.log("색상바꾸기 성공!")
    }
    if(isNull){
        $('.reviewtab2').css('backgroundColor', 'white');
        $('.reviewtab2').css('color', 'black');
        $('.review-list-area1').css('display', 'none');
    }else {
        $('.reviewtab2').css('backgroundColor', '#0ba891');
        $('.reviewtab2').css('color', 'white');
        $('.review-list-area1').css('display', 'block'); // 보이지 않는 상태이면 보이게 함
    }
    // isBoardVisible = false;
    isNull =!isNull;
    isBoardVisible = false;
    console.log(2);
})
