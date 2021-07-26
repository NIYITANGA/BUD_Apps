# Beyond Use Date (BUD) quick reference Application
As a pharmacy Technician, I decided to work on this project after realizing that I and my collegues were wasting time pulling the computer calendar, and do some mental calculation to know the expiration date of the drugs that need to be repacked in single doses.

This BUD quick reference apps is a smart way of knowing the expiration date of the drugs after being repacked. 

## Link
 - [repo] (https://github.com/NIYITANGA/BUD_Refence_WebApps.git)
 - [Live] (https://niyitanga.github.io/BUD_Refence_WebApps/)


## this Apps was built With

- HTML
- CSS
- JavaScript

## Screenshots
  -  Mobile Layout : (orientation:Portrait)

![Mobile Portrait Layout](https://github.com/NIYITANGA/BUD_Refence_WebApps/blob/master/image/portrait.png)

  - First media query : (orientation:landscape)

![Mobile Landscape Layout](https://github.com/NIYITANGA/BUD_Refence_WebApps/blob/master/image/landscape.png)

  - Second media query : Large screen desktop or laptop

![Mobile Desktop Layout](https://github.com/NIYITANGA/BUD_Refence_WebApps/blob/master/image/desktop.png)

## Features Included

1. CSS Feature : `“nth-of-type”`

    - This is how it looks like on the mobile (orientation:landscape)

   ![nth-of-type Landscape Layout](https://github.com/NIYITANGA/BUD_Refence_WebApps/blob/master/image/nth-of-type-Landscape.png)
  
    
    I used `“nth-of-type”` to target the odd numbers of the selected-option drugs. In the css file, under container layout of the core style; you can see this
    
      `select :nth-of-type(odd) 
      {
        color:white;
        background-color: black;
       }`

2. JavaScript Feature: displaying Assigned Days
    
    After selecting the item you want to know its BUD; the assigned days before expiration date is displayed automaticaly. 
    In the JavaScript file, the function `lItem ()` is used to create `var i` and `var displaynumber`. Since each option (item) has its value (assigned days), both vars are used to peform the action of displaying the assigned days number in its input with `Id="days"` when the item is selected. 

3. JavaScript Feature: displaying date after click

    A `const millisecondsInDay = 24 * 60 * 60 * 1000` , and two more `vars (numberOfDayToAdd and Expdate)` were created and used in the second function.The result of the first function is used also in the second function `function ExpirationDate(date, days)` after being transformed in millisecondInDay  `millisecondsInDay * numberOfDayToAdd`. 
    The calculation of the expiration date is done by adding the transformed assigned days to tody's date with `var=Date.now()`. In order to display the expirtion date in the `format mm/dd/yyyy`; I used the `toLocaleDateString function`.

## How to use the BUD quick reference Apps
It is easy to use on mobile (protrait and landscape layout) and computer. 
   - First step is to cselect the item you are repackaging. If the item is selected , the apps gives you in second the assigned expiration days. 
   - In case you want to increase or decrease number of days assigned, this apps gives you the option to do that. You can also write the number of days assigned manualy using your keyboard.
   - To know the expiration date of the selected item, you have to click on the click here button, which will become yellowgreen. The expiration date will appear in the empty box beside the clicked button.
   - If you want to check BUD of another item, you will select it from the selected options as you did it before in the first step. 

