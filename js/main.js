console.log('JavaScript is running!');

const vectorGraphic = document.querySelector('.iconBox');

function logThisId() {
    console.log('clicked on this icon:', this.id);
}
vectorGraphic.addEventListener('click', logThisId);

