$(document).ready(function(){

var accordion = $('.accordion');

accordion.find('dd').hide();
    

accordion.find('dt').on('click', function(){
    
    $(this).toggleClass('open').next('dd').slideToggle().siblings('dd:visible').slideUp().prev('dt').removeClass('open');   
    
    $('i', this).toggleClass('ion-chevron-down ion-chevron-up');
    
    var otherArrows = $(this).siblings('dt').find('i');
    
    if(otherArrows.hasClass('ion-chevron-up')){
        otherArrows.removeClass('ion-chevron-up');
        otherArrows.addClass('ion-chevron-down');
    }
    
    
});

});
