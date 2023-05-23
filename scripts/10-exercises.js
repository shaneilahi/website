 // 10c.
 const isButtonExist = document.querySelector('.jjs-button').classList.contains('jjs-button');
 if (isButtonExist) {
   console.log('yes it does')
 } else {
   console.log('no');
 }

 // 10d.
 const gamingButton = document.querySelector('.gaming-button');
 const game = () => {
   if (!gamingButton.classList.contains('isGaming-button')) {
     gamingButton.classList.add('isGaming-button');
   } else {
     gamingButton.classList.remove('isGaming-button');
   }
 }
 
 // 10e.
 const addToggle = className => {
   const button = document.querySelector(`.${className}`);

   if (!button.classList.contains('button-toggle')) {
     button.classList.add('button-toggle');
   } else {
     button.classList.remove('button-toggle');
   }

 }