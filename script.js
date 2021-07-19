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


