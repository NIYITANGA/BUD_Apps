function lItem ()
        {
        var i=document.getElementById("Item");
        var displaynumber=i.options[i.selectedIndex].value;
        document.getElementById("days").value=displaynumber;
        }

