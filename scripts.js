// Variables

var bookmarkTitle = document.querySelector('#enter-website');
var bookmarkURL = document.querySelector('#enter-url');
var createBookmark = document.querySelector('.create-bookmark');
var displayTitle = document.querySelector('.site-title');
var displayURL = document.querySelector('.url');
// var readBookmarks = document.querySelectorAll('.read-button');
var cardContainer = document.querySelector('.cards-container');
// var cardCounter = document.querySelectorAll('.one');
var counter = 0;


// Event Listeners
createBookmark.addEventListener('click', makeBookmark);
bookmarkURL.addEventListener('keyup', blankInput);
bookmarkTitle.addEventListener('keyup', blankInput);

// functions
function makeBookmark(event){
  event.preventDefault();
  var newLi = document.createElement('li');
  newLi.innerHTML = `<div class="one">
        <p class="site-title"> ${bookmarkTitle.value}</p>
        <a href="https://${bookmarkURL.value}" target="_blank" class="url"> ${bookmarkURL.value}</a>
        <p class="read-button"> Read </p> 
        <p class="delete"> Delete </p>
      </div>`

 cardContainer.prepend(newLi);
  
  var readButton = document.querySelector('.read-button');
  readButton.addEventListener('click', markRead);
   
  var deleteButton = document.querySelector('.delete');
  deleteButton.addEventListener('click', deleteBookmark);
    function deleteBookmark(){
    newLi.remove();
    counter-- ;
  }
counter++ ;
}






function markRead(){
  if (this.parentNode.classList.contains('read') === false){
    this.parentNode.classList.add('read');
    this.classList.add('read-red');
}
  else{
    this.parentNode.classList.remove('read');
    this.classList.remove('read-red');
    }
}


function blankInput(){
  if (bookmarkURL.value ==='' || bookmarkTitle.value ==='')
  {
    createBookmark.disabled = true;
  }
  else{
    createBookmark.disabled = false;
  }
}









