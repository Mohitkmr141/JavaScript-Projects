const buttons = document.querySelectorAll('.button');
console.log(buttons);

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    if (e.target.id === 'grey') {
      document.querySelector('body').style.backgroundColor = 'grey';
    } else if (e.target.id === 'white') {
      document.querySelector('body').style.backgroundColor = 'white';
    } else if (e.target.id === 'blue') {
      document.querySelector('body').style.backgroundColor = 'blue';
    } else {
      document.querySelector('body').style.backgroundColor = 'yellow';
    }
  });
});
