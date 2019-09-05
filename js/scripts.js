// api, search button, display area constants
const apikey = "AIzaSyDdkUJrGPPVWMRg-enDhs2Y_2xvkvQT6lI";
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const displayArea = document.getElementById("result");

// start of search button event listener
  searchButton.addEventListener("click", searchBook);
  document.addEventListener("keypress", function(searchEntry){
    if (event.keyCode == 13) {
      console.log("You pressed enter key");
      searchBook(searchEntry);
    }
  });
// end of search button event listener

// start function to validate user entry and initializa fetchingprocess
function searchBook(searchEntry){
  searchEntry.preventDefault();
  if(searchInput.value != ""){
    const rawInput = searchInput.value.toLowerCase();
    const query = rawInput.replace(/\s/,"+");
    asyncCall(query);
  } else {
    alert("Please type a search to begin book find.");
  }
}
// end function to validate user entry and initializa fetchingprocess

// start function to make api calls to google api
function asyncCall(query){

}
// end function to make api calls to google api
