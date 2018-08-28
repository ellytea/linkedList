// Variables

var bookmarkTitle = document.querySelector('#enter-website');
var bookmarkURL = document.querySelector('#enter-url');
var createBookmark = document.querySelector('.create-bookmark');
var displayTitle = document.querySelector('.site-title');
var displayURL = document.querySelector('.url');
var readBookmarks = document.querySelectorAll('.read-button');
var deleteBookmark = document.querySelector('.delete');
var cardContainer = document.querySelector('.cards-container');


// Event Listeners
createBookmark.addEventListener('click', makeBookmark);
// deleteBookmark.addEventListener('click', deleteBookmark);


// functions
function makeBookmark(event){
  event.preventDefault();
  var newLi = document.createElement('li');
  newLi.innerHTML = `<div class="one">
        <p class="site-title"> ${bookmarkTitle.value}</p>
        <p class="url"> ${bookmarkURL.value}</p>
        <p class="read-button">Read<span class="delete">Delete</span></p>
      </div>`
  newLi.addEventListener('click', markRead);
  cardContainer.prepend(newLi);
}


function markRead(e) {
  	e.target.classList = ['read']
 }








