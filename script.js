function lItem ()
        {
        var i=document.getElementById("Item");
        var displaynumber=i.options[i.selectedIndex].value;
        document.getElementById("days").value=displaynumber;
        }


        
function ExpirationDate(date, days)
{
    var numberOfDayToAdd = document.getElementById("days").value;
    var Expdate = new Date();
    Expdate.setDate(Expdate.getDate() + 14);
    document.getElementById('ExpDate').value = Expdate.toLocaleDateString();

}
