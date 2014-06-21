$(document).ready(function() {

    //create array of img tags + file names
    var numberSquares = 16,
        imgNumbers = [];
    
    for(var i = 0; i < numberSquares / 2; i++) {
        imgNumbers[i] = i + 1;
    }
    // double the array
    imgNumbers = imgNumbers.concat(imgNumbers)
    
    // assign file names
    imgNames = imgNumbers.map(function(d) {
            return $("<img src='milo" + d + ".png'>");
    });
    
    // add pictures to body
    imgNumbers.forEach(function(d, i) {
            $("<img>").attr({
                id: "milo" + d,
                src: "pinkBack.png"
            }).addClass("notRight")
            .appendTo("body");

    });
    
    // click event handler
    $("img").on("click", function() {

        var src = $(this).attr("src"),
            id = $(this).attr("id"),
            fadeTime = 250;

        //is the img source a milo picture?
        //yes
        if( src.indexOf("milo") === 0 ) {
            $(this).fadeOut(fadeTime, function() {
                $(this).attr("src", "pinkBack.png")
                .fadeIn(fadeTime);
            });
        }
        //no
        else {
            $(this).fadeOut(fadeTime, function() {
                $(this).attr("src", id + ".png")
                .fadeIn(fadeTime);
            })
        }

    });

});