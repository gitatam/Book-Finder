// api, search button, display area constants
const apikey = "AIzaSyDdkUJrGPPVWMRg-enDhs2Y_2xvkvQT6lI";
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const displayArea = document.getElementById("result");

// start of search button event listener
  searchButton.addEventListener("click", searchBook);
  document.addEventListener("keypress", function(query){
    if (event.keyCode == 13) {
      console.log("You pressed enter key");
      searchBook(query);
    }
  });
// end of search button event listener

// start function to validate user entry and initializa fetchingprocess
function searchBook(query){
  
}
// start function to validate user entry and initializa fetchingprocess
