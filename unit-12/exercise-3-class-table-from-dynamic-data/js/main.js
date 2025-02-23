// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//

(() => {
  class DataTable {
    // Properties
    data;
    contentContainer;

    constructor(data) {
      this.data = data;
      this.contentContainer = document.getElementById("content");
    }
 
  async loadHolidayData() {
    try {
      // After this line, our function will wait for the `fetch()` call to be settled 
      // The `fetch()` call will either return a Response or throw an error
      const response = await fetch("https://date.nager.at/api/v3/PublicHolidays/2025/IE");
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      console.log(response);

      // After this line, our function will wait for the `response.json()` call to be settled
      // The `response.json()` call will either return the parsed JSON object or throw an error 
      const decodedJsonData = await response.json();
      console.log(decodedJsonData);

      return decodedJsonData; // return the decoded JSON data for further processing
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }

    render() {
      let hols = this.data;
      let outputHtml = `
        <div class="table-container">
            <h2>List of Public Holidays in Ireland for 2025</h2>
                <table class="greenTable">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name (in Irish)</th>
                            <th>Name</th>
                            <th align="center">Country Code</th>
                            <th>Types</th>
                        </tr>
                    </thead>
                    <tbody>`;

      for (let i in hols) {
        console.log("Hols-td-" + [i], hols[i]);
        outputHtml += `<tr>
                <td>${hols[i].date}</td>
                <td>${hols[i].localName}</td>
                <td>${hols[i].name}</td>
                <td align="center">${hols[i].countryCode}</td>
                <td>${hols[i].types}</td>
            </tr>`;
      }
      outputHtml += `</tbody>
            </table>
        </div>`;

      this.contentContainer.innerHTML = outputHtml; // Display holidays data in the container <table>
    }
  } // END Class: DataTable
  

  function init() {
    try {
      // console.log("Irish Public Holidays 2024 - Data:", dataIPH24);
      // console.log("Irish Public Holidays 2025 - Data:", dataIPH25);
      
      // Load data as a JS object and pass the data to the DataTable class
      const dataTable = new DataTable();
      console.log(dataTable);
      dataTable.loadHolidayData().then((data) => {
        console.log("Irish Public Holidays 2025 - Data:", data);
        dataTable.data = data;
        dataTable.render();
      });
      
    } catch (err) {
      console.error(err);
      contentContainer.innerHTML = "<h2>Error</h2><p>No public holidays to display.</p><p>" + err + "</p>";
    }
  }

  window.addEventListener("load", (event) => {
    init();
  });
})(); // END EventListener