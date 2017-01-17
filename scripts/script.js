
var accordion = $('.accordion');

accordion.find('dd').hide();

accordion.find('dt').on('click', function(){
    
    $(this).toggleClass('open').next('dd').slideToggle().siblings('dd:visible').slideUp().prev('dt').removeClass('open');
   // $(this).find('.skill-container').toggleClass('no-margin');
    
    $('i', this).toggleClass('ion-chevron-down ion-chevron-up');
    
    
    
});
