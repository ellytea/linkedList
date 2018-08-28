// Variables

var bookmarkTitle = document.querySelector('#enter-website');
var bookmarkURL = document.querySelector('#enter-url');
var createBookmark = document.querySelector('.create-bookmark');
var displayTitle = document.querySelector('.site-title');
var displayURL = document.querySelector('.url');
var readBookmarks = document.querySelectorAll('.read-button');
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
  }
}

function markRead(){
  // if (this.parentNode.classList.contains('read'))
  this.parentNode.classList.add('read');
  this.classList.add('read-red');

}


// function markRead(e) {
//   	e.target.classList = ['read']
//  }


// function checkBookmark{
//   if (bookmarkTitle.value ==='' || bookmarkURL.value===''){
//     showAlert()
//   }
// }






