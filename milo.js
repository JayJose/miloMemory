$(document).ready(function() {

//create array of img tags + file names
var imgNumbers = [ 1,2,3,4,5,6,7 ],
    imgNames = imgNumbers.map(function(d) { 
        return $("<img src='milo" + d + ".png'>");
    });


//add pictures to body
for(var i = 0; i < imgNumbers.length; i++) {                    
    imgNames[i].addClass("miloPic").attr("id", "milo" + (i + 1)).appendTo("body");
};

$("img").on("click", function() {

var src = $(this).attr("src");
var id = $(this).attr("id")

//is the img source a milo picture?
if( src.indexOf("milo") === 0 ) {
    $(this).attr("src", "check.png");
}
    else {
        $(this).attr("src", id + ".png");
    }

//$(this).attr("src", "check.png")
//$(this).slideToggle();
});

//on click, find the object id... if src = check, flip
//it to milo; else flip it to check
//document.getElementById("milo1").src returns image link



});