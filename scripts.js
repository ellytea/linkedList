//Variables


var bookmarkTitle = document.querySelector('#enter-website');
var bookmarkURL = document.querySelector('#enter-url');
var createBookmark = document.querySelector('.create-bookmark');
var displayTitle = document.querySelector('.site-title');
var displayURL = document.querySelector('.url');
var readBookmark = document.querySelector('.read');
var deleteBookmark = document.querySelector('.delete');

var cardContainer = document.querySelector('.cards');


//Event Listeners
createBookmark.addEventListener('click', makeBookmark);
readBookmark.addEventListener('click', readBookmark);
deleteBookmark.addEventListener('click', deleteBookmark);



//functions
function makeBookmark(event){
  event.preventDefault();
  displayTitle.innerText = (bookmarkTitle.value);
  displayURL.innerText = (bookmarkURL.value);
}

function readBookmark(){

}