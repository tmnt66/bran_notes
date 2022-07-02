let root = document.querySelector('.cards');
let card = ``;
let id = 1;


let Update = (id , NoteText) => (
    ` <div class="card${id} card">
  <label for="textarea">Note ${id}</label>
  <textarea name="note" id="notes${id}" class="note" cols="30" rows="10" placeholder="Add your notes here">${NoteText}</textarea>
  <div class="btns">
  <button class="btnAdd btn" onclick={addNote()}>Add More</button>
  <button class="btnDel btn" onclick={deleteNote()} >Delete</button>
  </div>
  </div>`
)

let NotesText = Array(10).fill('');



class Card {
    constructor(id, content, val) {
        this.index = id,
            this.content = content,
            this.val = val
    }
}


let cardData = [new Card(1, Update(1))];

let Notes = document.getElementsByClassName('note');

Array.from(Notes).forEach((element) => {
    element.addEventListener('keydown', (e) => {
        let str = e.target.id
        let idn = str.charAt(str.length-1)
        NotesText[idn-1]=e.target.value;
        console.log(idn)
        console.log(NotesText)
        // cardData[id-1].val = e.target.value
    })
})


let addNote = () => {
   if(id<10){ root.innerHTML = '';
    id++;
    cardData.splice(id, 0, new Card(id, Update(id) , NotesText[id-2]))
    cardData.forEach((val) => {
        if (val !== undefined)
            root.innerHTML += Update(val.index , NotesText[cardData.indexOf(val)] )
    })
    let Notes = document.getElementsByClassName('note');
    Array.from(Notes).forEach((element) => {
        element.addEventListener('keydown', (e) => {
            let str = e.target.id
            let idn = str.charAt(str.length-1)
            NotesText[idn-1]=e.target.value;
           
            // cardData[id-1].val = e.target.value
        })
    })}
}

let deleteNote = () => {
    if( cardData.length>1){

        root.innerHTML = '';
        id--;
        delete cardData[id];
        cardData.forEach((val) => {
            if (val !== undefined)
            root.innerHTML += Update(val.index, NotesText[cardData.indexOf(val)])
        })
    }
}



