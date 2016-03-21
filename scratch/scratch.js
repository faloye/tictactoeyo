$(function(){

  // PRESENT X OR O FOR CHOICE


// Fade in prompt to choose ??Pulse??
$(".header").fadeOut(0,function(){
 $(this).fadeIn();
});

// Fade in col1 then col 3
$("#container > .col.1").show(2000);
$("#container > .col.3").show(2500);
// Fade in 'or'
$("#container > .col2").show(3000);

//Detect choice
var selection;

$("#container").click(function(event) {
  selection = event.target.id; // not jQuery object, so no $ sign
  console.log(selection+ " goes first");
  // Show grid
  $("#container").hide(1000);
  $("#container2").show(1000);
});

// CREATE LIs FOR GRID MAP. MIGHT BE EXTRA; MAYBE CAN USE JUST DIV

var grid = [
['','',''],
['','',''],
['','',''],
];

var popCells = function () {
  $('<div>').text(grid[0][0]).appendTo($('.cell.1'));
  $('<div>').text(grid[0][1]).appendTo($('.cell.2'));
  $('<div>').text(grid[0][2]).appendTo($('.cell.3'));
  $('<div>').text(grid[1][0]).appendTo($('.cell.4'));
  $('<div>').text(grid[1][1]).appendTo($('.cell.5'));
  $('<div>').text(grid[1][2]).appendTo($('.cell.6'));
  $('<div>').text(grid[2][0]).appendTo($('.cell.7'));
  $('<div>').text(grid[2][1]).appendTo($('.cell.8'));
  $('<div>').text(grid[2][2]).appendTo($('.cell.9'));
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
  var divIsEmpty = function( target ){
  //return true if there's not an img tag inside
  if( target.find("img").length === 0 ){
    return true;
  } else {
    return false;
  }
  }; 


// // Click
$('.cell').click(function (event) {
    // find the bug here where it the wrong image gets attached
    // its probably the wrong target for the click event
    var target = $( event.target );

    if(selection === "pacplay"){
      if( divIsEmpty( target ) ){
        // check that you prepend on the lowest DOM level
        target.append('<img id="pac" src="./imgs/pac_stencil_small.jpg" />');
        selection = 'bigplay'; // reassign X so that the next time you click it's the opposite players turn
        $('.header').html('Big');
      } else {
        $(".header").html("really? choose a different cell...");
      }
    } else {
      if( divIsEmpty( target) ){
        target.append('<img id="big" src="./imgs/big_stencil_small.jpg" />');
        selection = 'pacplay';
        $('.header').html('Pac');
      } else {
        $(".header").html("really? choose a different cell...");
      }
    }

    checkForWin();
});

// // CHECK FOR WIN
//     // Check per cell
// var checkForWin = function(){
//   var topLeft      = $('.1').find('img').attr('id');
//   var topMiddle    = $('.2').find('img').attr('id');
//   var topRight     = $(".3").find("img").attr('id');
//   var middleLeft   = $(".4").find("img").attr('id');
//   var middle       = $(".5").find("img").attr('id');
//   var middleRight  = $(".6").find("img").attr('id');
//   var bottomLeft   = $(".7").find("img").attr('id');
//   var bottomMiddle = $(".8").find("img").attr('id');
//   var bottomRight  = $(".8").find("img").attr('id');

//   // debugger
      
//      // Determine win based on if cell has same image in a row 
//   if( ((topLeft === "pac" && topMiddle === "pac") && (topMiddle === "pac" && topRight === "pac"))  ||
//       ((topLeft === "pac" &&  middle === "pac") && (middle === "pac" &&  bottomRight === "pac"))  ||
//       ((topRight === "pac" &&  middle === "pac" ) && ( middle === "pac" &&  bottomLeft === "pac" )) ||
//       ((middleLeft === "pac" &&  middle === "pac" ) && (middle === "pac" &&  middleRight === "pac")) ||
//       ((bottomLeft === "pac" &&  bottomMiddle === "pac" ) && (bottomMiddle === "pac" &&  bottomRight === "pac" )) ||
//       ((topLeft === "pac" &&  middleLeft  === "pac") && ( middleLeft === "pac" &&  bottomLeft === "pac" )) ||
//       ((topMiddle === "pac" &&  middle === "pac" ) && (middle === "pac" &&  bottomMiddle === "pac")) ||
//       ((topRight === "pac" &&  middleRight === "pac" ) && (middleRight === "pac" &&  bottomRight === "pac"))
//   ){
//     $("#prompt").html("Pac WON");
//     console.log("WIN DETECTED");
//   } else if( ((topLeft === "big" && topMiddle === "big") && (topMiddle === "big" && topRight === "big"))  ||
//              ((topLeft === "big" &&  middle === "big") && (middle === "big" &&  bottomRight === "big"))  ||
//              ((topRight === "big" &&  middle === "big" ) && ( middle === "big" &&  bottomLeft === "big" )) ||
//              ((middleLeft === "big" &&  middle === "big" ) && (middle === "big" &&  middleRight === "big")) ||
//              ((bottomLeft === "big" &&  bottomMiddle === "big" ) && (bottomMiddle === "big" &&  bottomRight === "big" )) ||
//              ((topLeft === "big" &&  middleLeft  === "big") && ( middleLeft === "big" &&  bottomLeft === "big" )) ||
//              ((topMiddle === "big" &&  middle === "big" ) && (middle === "big" &&  bottomMiddle === "big")) ||
//              ((topRight === "big" &&  middleRight === "big" ) && (middleRight === "big" &&  bottomRight === "big"))
//   ){
//         $("#prompt").html("Big WON");
//         console.log("WIN DETECTED");
//   }
// }




});
