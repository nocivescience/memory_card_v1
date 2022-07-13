const btnComment=document.querySelector('.btn-comment');
const btnAsk=document.querySelector('.btn-ask');
const btnAnswer=document.querySelector('.btn-answer');
const btnEnter=document.querySelector('.btn-enter');
const btnDelete=document.querySelector('.btn-delete');
const textareaQuestion1El=document.querySelector('#exampleFormControlTextarea1');
const textareaAnswer2El=document.querySelector('#exampleFormControlTextarea2');
const storageEl=document.querySelector('.storage');
const stageEl=document.querySelector('.stage');
// const btnInfo=document.querySelector('.btn-info');
// const btnLight=document.querySelector('.btn-light');
// const btnDark=document.querySelector('.btn-dark');
let currentCard=0;
const cardsEl=[];
const cardsData=getCardData();
function setCardData(card){
    localStorage.setItem('cards',JSON.stringify(card));
    window.location.reload();
}
function getCardData(){
    const card=JSON.parse(localStorage.getItem('cards'));
    return card===null?[]:card;
}
function createCard(data,index){
    const card=document.createElement('div');
    card.classList.add('card');
    card.innerHTML=`
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">tarjeta n°${index+1}</div>
            <div class="card-body">
              <h5 class="card-title">${data.question}</h5>
              <p class="card-text">${data.answer}</p>
            </div>
        </div>
    </div>
    `;
    storageEl.appendChild(card);
}
function createCards(){
    cardsData.forEach((data,index)=>{
        createCard(data,index);
    });
}
btnEnter.addEventListener('click',()=>{
    const question=textareaQuestion1El.value;
    const answer=textareaAnswer2El.value;
    const newCard={question,answer};
    cardsData.push(newCard);
    setCardData(cardsData);
    createCard(newCard,currentCard);
});
createCards();
