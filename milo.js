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
            }).appendTo("body");

    });
    
    // click event handler
    $("img").on("click", function() {

        var src = $(this).attr("src");
        var id = $(this).attr("id")

        //is the img source a milo picture?
        if( src.indexOf("milo") === 0 ) {
            $(this).attr("src", "pinkBack.png");
        }
        else {
            $(this).attr("src", id + ".png");
        }

});