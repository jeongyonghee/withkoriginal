$('.openPopup1').click(function(){
    $('.popupbox1').addClass('active');
})
$('.openPopup2').click(function(){
    $('.popupbox2').addClass('active');
})
$('.openPopup3').click(function(){
    $('.popupbox3').addClass('active');
})
$('.openPopup4').click(function(){
    $('.popupbox4').addClass('active');
})
$('.openPopup5').click(function(){
    $('.popupbox5').addClass('active');
})
$('.openPopup6').click(function(){
    $('.popupbox6').addClass('active');
})
$('.openPopup7').click(function(){
    $('.popupbox7').addClass('active');
})
$('.openPopup8').click(function(){
    $('.popupbox8').addClass('active');
})





$('.popupbox, .popupbox > .popup > .btn-close, .popupbox > .popup > .popupcontent > button').click(function(){
    $('.popupbox').removeClass('active')
})

$('.popupbox > .popup').click(function(){
    return false;
})

$('li.yellow').click(function(){
    $(this).toggleClass('abc')
})