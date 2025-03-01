// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//

(() => {
  class DataTable {
    // Properties
    data;
    API_URL;
    tableTitle;
    imageAssetsUrl;
    contentContainer;

    constructor(API_URL, contentContainer, imageAssetsUrl, tableTitle) {
      this.data = [];
      this.API_URL = API_URL;
      this.tableTitle = tableTitle;
      this.contentContainer = contentContainer; // document.getElementById("content");
      this.imageAssetsUrl = imageAssetsUrl;
      this.loadData(); // Init fetch() API Data (API_URL)
    }

    async loadData() {
      try {
        // After this line, our function will wait for the `fetch()` call to be settled
        // The `fetch()` call will either return a Response or throw an error
        const response = await fetch(this.API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        console.log(response);

        // After this line, our function will wait for the `response.json()` call to be settled
        // The `response.json()` call will either return the parsed JSON object or throw an error
        const decodedJsonData = await response.json();
        // console.log(decodedJsonData);

        this.data = decodedJsonData; // Update the data property with the fetched data
        this.render(); // Pass the response(decodedJsonData) to the render() function
      } catch (error) {
        console.error(`Could not get data: ${error}`);
        this.contentContainer.innerHTML = `
          <h2>Error</h2>
          <p>No data to display.</p>
          <p>${error.message}</p>
        `;
      }
    }

    render() {
      if (!this.data || this.data.length === 0) {
        this.contentContainer.innerHTML =
          "<p>No data available to display.</p>";
        return;
      }

      console.log('Render this data: ', this.data);
      console.log('Table Title: ' + this.tableTitle);
      // Get the property names of the first object in the data array
      const objPropertyNameHeaders = Object.getOwnPropertyNames(this.data[0]);
      const imgAssetsUrl = this.imageAssetsUrl;

      // Create table with json data object {property:value} 
      let outputHtml = `
        <div class="table-container">
            <h2>${this.tableTitle}</h2>
                <table class="greenTable">
                    <thead>
                        <tr>`;

      let tableHeaders = "";
      for (let header in objPropertyNameHeaders) {
        tableHeaders += `<th class="header_${objPropertyNameHeaders[header]}">${objPropertyNameHeaders[header]}</th>`;
      }

      outputHtml += tableHeaders;
      outputHtml += `</tr></thead><tbody>`; // Close table headers(with object property names) and oppen table body

      for (let i in this.data) {
        let tableItem = this.data[i];
        console.log("DATA Object - Table Column Items", tableItem);

        let tableRow = "<tr>";
        for (let header in objPropertyNameHeaders) {
          let tableColumnName = objPropertyNameHeaders[header];
          // console.log("Table Header Name: ", tableColumnName);

          if (tableColumnName.toLowerCase().includes("image")) { 
            tableRow += `<td class="product_img"><img src="${imgAssetsUrl}${tableItem[tableColumnName]}" alt="Product Image"></td>`;
          } else {
            tableRow += `<td class="item_${tableColumnName}">${String(tableItem[tableColumnName]) || ""}</td>`;
          }
          
        }
        tableRow += "</tr>";

        outputHtml += tableRow;
      }

      outputHtml += `</tbody></table></div>`;
      this.contentContainer.innerHTML += outputHtml; // Display table with data in a container ()
    }
  } // END Class: DataTable

  function init() {
    const tableContainer = document.getElementById("content"); // Point the selector, where the DataTable will be displayed.
    const productsImageAssetsUrl = "https://raw.githubusercontent.com/mdn/learning-area/main/javascript/apis/fetching-data/can-store/images/";
    const productsDataUrl = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
    const holidaysDataUrl = "https://date.nager.at/api/v3/PublicHolidays/2025/IE";

    // Init DataTable
    new DataTable(holidaysDataUrl, tableContainer, '', 'List of Public Holidays for Ireland 2025');
    new DataTable(productsDataUrl, tableContainer, productsImageAssetsUrl, 'List of Products');
  }

  window.addEventListener("load", (event) => {
    init();
  });
})(); // END EventListener