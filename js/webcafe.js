$(function() {
    $('.btn-menubar').on('click', function() {
        $(this).parent().siblings()
            .css('display', 'flex')
    });
    $('.menubar').on('click', function() {
        $(this).parent().siblings()
            .toggleClass('main-menu-act');
    });
});