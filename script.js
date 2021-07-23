const millisecondsInDay = 24 * 60 * 60 * 1000;

function ExpirationDate(date, days)
{
    var numberOfDayToAdd = document.getElementById("days").value;
    var Expdate = Date.now();
    Expdate += millisecondsInDay * numberOfDayToAdd;
    Expdate = new Date(Expdate);
    document.getElementById('ExpDate').value = Expdate.toLocaleDateString();

}


function lItem ()
        {
        var i=document.getElementById("Item");
        var displaynumber=i.options[i.selectedIndex].value;
        document.getElementById("days").value=displaynumber;
        }


        function lock (orientation) {
            // Go into full screen first
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
              document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
              document.documentElement.msRequestFullscreen();
            }
          
            // Then lock orientation
            screen.orientation.lock(orientation);
          }