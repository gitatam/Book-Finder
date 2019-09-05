// api, search button, display area constants
const apikey = "AIzaSyDdkUJrGPPVWMRg-enDhs2Y_2xvkvQT6lI";
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const displayArea = document.getElementById("result");

// start of search button event listener
  searchButton.addEventListener("click", searchBook);
  document.addEventListener("keypress", function(searchEntry){
    if (event.keyCode == 13) {
      console.log("You searched by pressing the enter key");
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
async function asyncCall(query){
  try {
    // use axios open source js to make get request easy
    let booksdata = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}s&key=${apikey}`);
    displayBooks(booksdata);
  } catch (e) {
    alert("No such books in our library. Please try another search.");
  }
}
// end function to make api calls to google api

// start function to make array of fetched books from the api
function displayBooks(booksdata){
  booksArray = booksdata.data.items;
  let processedBooks = [];
  for(let i = 0; i < booksArray.length; i++){
    if (booksArray[i].volumeInfo.authors == undefined) {
      booksArray[i].volumeInfo.authors = ["#Missing Entry"]
    }
    if (booksArray[i].volumeInfo.publisher == undefined) {
      booksArray[i].volumeInfo.publisher = ["#Missing Entry"]
    }
    const cardElement = `
        <div class="card mb-10">
          <img class="card-img-top" src="${booksArray[i].volumeInfo.imageLinks.thumbnail}" alt="The image to ${booksArray[i].volumeInfo.title} by ${booksArray[i].volumeInfo.authors[0]}">
          <div class="card-body">
            <h3 class="card-title">${booksArray[i].volumeInfo.title}</h3>
            <h5 class="subtitle">${booksArray[i].volumeInfo.authors[0]}</h5>
            <p class="card-text">${booksArray[i].volumeInfo.description}<br><br><span><a href="${booksArray[i].volumeInfo.previewLink}">More Details</a></span></p>
          </div>
        </div>
    `;
    processedBooks.push(cardElement);
  }
  displayArea.innerHTML = "";
  displayArea.innerHTML = processedBooks.join("");
}
// start function to make array of fetched books from the api
