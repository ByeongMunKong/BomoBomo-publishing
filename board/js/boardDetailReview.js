
//서비스리뷰 게시판 목록으로 이동
function showReviewListBtn(){

    let reviewListBtn = document.querySelector('.update-delete-btn');


    reviewListBtn.addEventListener('click', function(){
        location.href="/board/html/boardServiceReview.html"
    });
};