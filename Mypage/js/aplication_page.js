//버튼 체크시 성별 단락이 나타나는 코드 
$(document).ready(function() {
    
    $('.one-check').change(function(){
        if($('.one-check').is(':checked')){
            console.log($('.one-check').is(':checked'));
            $('.text-area-1').hide();
        }
    })

    $('.two-check').change(function(){
        if($('.two-check').is(':checked')){
            console.log($('.two-check').is(':checked'));
            $('.text-area-1').show();
        }
    })

});


//남자, 여자 선택시 색상 변화
$(document).ready(function() {
    let labels=$('input-m').is(':checked');
    console.log(labels);
    console.log("클릭성공~");
    $('input-m').change(function(){
        console.log("클릭성공");
        labels.prop('checked',true);
        console.log("dkssudjdjdj");
        if(labels){
            console.log(labels);
            $('.label').css('backgroundColor','#0ba891');
            $('.label').css('color','white');
        }


        })
    });