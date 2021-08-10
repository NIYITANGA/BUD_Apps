const millisecondsInDay = 24 * 60 * 60 * 1000;
const numOfDayInMonth = 365 / 12;

function BeyondUseDate(date, days)
{
    
    var numberOfMonthToAdd = document.getElementById("months").value;
    var numberOfDayToAdd = document.getElementById("days").value;
    var totalNumberOfDay = numberOfMonthToAdd * numOfDayInMonth + numberOfDayToAdd;
    var BUdate = Date.now();
    BUdate += millisecondsInDay * totalNumberOfDay;
    BUdate = new Date(BUdate);
    document.getElementById('BUD').value = BUdate.toLocaleDateString();

}


  
