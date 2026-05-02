const xhr = new XMLHttpRequest(); // creates new HTTP message
xhr.addEventListener('load', ()=>{
  console.log(xhr.response);
}); // listens or waits for an event
xhr.open('GET', 'https://supersimplebackend.dev'); // first parameter is what type of message, second parameter where to send this message
xhr.send();
//xhr.response; // It takes time for request to travel so xhr.response will be undefined, it's asynchronous
//status code that starts with 4 or 5 means it was failed, 5 means a problem with backend, if it starts with 2 it has succeded
//BAckend API, aplication programming interface