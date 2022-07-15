
let cards = document.querySelector('.cards');
let note0 = document.getElementById('notes0')
// let cardNumber  = 0;

//basic initial template**************************************

note0.addEventListener('input',(e)=>{
  localStorage.setItem(`notes0`, e.target.value);
  note0.innerHTML = e.target.innerHTML
  localStorage.setItem('cards', cards.innerHTML)
  localStorage.setItem('cardNumber', cardNumber)
})
//********************************************************** */


//to set the page acc to the stored value on referesh***********
//setting content according to the sotored values on refresing**
if(localStorage.length)
cards.innerHTML=localStorage.getItem('cards')

if(localStorage.getItem('cardNumber'))
cardNumber= localStorage.getItem('cardNumber')
else
 cardNumber  = 0;

let noteCards = document.getElementsByClassName('card');

for(let i =0;i<noteCards.length;i++){
  document.getElementById(`notes${i}`).innerHTML = localStorage.getItem(`notes${i}`);
}
//********************************************************* */


//clearing local storage on click
const clearStorage = ()=>{
  localStorage.clear();
}

const addNote = ()=>{
  cardNumber++;
  cards.innerHTML+= `  <div class="card " id = "${cardNumber}">
  <label for="textarea" >Note ${cardNumber}</label>
  <textarea name="note" id="notes${cardNumber}" class="note" cols="30" rows="10" placeholder="Add your notes here"></textarea>
  <div class="btns">
  <button class="btnAdd btn" onclick={addNote()} >Add More</button>
    <button class="btnDel btn" onclick={deleteNote(${cardNumber})} >Delete</button>
    </div>
  </div>`;

 noteCards = document.getElementsByClassName('card');

  for(let i =0;i<noteCards.length;i++){

    let note = document.getElementById(`notes${i}`);

    note.addEventListener('input',(e)=>{
      localStorage.setItem(`notes${i}`, e.target.value);
      note.innerHTML = e.target.value
      
    })
  }
  localStorage.setItem('cards', cards.innerHTML)
  localStorage.setItem('cardNumber', cardNumber)  
} 

//deleting the cards ****************************************** */

deleteNote = (num) =>{
 document.getElementById(num).style.display = 'none';
 localStorage.removeItem(`notes${num}`);
 noteCards = document.getElementsByClassName('card');

 for(let i =0;i<noteCards.length;i++){
  
if(document.getElementById(`notes${i}`))
 {  note = document.getElementById(`notes${i}`);

   note.addEventListener('input',(e)=>{
     localStorage.setItem(`notes${i}`, e.target.value);
     note.innerHTML = e.target.value
     
   })}
 }
 localStorage.setItem('cards', cards.innerHTML)
 localStorage.setItem('cardNumber', cardNumber) 
}