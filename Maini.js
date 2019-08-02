$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.Imagenes article').hide();
    $('.Imagenes article:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.Imagenes article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
});
