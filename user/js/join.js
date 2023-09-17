$(".joinBtn").click(function() {
 
    let id = $("#id").val();
    let pw = $("#pw").val();
    let pwCh = $("#pwCh").val();
    let name = $("#name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    
    if(id && pw && pwCh && name && email && phone) {

    } else {
        alert("입력을 안 한 정보가 있습니다.");
        return false;
    }


    if(pw != pwCh) {
        $('.labelPwCh').css('display','block')
        $('.labelEm').css('display','none')  
        return false;
    } else {
        $('.labelPwCh').css('display','none')
    }

    if(email.includes('@')) {
    } else {
        $('.labelEm').css('display','block')  
        $('.labelPh').css('display','none')
    }

    if(phone.length != 11) {
        $('.labelEm').css('display','none')  
        $('.labelPh').css('display','block')
    } 

    


});

