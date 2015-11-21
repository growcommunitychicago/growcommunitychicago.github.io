$(function(){
    $(window).hashchange(function(){
        var hash = location.hash;
        
        if (hash != "") {
            $("#people a").each(function(){
                var that = $(this);
                if (that.attr("href") == hash) { showPerson(that); }
            });
        } else {
            clear();
        }
    });
    
    $(window).hashchange();
    
    $("#people a").click(function() { showPerson($(this)); });
    $("#profile-details .back").click(function() { clear(); });
});

function showPerson(link){
    var detailsContainer = $("#profile-details");
    var photoContainer = $("#profile-photo");
    var descriptionContainer = $("#profile-description");
    
    var description = $(link.attr("href"));
    var photo = link.find("img").clone();
    var name = link.find(".name").text();
    var title = link.find(".title").text();
    
    photoContainer.empty().append(photo);
    descriptionContainer
        .empty()
        .append("<h3><strong>" + name + "</strong>, " + title + "</h3>")
        .append(description.clone());
    
    $("#people").hide();
    detailsContainer.fadeIn();
}

function clear(){
    $("#profile-details").hide();
    $("#people").show();
    parent.location.hash = "";
}