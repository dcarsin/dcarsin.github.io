
console.log("entro js");
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const output  = document.querySelector('.list');


button.addEventListener('click', () => {
  if (input.value != "") {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    output.append(li);
    deleteButton.addEventListener('click', function()
    {
      output.removeChild(li);
    }
    );
    input.focus;
    input.value = "";
  }
  });
