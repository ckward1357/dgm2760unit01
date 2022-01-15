// document.getElementById('company').innerHTML = "Joe's Bed and Breakfast"

document.querySelector('header > h1').innerText = "Joe's Bed and Breakfast"

document.querySelector('header > h2').innerText = "Best B&B this side of Vernal!"

document.querySelector('main > h1').innerText = "Welcome to Joe's"



let userName = prompt("What is your name?")

// let message = "Hello " + userName + ", welcome to the finest lodging in Utah!"

let message = `Hello ${userName}, welcome to the finest lodging in Utah County! `

document.querySelector('#greeting').innerText = message

