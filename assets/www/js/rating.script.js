$(document).bind('pageinit', function(){
        $('#rating input.star').rating();
        $('#rating form').submit(function(){
            $('#rating input').attr('readonly', 'readonly');
            $('#rating form').hide();
            $('#rating #thanks').show();
            return false;
});