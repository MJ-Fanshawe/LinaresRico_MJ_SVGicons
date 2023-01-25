console.log('JavaScript is running!');

const vectorGraphic= document.querySelector('#music_note');

function logThisId() {
    console.log('clicked on this element:', this.id);
}

vectorGraphic.addEventListener('click', logThisId);