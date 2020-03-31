// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

document.addEventListener('DOMContentLoaded', function () {
    const spans = document.querySelectorAll('span');

    function toggleContent() {
         event.target.nextElementSibling.classList.toggle('active');
    } for (let i = 0; i < spans.length; i++) {
        spans[i].addEventListener('click', toggleContent);
    }
})