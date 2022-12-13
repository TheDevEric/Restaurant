//Acccordian, Datepicker, Dialogue, Slider, ToolTip
const newreserve= document.getElementById("reserve")
const date = document.getElementById("date")
const slider = document.getElementById("people")
const slid = document.getElementById("slider-range-max")
const sub = document.getElementById("sub")
const amt = document.getElementById("amount")
const people = document.getElementById("people")
const dia = document.getElementById("dialog")
newreserve.addEventListener("click", res)
sub.addEventListener("click", submit)


function res(){
    date.style.visibility = "visible";
    sub.style.visibility = "visible";
    slider.style.visibility = "visible";
    amt.style.visibility = "visible";
    people.style.visibility = "visible";
    slid.style.visibility = "visible";
    
    $( function() {
        $( "#datepicker" ).datepicker();
      } );
    
      $( function() {
        $( "#slider-range-max" ).slider({
          range: "max",
          min: 1,
          max: 10,
          value: 2,
          slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
          }
        });
        $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
      } );
}

function submit(){
    date.style.visibility = "hidden";
    slider.style.visibility = "hidden";
    sub.style.visibility = "hidden";
    amt.style.visibility = "hidden";
    people.style.visibility = "hidden";
    slid.style.visibility = "hidden";
    dia.style.visibility = "visible";
    $( function() {
        $( "#dialog" ).dialog({
          autoOpen: true,
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 1000
          }
        });
     
        $( "#sub" ).on( "click", function() {
          $( "#dialog" ).dialog( "open" );
        });

        $( function() {
          $( document ).tooltip();
        } );
      } );
}
