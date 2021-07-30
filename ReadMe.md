# Beyond Use Date (BUD) quick reference Application
As a pharmacy Technician, I decided to work on this project after realizing that I and my collegues were wasting time pulling the computer calendar, and do some mental calculation to know the expiration date of the drugs that need to be repacked in single doses.

This BUD quick reference apps is a smart way of knowing the expiration date of the drugs after being repacked. 

## Link
 - [repo] (https://github.com/NIYITANGA/BUD_Reference_WebApps.git)
 - [Live] (https://niyitanga.github.io/BUD_Reference_WebApps/)


## This WebApps was built With

- HTML
- CSS
- JavaScript

## Screenshots
  -  Mobile Layout : (orientation:Portrait)

![Mobile Portrait Layout](https://github.com/NIYITANGA/BUD_Reference_WebApps/blob/master/image/portrait.png)

  - First media query creates a better layout when a mobile is rotated: (orientation:landscape)

![Mobile Landscape Layout](https://github.com/NIYITANGA/BUD_Reference_WebApps/blob/master/image/landscape.png)

  - Second media query creates a better user experience on tablet and Ipad screen

![Tablet Layout](https://github.com/NIYITANGA/BUD_Reference_WebApps/blob/master/image/desktop.png)

  - Third media query creates a better user experience on large screen: laptop and desktop

![Desktop Layout](https://github.com/NIYITANGA/BUD_Reference_WebApps/blob/master/image/desktop.png)


## Features Included

1. First CSS Feature: `Nav menu`

   As you can see on the above screenshots of a mobile and tablet, this WebApps has a navigation menu that switches between vertical and horizontal styles when you expand it.
   If you expdand the nav menu widely, it floats to the right-corner of the large screen(Desktop  and laptop).

2. CSS Feature : `“nth-of-type”`

    - This is how it looks like on large screen: laptop and desktop

   ![nth-of-type](https://github.com/NIYITANGA/BUD_Refence_WebApps/blob/master/image/nth-of-type-Landscape.png)
  
    
    I used `“nth-of-type”` to target the odd numbers of the selected-option drugs. In the css file, under container layout of the core style; you can see this
    
      `select :nth-of-type(odd) 
      {
        color:white;
        background-color: black;
       }`

3. JavaScript Feature: displaying Assigned Days
    
    After selecting the item you want to know its BUD; the assigned days before expiration date is displayed automaticaly. 
    In the JavaScript file, the function `lItem ()` is used to create `var i` and `var displaynumber`. Since each option (item) has its value (assigned days), both vars are used to peform the action of displaying the assigned days number in its input with `Id="days"` when the item is selected. 

4. JavaScript Feature: displaying date after click

    A `const millisecondsInDay = 24 * 60 * 60 * 1000` , and two more `vars (numberOfDayToAdd and Expdate)` were created and used in the second function.The result of the first function is used also in the second function `function ExpirationDate(date, days)` after being transformed in millisecondInDay  `(millisecondsInDay * numberOfDayToAdd)`. 
    The calculation of the expiration date is done by adding the transformed assigned days to tody's date with `var=Date.now()`. In order to display the expirtion date in the `format mm/dd/yyyy`; I used the `toLocaleDateString function`.

## How to use the BUD quick reference Apps
It is easy to use on mobile (protrait and landscape layout) and computer. 
   - First step is to select the item you are repackaging. If the item is selected , the apps displays the assigned expiration days automatically. 
   - In case you want to increase or decrease number of days assigned, this apps gives you the option to do that. You can also write the number of days assigned manualy using your keyboard.
   - To know the expiration date of the selected item, you have to click on the `click here` button, which will become yellowgreen. The expiration date will appear in the empty box beside the clicked button.
   - If you want to check BUD of another item, you will select it from the options as you did it previously. 

## Author

 **Theophile Niyitanga**
  - [Email](mailto:theophileca@gmail.com? subject=BUD "Hi!")