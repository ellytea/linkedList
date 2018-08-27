//Variables


var bookmarkTitle = document.querySelector('#enter-website');
var bookmarkURL = document.querySelector('#enter-url');
var createBookmark = document.querySelector('.create-bookmark');
var displayTitle = document.querySelector('.site-title');
var displayURL = document.querySelector('.url');
var readBookmark = document.querySelector('.read');
var deleteBookmark = document.querySelector('.delete');

var cardContainer = document.querySelector('.cards-container');


//Event Listeners
createBookmark.addEventListener('click', makeBookmark);
// readBookmark.addEventListener('click', readBookmark);
// deleteBookmark.addEventListener('click', deleteBookmark);



//functions
function makeBookmark(event){
  event.preventDefault();
  var newLi = document.createElement('li');
  newLi.innerHTML = `<div class="one">
        <p class="site-title"> ${bookmarkTitle.value}</p>
        <p class="url"> ${bookmarkURL.value}</p>
        <p class="read">Read<span class="delete">Delete</span></p>
      </div>`
  cardContainer.prepend(newLi);
}

