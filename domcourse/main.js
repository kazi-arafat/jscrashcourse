
// console.log(window)
// window.alert(1)

// single element

// const form_content = document.getElementById('my-form')
// console.log(form_content)

// console.log(document.querySelector('h1'))
// console.log(document.querySelectorAll('h1'))

// // multiple element

// console.log(document.querySelectorAll('.item'))

// Examples

// const ul = document.querySelector(".items")
// ul.lastElementChild.innerHTML= "<h1>Hello Last Element</h1>"
// ul.children[1].textContent = "Brad"
// ul.firstElementChild.innerText = "Hello"

// ul.remove();
// const btn = document.querySelector(".btn")
// // btn.style.background = 'green'
// btn.addEventListener('click',(e) =>{
//     e.preventDefault();
//     document.querySelector("#my-form").style.background = '#ccc';
//     document.querySelector('header').style.color = 'orange';
//     document.querySelector('.container').classList.add('bg-dark');
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const btn = document.querySelector('.btn');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'All the fields are required.'
    }
    else{
        console.log("Success");
        const user = document.createElement('li');
        user.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(user);
        userList.classList.add('display-list');
        nameInput.value = '';
        emailInput.value = '';


    }
}

