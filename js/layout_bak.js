$(function() {
    //form input placeholder
    $('.form-column input').keyup(function(){
        var limit_num = $(this).val().length;
        var textNote = $(this).attr('placeholder');
        var form_title = $(this).prev('.form-title').text();

        if(form_title == '' || form_title == textNote){
            if(limit_num > 0) {
                $(this).closest('.form-column').find('.form-title').text(textNote).fadeIn();
            } else {
                $(this).closest('.form-column').find('.form-title').fadeOut(0);
            }
        }
    });

    /* input show delete icon */
    /* $('.form-column').hover(function(){
        $(this).append('<a class="delete"></a>');
    },function(){
        $(this).find('.delete').remove();
    }); */

    /* reset input value */
    /* $(document).on('click', '.form-column .delete', function () {
        $(this).parent('.form-column').find('input').val('');
        //$(this).parent('.form-column').find('.form-title').hide();
    }); */

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