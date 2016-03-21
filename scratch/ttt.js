$(function(){

  // PRESENT X OR O FOR CHOICE

  // function initialize(){

  // }

$(".choice").fadeOut(0,function(){
 $(this).fadeIn();
});

$(".which").show(1000);

var selection;
//Detect choice
$(".which").click(function(event) {
  selection = event.target.id; // not jQuery object, so no $ sign
  console.log("User chose " + selection);
  // Show grid
  $(".choice").hide(1000);
  $(".grid").show(1000);
  $("#prompt").show(1000);
});

// CREATE LIs FOR GRID MAP. MIGHT BE EXTRA; MAYBE CAN USE JUST DIV

var grid = [
['','',''],
['','',''],
['','',''],
];

var popCells = function () {
  $('<li>').text(grid[0][0]).appendTo($('.row.11 > ul'));
  $('<li>').text(grid[0][1]).appendTo($('.row.12 > ul'));
  $('<li>').text(grid[0][2]).appendTo($('.row.13 > ul'));
  $('<li>').text(grid[1][0]).appendTo($('.row.21 > ul'));
  $('<li>').text(grid[1][1]).appendTo($('.row.22 > ul'));
  $('<li>').text(grid[1][2]).appendTo($('.row.23 > ul'));
  $('<li>').text(grid[2][0]).appendTo($('.row.31 > ul'));
  $('<li>').text(grid[2][1]).appendTo($('.row.32 > ul'));
  $('<li>').text(grid[2][2]).appendTo($('.row.33 > ul'));
}

popCells();

// PLAY

// Win check
// Check for 3 images in row with = and 8 combos separated by ||. SYNTAX

var row = function () {
  return ((($('.11').children('img').length) &&  ($('.22').children('img').length) &&  ($('.33').children('img').length))
  || (($('.13').children('img').length) &&  ($('.22').children('img').length) &&  ($('.31').children('img').length))
  || (($('.11').children('img').length) &&  ($('.12').children('img').length) &&  ($('.13').children('img').length))
  || (($('.21').children('img').length) &&  ($('.22').children('img').length) &&  ($('.23').children('img').length))
  || (($('.31').children('img').length) &&  ($('.32').children('img').length) &&  ($('.33').children('img').length))
  || (($('.11').children('img').length) &&  ($('.21').children('img').length) &&  ($('.31').children('img').length))
  || (($('.12').children('img').length) &&  ($('.22').children('img').length) &&  ($('.32').children('img').length))
  || (($('.13').children('img').length) &&  ($('.23').children('img').length) &&  ($('.33').children('img').length)));
};

// is going to check if there's a matching row, update the prompt
var checkForWin = function(){
  var topLeft      = $('.11').find('img').attr('id');
  var topMiddle    = $('.12').find('img').attr('id');
  var topRight     = $(".13").find("img").attr('id');
  var middleLeft   = $(".21").find("img").attr('id');
  var middle       = $(".22").find("img").attr('id');
  var middleRight  = $(".23").find("img").attr('id');
  var bottomLeft   = $(".31").find("img").attr('id');
  var bottomMiddle = $(".32").find("img").attr('id');
  var bottomRight  = $(".33").find("img").attr('id');

  // debugger

  if( ((topLeft === "xxxx" && topMiddle === "xxxx") && (topMiddle === "xxxx" && topRight === "xxxx"))  ||
      ((topLeft === "xxxx" &&  middle === "xxxx") && (middle === "xxxx" &&  bottomRight === "xxxx"))  ||
      ((topRight === "xxxx" &&  middle === "xxxx" ) && ( middle === "xxxx" &&  bottomLeft === "xxxx" )) ||
      ((middleLeft === "xxxx" &&  middle === "xxxx" ) && (middle === "xxxx" &&  middleRight === "xxxx")) ||
      ((bottomLeft === "xxxx" &&  bottomMiddle === "xxxx" ) && (bottomMiddle === "xxxx" &&  bottomRight === "xxxx" )) ||
      ((topLeft === "xxxx" &&  middleLeft  === "xxxx") && ( middleLeft === "xxxx" &&  bottomLeft === "xxxx" )) ||
      ((topMiddle === "xxxx" &&  middle === "xxxx" ) && (middle === "xxxx" &&  bottomMiddle === "xxxx")) ||
      ((topRight === "xxxx" &&  middleRight === "xxxx" ) && (middleRight === "xxxx" &&  bottomRight === "xxxx"))
  ){
    $("#prompt").html("X WON");
    console.log("WIN DETECTED");
  } else if( ((topLeft === "oooo" && topMiddle === "oooo") && (topMiddle === "oooo" && topRight === "oooo"))  ||
             ((topLeft === "oooo" &&  middle === "oooo") && (middle === "oooo" &&  bottomRight === "oooo"))  ||
             ((topRight === "oooo" &&  middle === "oooo" ) && ( middle === "oooo" &&  bottomLeft === "oooo" )) ||
             ((middleLeft === "oooo" &&  middle === "oooo" ) && (middle === "oooo" &&  middleRight === "oooo")) ||
             ((bottomLeft === "oooo" &&  bottomMiddle === "oooo" ) && (bottomMiddle === "oooo" &&  bottomRight === "oooo" )) ||
             ((topLeft === "oooo" &&  middleLeft  === "oooo") && ( middleLeft === "oooo" &&  bottomLeft === "oooo" )) ||
             ((topMiddle === "oooo" &&  middle === "oooo" ) && (middle === "oooo" &&  bottomMiddle === "oooo")) ||
             ((topRight === "oooo" &&  middleRight === "oooo" ) && (middleRight === "oooo" &&  bottomRight === "oooo"))
  ){
        $("#prompt").html("O WON");
        console.log("WIN DETECTED");
  }
  // $('#prompt').html('X');
}

var winner = row.id;

// Players

// X. Too much in here, I know....

var liIsEmpty = function( target ){
  //return true if there's an img tag inside
  if( target.find("img").length === 0 ){
    return true;
  } else {
    return false;
  }
}// li is empty

// });

$('.grid').click(function (event) {
    // find the bug here where it the wrong image gets attached
    // its probably the wrong target for the click event
    var target = $( event.target );

    if(selection === "x"){
      if( liIsEmpty( target ) ){
        // check that you prepend on the lowest DOM level
        target.prepend('<img id="xxxx" src="./imgs/X.png" />');
        selection = 'o'; // reassign X so that the next time you click it's the opposite players turn
        $('#prompt').html('O');
      } else {
        $("#prompt").html("choose a different cell!");
      }
    } else {
      if( liIsEmpty( target ) ){
        target.prepend('<img id="oooo" src="./imgs/o_small.png" />');
        selection = 'x';
        $('#prompt').html('X');
      } else {
        $("#prompt").html("choose a different cell!");
      }
    }

    checkForWin();
});





});
