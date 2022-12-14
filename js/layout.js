$(function() {
    /* open popup */
    $('a.popup').click(function(){
        var id = $(this).attr('rel');
        $('#'+id).show();
    });

    /* close popup */
    $('.popup-theme .overlay-bg, .popup-close-x, .popup-close').click(function() {
        $(this).closest('.popup-theme').hide();
    });

    /* time select */
    $('.time-nav > a').click(function(){
        var id = $(this).attr('rel');
        $('.time-nav > a').removeClass('current');
        $(this).addClass('current');
        $('.time-pane').removeClass('current').hide();
        $('.time-pane#'+id).addClass('current').show();
    });

    /* datepicker */
    if( $('.datepicker').length > 0 ){
        $('#date-from, #date-to').datepicker({
            showOtherMonths: true,
            selectOtherMonths: true,
            dateFormat: 'yy/mm/dd'
        });
    }

    /* onchecked change style */
    $('.object-list label').click(function(){
        $(this).removeClass('nochecked');
        $('.object-list label').not(this).addClass('nochecked');
    });
});