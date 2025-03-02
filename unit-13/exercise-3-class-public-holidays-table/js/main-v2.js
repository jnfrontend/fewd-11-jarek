// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//

(() => {
  class PublicHolidaysDataTable {
    // Properties
    #BASE_API_URL = "https://date.nager.at/api/v3/"; // Base URL to REST API
    #dropdownCountries;
    #dropdownYears;
    #country = "IE"; // Default country
    #year = "2025"; // Default year
    #data; // Data object returned via fetch()
    #tableTitle; // Title text for component
    #componentRoot; // DOM node for component
    #columnNames; // An array of column names to display

    constructor(tableTitle) {
      this.#tableTitle = tableTitle;
      this.#componentRoot = document.getElementById("public-holidays-component");
      this.#columnNames = ["date", "localName", "name", "types"];
      this.loadCountries();
      this.loadYears();
      
      // Load Data after Countries and Years have been loaded
      this.loadData(); // Init fetch() - load data using fetch and build the table

      // Event handler - to update the table data based on the selected Country and Year
      this.#componentRoot.addEventListener("change", this);
    }

    getComponentRoot() {
      return this.#componentRoot;
    }

    // loadData Method
    async loadData() {
      try {
        // After this line, our function will wait for the `fetch()` call to be settled
        // The `fetch()` call will either return a Response or throw an error
        const response = await fetch(this.#BASE_API_URL + "PublicHolidays/" + this.#year + "/" + this.#country);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        console.log(response);

        // After this line, our function will wait for the `response.json()` call to be settled
        // The `response.json()` call will either return the parsed JSON object or throw an error
        this.#data = await response.json(); // Update the #data property with the fetched decoded JSON Data
        console.log(this.#data[0]);
        // console.log(this.#data);
        this.render(); // Pass the response(decodedJsonData) to the render() function and update the DOM
      } catch (error) {
        console.error(`Could not get data: ${error}`);
        this.#componentRoot.innerHTML = `
          <h2>Error</h2>
          <p>No holidays data to display.</p>
          <p>${error.message}</p>
        `;
      }
    }

    // Method to render table
    render() {
      if (!this.#data || this.#data.length === 0) {
        this.#componentRoot.innerHTML = "<p>No data available to display.</p>";
        return;
      }

      console.log("Render this data: ", this.#data);
      console.log("Table Title: " + this.#tableTitle);
      // Get the property names of the first object in the data array
      const objPropertyNamesHeaders = Object.getOwnPropertyNames(this.#data[0]);
      const colNames = this.#columnNames;
      // console.log("this.#dropdownCountries", this.#dropdownCountries);

      // Create table with json data object {property:value}
      let outputHtml = `
      <h2>${this.#tableTitle}</h2>
      <div class="public-holiday-country">
            <label>
                <span class="col-25" data-label>Select Country</span>
                <select class="col-75" name="country">
                    <option value="" disabled="true">Select a Country</option>`;
      outputHtml += this.renderCountries();
      outputHtml += `</select>
            </label>
            <label>
                <span class="col-25" data-label>Select Year</span>
                <select class="col-75" name="year">
                    <option value="" disabled="true">Select a Year</option>`;
      outputHtml += this.renderYears();
      outputHtml += `</select>
            </label>
        </div>
        <div class="table-container">
                <table class="greenTable">
                    <thead>
                        <tr>`;

      let tableHeaders = "";
      for (let header in objPropertyNamesHeaders) {
        // Check if propNames(array with hardcoded column names) exists in objPropertyNamesHeaders
        if (colNames.includes(objPropertyNamesHeaders[header])) {
          tableHeaders += `<th class="header_${objPropertyNamesHeaders[header]}">${objPropertyNamesHeaders[header]}</th>`;
        }
      }

      outputHtml += tableHeaders;
      outputHtml += `</tr></thead><tbody>`; // Close table headers(with object property names) and oppen table body

      for (let i in this.#data) {
        let tableItem = this.#data[i];
        console.log("DATA Object - Table Column Items", tableItem);

        let tableRow = "<tr>";
        for (let header in objPropertyNamesHeaders) {
          if (colNames.includes(objPropertyNamesHeaders[header])) {
            let tableColumnName = objPropertyNamesHeaders[header];
            // console.log("Table Header Name: ", tableColumnName);

            tableRow += `<td class="item_${tableColumnName}">${String(tableItem[tableColumnName]) || ""}</td>`;
          }
        }
        tableRow += "</tr>";

        outputHtml += tableRow;
      }

      outputHtml += `</tbody></table></div>`;
      this.#componentRoot.innerHTML = outputHtml; // Display table with data in this.#componentRoot = "#public-holidays-component" selector
      
      // Display selected Country Name in Table Title
      const countriesOptionsRoot = this.#componentRoot.querySelector('.public-holiday-country select[name="country"]');
      let selectedCountry = countriesOptionsRoot.options[countriesOptionsRoot.selectedIndex].text;
      let holidayCountryNamePlaceHolder = this.#componentRoot.querySelector('h2 .public_holiday_country_name');
      if (holidayCountryNamePlaceHolder) {
        holidayCountryNamePlaceHolder.innerHTML = selectedCountry;
      }
      // Display selected year in Table Title
      const yearsOptionsRoot = this.#componentRoot.querySelector('.public-holiday-country select[name="year"]');
      let selectedYear = yearsOptionsRoot.options[yearsOptionsRoot.selectedIndex].text;
      let holidayYearPlaceHolder = this.#componentRoot.querySelector('h2 .public_holiday_year');
      if (holidayYearPlaceHolder) {
        holidayYearPlaceHolder.innerHTML = selectedYear;
      }
    }

    handleEvent(event) {
      console.log("handleEvent:", event.target.name, event.target.value, event.target.textContent);

      switch (event.target.name) {
        case "country":
          this.#country = event.target.value;
          break;
        case "year":
          this.#year = parseInt(event.target.value); // Convert to number(integer)
          break;
        default: // default (country: IE, year: 2025)
      }
      this.loadData();
    }

    async loadCountries() {
      try {
        if (!this.#dropdownCountries) {
          const response = await fetch(
            this.#BASE_API_URL + "AvailableCountries/"
          );
          if (!response.ok) {
            throw new Error(`HTTPerror:${response.status}`);
          }
          this.#dropdownCountries = await response.json();
          console.log(`Loaded ${this.#dropdownCountries.length} countries`);
        }
      } catch (error) {
        console.error(`Could not get the countries data: ${error}`);
      }
      return "";
    }

    renderCountries() {
      const countriesOptionsRoot = this.#componentRoot.querySelector('.public-holiday-country select[name="country"]');
      console.log("renderCountries");
      console.log(this.#dropdownCountries);
      let dropdownCountriesOptionsHtml = "";
      if (this.#dropdownCountries) {
        this.#dropdownCountries.forEach((country) => {
          dropdownCountriesOptionsHtml += `<option value="${country.countryCode}" ${this.#country === country.countryCode ? "selected" : ""}>${country.name}</option>`;
        });
      }
      return dropdownCountriesOptionsHtml;
    }

    loadYears() {
      const currYear = parseInt(new Date().getFullYear());
      const dropdownYears = [currYear];
      for (let i = 1; i < 10; i++) {
        dropdownYears.push(currYear + i);
      }
      this.#dropdownYears = dropdownYears;
      console.log(this.#dropdownYears);
    }

    renderYears() {
      let dropdownYearsOptionsHtml = "";
      const defaultYear = parseInt(this.#year); // Convert string to number
      if (this.#dropdownYears) {
        this.#dropdownYears.forEach((year) => {
          dropdownYearsOptionsHtml += `<option value="${year}" ${defaultYear === year ? "selected" : ""}>${year}</option>`;

          console.log('this.#year', defaultYear);
          console.log('year', year);
        });
      }
      return dropdownYearsOptionsHtml;
    }
  } // END Class: PublicHolidaysDataTable

  function init() {
    // Init PublicHolidaysDataTable
    let holidaysDataTable = null;
    let holidaysDataTableTitle = "List of Public Holidays for <span class='public_holiday_country_name'></span> <span class='public_holiday_year'>"
    try {
      // Holidays table
      // Build table using an instance of PublicHolidaysDataTable class and set table title: "List of Public Holidays"
      holidaysDataTable = new PublicHolidaysDataTable(holidaysDataTableTitle);
    } catch (err) {
      console.error(err.message);
    }
  }

  window.addEventListener("load", (event) => {
    init();
  });
})(); // END EventListener