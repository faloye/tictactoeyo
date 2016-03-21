$(function(){

  // PRESENT X OR O FOR CHOICE


// Fade in prompt to choose ??Pulse??
$(".header").fadeOut(0,function(){
 $(this).fadeIn();
});

// Fade in col1 then col 3
$(".container > .col.1").show(2000);
$(".container > .col.3").show(2500);
// Fade in 'or'
$(".container > .col2").show(3000);

//Detect choice
var selection;

$(".container").click(function(event) {
  selection = event.target.id; // not jQuery object, so no $ sign
  console.log(selection+ " goes first");
  // Show grid
  $(".container").hide(1000);
  $(".container2").show(1000);
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


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// // PLAY

// // Win check
// // Check for 3 images in row with = and 8 combos separated by ||. SYNTAX

// var row = function () {
//   return ((($('.11').children('img').length) &&  ($('.22').children('img').length) &&  ($('.33').children('img').length))
//   || (($('.13').children('img').length) &&  ($('.22').children('img').length) &&  ($('.31').children('img').length))
//   || (($('.11').children('img').length) &&  ($('.12').children('img').length) &&  ($('.13').children('img').length))
//   || (($('.21').children('img').length) &&  ($('.22').children('img').length) &&  ($('.23').children('img').length))
//   || (($('.31').children('img').length) &&  ($('.32').children('img').length) &&  ($('.33').children('img').length))
//   || (($('.11').children('img').length) &&  ($('.21').children('img').length) &&  ($('.31').children('img').length))
//   || (($('.12').children('img').length) &&  ($('.22').children('img').length) &&  ($('.32').children('img').length))
//   || (($('.13').children('img').length) &&  ($('.23').children('img').length) &&  ($('.33').children('img').length)));
// };

// var winner = row.id;

// // Players

// // X. Too much in here, I know....
//   // $('#prompt').html('X');
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// CLICKS
 // Prevent double click//
  var liIsEmpty = function( target ){
  //return true if there's not an img tag inside
  if( target.find("img").length === 0 ){
    return true;
  } else {
    return false;
  }
  }; 


// // Click
$('.row').click(function (event) {
    // find the bug here where it the wrong image gets attached
    // its probably the wrong target for the click event
    var target = $( event.target );

    if(selection === "pacplay"){
      if( liIsEmpty( target ) ){
        // check that you prepend on the lowest DOM level
        target.append('<img id="pac" src="./imgs/pac_stencil_small.jpg" />');
        selection = 'bigplay'; // reassign X so that the next time you click it's the opposite players turn
        $('.header').html('go Big!');
      } else {
        $(".header").html("really? choose a different cell...");
      }
    } else {
      if( liIsEmpty( target) ){
        target.append('<img id="big" src="./imgs/big_stencil_small.jpg" />');
        selection = 'pacplay';
        $('.header').html('go Pac!');
      } else {
        $(".header").html("really? choose a different cell...");
      }
    }

    checkForWin();
});

// CHECK FOR WIN
    // Check per cell
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
      
     // Determine win based on if cell has same image in a row 
  if( ((topLeft === "pac" && topMiddle === "pac") && (topMiddle === "pac" && topRight === "pac"))  ||
      ((topLeft === "pac" &&  middle === "pac") && (middle === "pac" &&  bottomRight === "pac"))  ||
      ((topRight === "pac" &&  middle === "pac" ) && ( middle === "pac" &&  bottomLeft === "pac" )) ||
      ((middleLeft === "pac" &&  middle === "pac" ) && (middle === "pac" &&  middleRight === "pac")) ||
      ((bottomLeft === "pac" &&  bottomMiddle === "pac" ) && (bottomMiddle === "pac" &&  bottomRight === "pac" )) ||
      ((topLeft === "pac" &&  middleLeft  === "pac") && ( middleLeft === "pac" &&  bottomLeft === "pac" )) ||
      ((topMiddle === "pac" &&  middle === "pac" ) && (middle === "pac" &&  bottomMiddle === "pac")) ||
      ((topRight === "pac" &&  middleRight === "pac" ) && (middleRight === "pac" &&  bottomRight === "pac"))
  ){
    pacWins();
    console.log("WIN DETECTED");
  } else if( ((topLeft === "big" && topMiddle === "big") && (topMiddle === "big" && topRight === "big"))  ||
             ((topLeft === "big" &&  middle === "big") && (middle === "big" &&  bottomRight === "big"))  ||
             ((topRight === "big" &&  middle === "big" ) && ( middle === "big" &&  bottomLeft === "big" )) ||
             ((middleLeft === "big" &&  middle === "big" ) && (middle === "big" &&  middleRight === "big")) ||
             ((bottomLeft === "big" &&  bottomMiddle === "big" ) && (bottomMiddle === "big" &&  bottomRight === "big" )) ||
             ((topLeft === "big" &&  middleLeft  === "big") && ( middleLeft === "big" &&  bottomLeft === "big" )) ||
             ((topMiddle === "big" &&  middle === "big" ) && (middle === "big" &&  bottomMiddle === "big")) ||
             ((topRight === "big" &&  middleRight === "big" ) && (middleRight === "big" &&  bottomRight === "big"))
  ){
    bigWins();
    console.log("WIN DETECTED");
  } else if ((($('.11').find('img').length)+($('.12').find('img').length)+($('.13').find('img').length)
              +($('.21').find('img').length)+($('.22').find('img').length)+($('.23').find('img').length)
              +($('.31').find('img').length)+($('.32').find('img').length)+($('.33').find('img').length))===9)
  {
    $(".header").text("Draw...");
    $(".header").fadeOut(4000,function(){ $(this).text("...Both great, in different ways.").fadeIn(5000); });
  }
}

/*
    $('.11').find('img').remove();
    $('.row.11 > ul > li').append('<img id="" src="./imgs/pacwin.jpg" />');
    $('.12').find('img').remove();
    $('.row.12 > ul > li').append('<img id="" src="./imgs/pacwin.jpg" />');
    $('.13').find('img').remove();
    $('.row.13 > ul > li').append('<img id="" src="./imgs/pacwin.jpg" />');
    $('.21').find('img').remove();
    $('.row.21 > ul > li').append('<img id="" src="./imgs/pacwin.jpg" />');
    $('.22').find('img').remove();
    $('.row.22 > ul > li').append('<img id="" src="./imgs/pacwin.jpg" />');
    $('.23').find('img').remove();
    $('.row.23 > ul > li').append('<img id="" src="./imgs/pacwin.jpg" />');
    $('.31').find('img').remove();
    $('.row.31 > ul > li').append('<img id="" src="./imgs/pacwin.jpg" />');
    $('.32').find('img').remove();
    $('.row.32 > ul > li').append('<img id="" src="./imgs/pacwin.jpg" />');
    $('.33').find('img').remove();
    $('.row.33 > ul > li').append('<img id="" src="./imgs/pacwin.jpg" />');
*/

   var pacWins = function () {
    $('.11').find('img').remove();
    $('.row.11').append('<img id="" src="./imgs/pacwin.jpg" />');
    $('.12').find('img').remove();
    $('.row.12').append('<img id="" src="./imgs/pacwin.jpg" />');
    $('.13').find('img').remove();
    $('.row.13').append('<img id="" src="./imgs/pacwin.jpg" />');
    $('.21').find('img').remove();
    $('.row.21').append('<img id="" src="./imgs/pacwin.jpg" />');
    $('.22').find('img').remove();
    $('.row.22').append('<img id="" src="./imgs/pacwin.jpg" />');
    $('.23').find('img').remove();
    $('.row.23').append('<img id="" src="./imgs/pacwin.jpg" />');
    $('.31').find('img').remove();
    $('.row.31').append('<img id="" src="./imgs/pacwin.jpg" />');
    $('.32').find('img').remove();
    $('.row.32').append('<img id="" src="./imgs/pacwin.jpg" />');
    $('.33').find('img').remove();
    $('.row.33').append('<img id="" src="./imgs/pacwin.jpg" />');
    $(".header").text("Pac WINS!");
    var pacAudio = $("#WinnerPac");
    pacAudio[0].play();
    $(".header").fadeOut(4000,function(){ $(this).text('...but Big had the better flow.').fadeIn(5000); });
  };

   var bigWins = function () {
    $('.11').find('img').remove();
    $('.row.11').append('<img id="" src="./imgs/bigwin.jpg" />');
    $('.12').find('img').remove();
    $('.row.12').append('<img id="" src="./imgs/bigwin.jpg" />');
    $('.13').find('img').remove();
    $('.row.13').append('<img id="" src="./imgs/bigwin.jpg" />');
    $('.21').find('img').remove();
    $('.row.21').append('<img id="" src="./imgs/bigwin.jpg" />');
    $('.22').find('img').remove();
    $('.row.22').append('<img id="" src="./imgs/bigwin.jpg" />');
    $('.23').find('img').remove();
    $('.row.23').append('<img id="" src="./imgs/bigwin.jpg" />');
    $('.31').find('img').remove();
    $('.row.31').append('<img id="" src="./imgs/bigwin.jpg" />');
    $('.32').find('img').remove();
    $('.row.32').append('<img id="" src="./imgs/bigwin.jpg" />');
    $('.33').find('img').remove();
    $('.row.33').append('<img id="" src="./imgs/bigwin.jpg" />');
    $(".header").text("Big WINS!");
    var bigAudio = $("#WinnerBig");
    bigAudio[0].play();
    $(".header").fadeOut(4000,function(){ $(this).text("...but Pac's charisma was off the charts.").fadeIn(5000); });
  };

});
