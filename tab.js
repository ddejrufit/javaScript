var a = $('.tab-button').length;

// var i 는 안됨
for(let i =0; i< a; i++){

    $('.tab-button').eq(i).on('click',function(){
        $('.tab-button').removeClass('orange')
        $('.tab-button').eq(i).addClass('orange')
        $('.tab-content').removeClass('show')
        $('.tab-content').eq(i).addClass('show')
    });

}

//   $('.tab-button').eq(0).on('click',function(){
//         $('.tab-button').removeClass('orange')
//         $('.tab-button').eq(0).addClass('orange')
//         $('.tab-content').removeClass('show')
//         $('.tab-content').eq(0).addClass('show')
//     });


