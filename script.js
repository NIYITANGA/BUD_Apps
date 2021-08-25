const millisecondsInDay = 24 * 60 * 60 * 1000;
const numOfDayInMonth = 365 / 12;
const numOfDayInHour = 1 / 24;

function BeyondUseDate(date, days)
{
    
    var numberOfMonthToAdd = document.getElementById("months").value;
    var numberOfDayToAdd = document.getElementById("days").value;
    var numberOfHours = document.getElementById("hours").value;
    var totalNumberOfDay = numberOfMonthToAdd * numOfDayInMonth + numberOfDayToAdd;
    var NumbertoAdd = numberOfHours * numOfDayInHour + totalNumberOfDay;
    var BUdate = Date.now();
         
    BUdate += millisecondsInDay * NumbertoAdd;
    BUdate = new Date(BUdate);
    document.getElementById('BUD').value = dayjs(BUdate).format('MM-DD-YY h:mm A');

}


