$(function(){
    // Navigation
    $("#nav a, a.more").click(function() {
        var elementClicked = $(this).attr("href");
        var destination = $(elementClicked).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-75}, 500 );
    });
    
    // People
    /*$("#people a").click(function() {
        var destination = $("#team").offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-75}, 500 );
    });*/
});