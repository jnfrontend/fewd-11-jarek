// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//

(() => {
  class DataTable {
    // Properties
    data;
    contentContainer;
    apiProductsUrl;

    constructor(apiProductsUrl) {
      // this.data = data;
      this.apiProductsUrl = apiProductsUrl;
      this.contentContainer = document.getElementById("content");
      this.loadProductData(); // Init fetch()
    }

    async loadProductData() {
      try {
        // After this line, our function will wait for the `fetch()` call to be settled
        // The `fetch()` call will either return a Response or throw an error
        const response = await fetch(this.apiProductsUrl);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        console.log(response);

        // After this line, our function will wait for the `response.json()` call to be settled
        // The `response.json()` call will either return the parsed JSON object or throw an error
        const decodedJsonData = await response.json();
        console.log(decodedJsonData);

        this.data = decodedJsonData; // Update the data property with the fetched data
        this.render();

        return decodedJsonData; // Return the decoded JSON data for further processing
      } catch (error) {
        console.error(`Could not get products: ${error}`);
        this.contentContainer.innerHTML = `
          <h2>Error</h2>
          <p>No products to display.</p>
          <p>${error.message}</p>
        `;
      }
    }

    render() {
      if (!this.data || this.data.length === 0) {
        this.contentContainer.innerHTML = "<p>No products data available to display.</p>";
        return;
      }

      const apiAssetsImagesUrl = "https://raw.githubusercontent.com/mdn/learning-area/main/javascript/apis/fetching-data/can-store/images/";

      let products = this.data;
      let outputHtml = `
        <div class="table-container">
            <h2>List of Products</h2>
                <table class="greenTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th align="center">Price</th>
                            <th align="center">Image</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>`;

      for (let i in products) {
        console.log("Products-td-" + [i], products[i]);
  
        // Create image path for the product
        const productImagePath = `${apiAssetsImagesUrl}${products[i].image}`;
        console.log("Product image url is: ", productImagePath);

        outputHtml += `<tr>
                <td>${products[i].name}</td>
                <td align="center"><span class="currency">&#x20AC;</span> ${products[i].price}</td>
                <td align="center" class="product_img"><img src="${productImagePath}"></td>
                <td>${products[i].type}</td>
            </tr>`;
      }
      outputHtml += `</tbody>
            </table>
        </div>`;

      this.contentContainer.innerHTML = outputHtml; // Display products data in the container <table>
    }
  } // END Class: DataTable

  function init() {
    try {
      const productsDataUrl = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

      // Init DataTable
      const dataTable = new DataTable(productsDataUrl);
    } catch (err) {
      console.error(err);
      const contentContainer = document.getElementById("content");
      contentContainer.innerHTML =
        "<h2>Error</h2><p>No products to display.</p><p>" + err + "</p>";
    }
  }

  window.addEventListener("load", (event) => {
    init();
  });
})(); // END EventListener
