var bookmarkTitle = document.querySelector('#enter-website');
var bookmarkURL = document.querySelector('#enter-url');
var createBookmark = document.querySelector('.create-bookmark');
var displayTitle = document.querySelector('.site-title');
var displayURL = document.querySelector('.url');
var cardContainer = document.querySelector('.cards-container');
var numCount = document.querySelector('.num-count');
var counter = 0;
var readCount = document.querySelector('.read-count');
var clearReadBookmarksButton = document.querySelector('.clear-read-bookmarks');

createBookmark.addEventListener('click', makeBookmark);
bookmarkURL.addEventListener('keyup', blankInput);
bookmarkTitle.addEventListener('keyup', blankInput);
clearReadBookmarksButton.addEventListener('click', clearBookmarks);

function validateURL() {
    var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return urlregex.test(bookmarkURL.value);
}

function makeBookmark(event){
event.preventDefault();
  if (validateURL()){
  var newLi = document.createElement('li');
  newLi.innerHTML = `<div class="one">
        <p class="site-title"> ${bookmarkTitle.value}</p>
        <a href="${bookmarkURL.value}" target="_blank" class="url"> ${bookmarkURL.value}</a>
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
    numCount.innerText ='Number of Bookmarks: ' + counter;
    countBookmarks();
  }
  counter++ ;
  numCount.innerText ='Number of Bookmarks: ' + counter;
  countBookmarks();
  }
  else{ 
    alert('This is not a valid URL!')
    }
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
    countBookmarks();
}

function blankInput() {
  if (bookmarkURL.value ==='' || bookmarkTitle.value ==='')
  {
    createBookmark.disabled = true;
    clearReadBookmarksButton.disabled = true;
  }
  else{
    createBookmark.disabled = false;
    clearReadBookmarksButton.disabled = false;
  }
}

function countBookmarks() {
  var totalReadBookmarks = document.querySelectorAll('.read');
  readCount.innerText = `Bookmarks Read: ${totalReadBookmarks.length} Bookmarks Unread: ${counter - totalReadBookmarks.length}`;
  numCount.innerText ='Number of Bookmarks: ' + counter;
}

function clearBookmarks() {
  var totalReadBookmarks = document.querySelectorAll('.read');
    for (var i =0; i < totalReadBookmarks.length; i++){
      totalReadBookmarks[i].remove();
      counter-- ;
      } 
      countBookmarks();
  }


