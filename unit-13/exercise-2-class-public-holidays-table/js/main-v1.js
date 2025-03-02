// see https://medium.com/@rameshsainom/javascripts-dom-mutation-and-promises-advance-javascript-95da5258297c for more details on updating the DOM and promises

class PublicHolidaysDataTable {
    // properties
    #BASE_API_URL = "https://date.nager.at/api/v3/";
    #dropdownCountries;
    #dropdownYears;
    #country = "IE";
    #year = "2025";
    #title;
    #data;
    #componentRoot;
    #columnNames;

    constructor(title) {
        this.#title = title;
        this.#componentRoot = document.getElementById("public-holidays-component");
        this.#columnNames = ['date', 'localName', 'name', 'types'];
        this.loadCountries();
        this.loadYears();
        // Load Data after Countries and Years have been loaded
        this.loadData(); // load data using fetch and build the table
        // event handler
        this.#componentRoot.addEventListener("change", this);
    }

    getComponentRoot() {
        return this.#componentRoot;
    }

    render(){
        const capitaliseFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1); // simplified arrow function as it has a single argument
    
        const tableData = this.#data;
        const propNames = this.#columnNames;
        console.log(propNames);
        console.log('this.#dropdownCountries');
        console.log(this.#dropdownCountries);

        let outputHtml = `<h2>${this.#title}</h2>
        <div class="public-holiday-country">
            <label>
                <span class="col-25" data-label>Country</span>
                <select class="col-75" name="country">
                    <option value="">Select a Country</option>`;
                    outputHtml += this.renderCountries();
                    outputHtml += `</select>
            </label>
            <label>
                <span class="col-25" data-label>Year</span>
                <select class="col-75" name="year">
                    <option value="">Select a Year</option>`;
                     outputHtml += this.renderYears();
        outputHtml += `</select>
            </label>
        </div>
        <div class="table-container">
            <table class="greenTable">
                <thead>
                    <tr>`;
        propNames.forEach((prop) => {
            outputHtml += `<th>${capitaliseFirstLetter(prop)}</th>`;
        });                
        outputHtml += `</tr></thead><tbody>`;

        for (let i in tableData) {
            outputHtml += '<tr>';
            propNames.forEach((prop) => {
                outputHtml += `<td>${tableData[i][prop]}</td>`;
            });                
            outputHtml += '</tr>';
        }
        outputHtml += `</tbody>
            </table>
        </div>`;

        this.#componentRoot.innerHTML = outputHtml;
    }

    async loadData(){ 
        try{
            //after this line, our function will wait for the `fetch()` call to be settled
            //the `fetch()` call will either return a Response or throw an error
            const response = await fetch(this.#BASE_API_URL + "PublicHolidays/" + this.#year + "/" + this.#country);
            if(!response.ok){
                throw new Error(`HTTPerror:${response.status}`);
            }
            //after this line, our function will wait for the`response.json()`call to be settled
            //the`response.json()`call will either return the parsed JSON object or throw an error 
            this.#data=await response.json();
            console.log(this.#data[0]);
            this.render(); // update the DOM
        } catch(error){
            console.error(`Could not get data:${error}`);
        }

    }

    handleEvent(event) {
        console.log("handleEvent:", event.target.name, event.target.value);

        switch(event.target.name) {
            case "country":
                this.#country = event.target.value;
                break;
            case "year":
                this.#year = parseInt(event.target.value);
                break;
            default: // default    
        }
        this.loadData();
    }

    async loadCountries() {
        try{
            if (!this.#dropdownCountries) {
                const response = await fetch(this.#BASE_API_URL + "AvailableCountries/");
                if(!response.ok){
                    throw new Error(`HTTPerror:${response.status}`);
                }
                this.#dropdownCountries=await response.json();
                console.log(`Loaded ${this.#dropdownCountries.length} countries`);
            } 
        } catch(error){
            console.error(`Could not get the countries data: ${error}`);
        }
        return '';
    }

    renderCountries() {
        const countriesOptionsRoot = this.#componentRoot.querySelector('.public-holiday-country select[name="country"]');
        console.log("renderCountries");
        console.log(this.#dropdownCountries);
        let dropdownCountriesOptionsHtml = '';
        if (this.#dropdownCountries) {
            this.#dropdownCountries.forEach(country => {
                dropdownCountriesOptionsHtml += `<option value="${country.countryCode}" ${(this.#country === country.countryCode) ? 'selected' : ''}>${country.name}</option>`;
            });
        }
        return dropdownCountriesOptionsHtml;
    }

    loadYears() {
        const currYear = parseInt(new Date().getFullYear());
        const dropdownYears = [currYear];
        for (let i=1; i<10; i++){
            dropdownYears.push(currYear+i);
        }
        this.#dropdownYears = dropdownYears;
        console.log(this.#dropdownYears);
    }

    renderYears() {
        let dropdownYearsOptionsHtml = '';
        if (this.#dropdownYears) {
            this.#dropdownYears.forEach(year => {
                dropdownYearsOptionsHtml += `<option value="${year}" ${(this.#year === year) ? 'selected' : ''}>${year}</option>`;
            });
        }
        return dropdownYearsOptionsHtml;
    }

}

function init() {
    //holidays table
    let holidaysDataTable = null;
    try {
        // build table using an instance of DataTable class
        holidaysDataTable = new PublicHolidaysDataTable("List of Public Holidays");
    } catch(err) {
        console.error(err);
    }
}

window.addEventListener("load", (event => {
    init();
}));

