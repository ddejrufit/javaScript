var a = $('.tab-button').length;

// var i 는 안됨
// for(let i =0; i< a; i++){

//     $('.tab-button').eq(i).on('click',function(){
//         탭열기(i)
//     });

// }

// 이벤트 버블링을 응용해서 탭 열기
    // $('.list').click(function(e){
    //     if(e.target == document.querySelectorAll('.tab-button')[0]){
    //        탭열기(0) 
    //     }if(e.target == document.querySelectorAll('.tab-button')[1]){
    //         탭열기(1) 
    //     }if(e.target == document.querySelectorAll('.tab-button')[2]){
    //         탭열기(2) 
    //     }
    // })

    // dataset응용 탭열기
    $('.list').click(function(e){
      탭열기(e.target.dataset.id)
    })


function 탭열기(숫자){
        $('.tab-button').removeClass('orange')
        $('.tab-button').eq(숫자).addClass('orange')
        $('.tab-content').removeClass('show')
        $('.tab-content').eq(숫자).addClass('show')
    }
//   $('.tab-button').eq(0).on('click',function(){
//         $('.tab-button').removeClass('orange')
//         $('.tab-button').eq(0).addClass('orange')
//         $('.tab-content').removeClass('show')
//         $('.tab-content').eq(0).addClass('show')
//     });


