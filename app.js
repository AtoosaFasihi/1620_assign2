

const noteList = document.querySelector('#note-list')
const div1 = document.querySelector('#one')
const div2 = document.querySelector('#two')
const div3 = document.querySelector('#three')


const createNoteButton = document.querySelector('#note-area-button')

const notesList = [
    { 0: "note 1", 1: "this is a note" },
    { 0: "note 2", 1: "this is a second note" }
]

noteList.addEventListener('click', (e) => {
    //console.log(e.target.innerText)
    const note = notesList.find(n => n[0] == e.target.innerText)
    console.log(note)
})

//div2.addEventListener('click', func)
//div2.addEventListener('click', (e) => {
//   e.stopPropagation()
//   e.target.style.color = "pink"
//})

div1.addEventListener('click', (e) => {
   e.target.style.color = "green"
 })

div3.addEventListener('click', (e) => {
    e.target.style.color= "yellow"

})


createNoteButton.addEventListener('click', createNoteComponent)

//create a note taking component 
function createNoteComponent () {
    const newNoteArea = `
        <div id="note-area">
            <textarea id= "new-note-value" rows="5" cols="35"></textarea>
            <button onclick= "saveNote(noteList)">save</button>
            <button onclick="cancelNote()">cancel</button>
        </div>
    `
    const createNoteDiv = document.querySelector('#create-note-area')
    createNoteDiv.insertAdjacentHTML('afterbegin', newNoteArea)
}
//save a note 
function saveNote (arr) {
    const newNote = document.querySelector('#new-note-value').value
    const newNoteArr = newNote.replace (/\n/, '|||').split('|||')
    arr.push({...newNoteArr})
    console.log(arr)
}
//cancel a note 
function cancelNote () {
    const removeNoteArea = document.querySelector('#note-area')
    removeNoteArea.remove()
}



const btn = document.querySelector('#Dark-Theme')


btn.addEventListener('click', () => { 
    const updated_color = document.querySelector('#Dark-Theme')
})

function change()
{
    var elem = document.getElementById("btn");
    if (elem.value=="light Theme") elem.value = "Dark Theme";
    else elem.value = "light Theme";
    document.body.style.backgroundColor = "black"; 
}

