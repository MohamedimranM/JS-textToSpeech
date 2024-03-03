let buto = document.querySelector('button');
let text = document.querySelector('textarea');

buto.addEventListener("click", ()=>{
    let voice = new SpeechSynthesisUtterance(text.value)
    speechSynthesis.speak(voice)
    if(text.value.length <= 0){
      let wrongMessage= document.getElementById('error')
      wrongMessage.textContent='Add Text Data!'
    }else{
        let wrongMessage= document.getElementById('error')
        wrongMessage.textContent=''
    }
});



