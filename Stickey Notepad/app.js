const container = document.getElementById("container");
const addNote = document.getElementById("addNote");

const textArea = document.createElement('textarea');
const textToolBox = document.createElement('header');


const noteHead = document.createElement('textarea');
const noteSave = document.createElement('img');
const noteDelete = document.createElement('img');

function randomId(){
    return Math.ceil(Math.random()*10000000);
}


//Create note and append to the container
function createNote(){
    const note = document.createElement('div');

    const textArea = document.createElement('textarea');
    const textToolBox = document.createElement('header');


    const noteHead = document.createElement('textarea');
    const noteSave = document.createElement('img');
    const noteDelete = document.createElement('img');
    note.setAttribute('class', 'note');
    container.appendChild(note);
    textArea.setAttribute('id', "textArea");
    textToolBox.setAttribute('id', 'toolBox');
    note.appendChild(textToolBox);
    note.appendChild(textArea);
    // Adding save & delete features & as well heading feature
    noteHead.setAttribute('id', 'noteHeadText');
    textToolBox.appendChild(noteHead);
    noteHead.setAttribute('src', '/Project Icons/trash.png')
    textToolBox.appendChild(noteSave);
    noteDelete.setAttribute('src', '/Project Icons/trash.png')
    textToolBox.appendChild(noteDelete);


    //delete operation of the node
    noteDelete.addEventListener('click', (e)=>{
        // Remove the note from the container
        container.removeChild(note);
    
        // Get the note head text to use as the key for localStorage
        const noteKey = noteHead.value.trim();
    
        // Remove the corresponding item from localStorage if noteKey exists
        if (noteKey !== '') {
            localStorage.removeItem(noteKey);
            alert('Note deleted successfully!');
        } else {
            alert('Unable to delete note. Note key is empty.');
        }
    });
    

    noteSave.addEventListener('click', (e)=>{
        // Use the value of the noteHead textarea as the key
        const noteKey = noteHead.value.trim(); // Trim to remove extra spaces
    
        // Check if the note key is not empty
        if (noteKey !== '') {
            // Set item in localStorage with note key as the key and textArea content as the value
            localStorage.setItem(noteKey, textArea.value);
            alert('Note saved successfully!');
        } else {
            alert('Please add a title to your note before saving.');
        }
    });
    


}

addNote.addEventListener('click', createNote)