const news = document.querySelector('.header_bottom');
news.onclick = function changeContent(){
     window.location.href = 'translate.html';
} 


const test = document.getElementsByClassName('test_flex_week');
// console.log(test[0]);

for(var i = 0; i < test.length; i++){
     test[i].onclick = function(){
          window.location.href = 'test.html';
     } 
}


const study = document.getElementsByClassName('study_bg_flex_bg');

for(var i = 0; i < study.length; i++){
     study[i].onclick = function(){
          window.location.href = 'test.html';
     } 
}

const card = document.querySelector('.study_bg_card');
console.log(card);
card.onclick = function(){
     window.location.href = 'card.html';
} 