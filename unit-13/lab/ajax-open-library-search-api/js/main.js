// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  // globals
  let dataSearchResults;
  const searchQueryRoot = document.getElementById("search-query"); 
  const searchResults = document.getElementById("search-results");
  let query = "";
  let page = 1;
  let limit = 10;

  function render() {
    if (dataSearchResults) {
      let outputHtml = ``;
      console.log(dataSearchResults.docs);

      dataSearchResults.docs.forEach(book => {
        outputHtml += `<div id="${book.id_dnb}">
          <span class="book-title">${book.title}</span> by 
          <span class="book-author">${book.author_name}</span>
          <img src="https://covers.openlibrary.org/a/olid/${book.author_key}.jpg" title="${book.author_name}" style="width: 100px;">
          </div>`
      });
      // previous page
      if (page > 1) {
        outputHtml += `<div><a id="prev-page">Previous ${limit} results</a></div>`;
      }
      outputHtml += `<div><a id="next-page">Next ${limit} results</a></div>`;
      searchResults.innerHTML = outputHtml;

      // previous & next event handlers
      const prevLink = searchResults.querySelector('#prev-page');
      if (prevLink) {
        prevLink.addEventListener("click", () => {
          --page;
          console.log("Displaying page number: ", page);
          displayLoader();
          loadData();
        });
      }
      const nextLink = searchResults.querySelector('#next-page');
      if (nextLink) {
        nextLink.addEventListener("click", () => {
          ++page;
          console.log("Displaying page number: ", page);
          displayLoader();
          loadData();
        });
      }
    }
  }

  async function loadData(){ 
    try{
        //after this line, our function will wait for the `fetch()` call to be settled
        //the `fetch()` call will either return a Response or throw an error
        const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=${limit}&page=${page}`);
        if(!response.ok){
            throw new Error(`HTTPerror:${response.status}`);
        }
        //after this line, our function will wait for the`response.json()`call to be settled
        //the`response.json()`call will either return the parsed JSON object or throw an error 
        dataSearchResults=await response.json();
        console.log(dataSearchResults.docs);
        render(); // update the DOM
    } catch(error){
        console.error(`Could not get search results:${error}`);
        searchResults.innerHTML = `<p>Could not get search results:${error}. Try again!</p>`;
    }
  }

  const displayLoader = () => {
    searchResults.innerHTML = `<img style="width:200px;" src="images/loading.gif">`;
  }

  function init() {
    console.log("init");
    const searchQuery = searchQueryRoot.querySelector("#search-query");
    searchQuery.addEventListener("change", (event) => {
      console.log("Search query:", event.target.value)
      displayLoader();
      query = event.target.value;
      loadData();
    });
  }

  // option 1: page has been loaded 
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
  //window.addEventListener("load", (event => {
  //  init();
  //}));

  // option 2: html has been loaded
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
  if (document.readyState === "loading") {
    // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", init);
  } else {
    // `DOMContentLoaded` has already fired
    init();
  }

})();