//$(document).ready(function() {

    
    // INFORMATION
    //create array of img tags + file names
    var classes = [],
        fadeTime = 250,
        imgNumbers = [],
        numberSquares = 16;

    function shuffle(array) {
        var counter = array.length, temp, index;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    }

    for(var i = 0; i < numberSquares / 2; i++) {
        imgNumbers[i] = i + 1;
    }

    // double the array
    imgNumbers = imgNumbers.concat(imgNumbers);
        
    //shuffle the array
    imgNumbers = shuffle(imgNumbers);

    // assign file names
    imgNames = imgNumbers.map(function(d) {
            return $("<img src='milo" + d + ".png'>");
    });

    // add pictures to body
    imgNumbers.forEach(function(d, i) {
            $("<img>").attr({
                src: "pinkBack.png"
            })
            .addClass("milo" + d)
            .appendTo("body");
    });
    
    // EVENT HANDLING
    // mouse hover events
    $("img")
    .on("mouseenter", function() {
        $(this).addClass("highlight")
    }).on("mouseout", function() {
        $(this).removeClass("highlight")
    })
    // click events (only on images without the "right" class)
    $("img")
    .on("click", function() {
        
        // if it has the "right" class, exit
        if($(this).hasClass("right")){return}
        if($(this).hasClass("clicked")){return}
        
        // flip card
        $(this).removeClass("highlight")
        .attr("src", $(this).attr("class") + ".png")
        .addClass("clicked")
        
        // check if images are match
        if(document.getElementsByClassName("clicked").length == 2) {
            
            // if yes
            var first = $(document.getElementsByClassName("clicked")[0]),
                second = $(document.getElementsByClassName("clicked")[1]);
            
            if($(first).attr("class") === $(second).attr("class")) {
                $("#scoreValue").text( +$("#scoreValue").text() + 1 );
                $(first).removeClass().addClass("right");
                $(second).removeClass().addClass("right");
                
            }
            
            else {
                $(first).removeClass("clicked").attr("src" ,"pinkBack.png");
                $(second).removeClass("clicked").attr("src" ,"pinkBack.png");
            }
        }
        
    })

    