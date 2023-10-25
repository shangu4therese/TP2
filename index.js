let randomMsg=("gradel","therese","rebo","mbiku","pacifique");

let pContener=document.querySelector('.mxtmsg');
let action=document.querySelector('button');

action.addEventListener('click',function message(){
pContener.innerHTML=randomMsg[Math.floor(Math.random() * randomMsg.length)];

});