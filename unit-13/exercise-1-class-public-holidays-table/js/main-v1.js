// see https://medium.com/@rameshsainom/javascripts-dom-mutation-and-promises-advance-javascript-95da5258297c for more details on updating the DOM and promises

class PublicHolidaysDataTable {
    // properties
    #dataUrl = "https://date.nager.at/api/v3/PublicHolidays/";
    #country = "IE";
    #year = "2024";
    #title;
    #data;
    #componentRoot;
    #columnNames;

    constructor(title) {
        this.#title = title;
        this.#componentRoot = document.getElementById("public-holidays-component");
        this.loadData(); // load data using fetch and build the table
        this.#columnNames = ['date', 'localName', 'name', 'types'];
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

        let outputHtml = `<h2>${this.#title}</h2>
        <div class="public-holiday-country">
            <label>
                <span class="col-25" data-label>Country</span>
                <select class="col-75" name="country">
                    <option value="">Select a Country</option>
                    <option value="IE">Ireland</option>
                    <option value="FR">France</option>
                    <option value="ES">Spain</option>
                </select>
            </label>
            <label>
                <span class="col-25" data-label>Year</span>
                <select class="col-75" name="year">
                    <option value="">Select a Year</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                </select>
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
            const response = await fetch(this.#dataUrl + this.#year + "/" + this.#country);
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
                this.#year = event.target.value;
                break;
            default: // default    
        }
        this.loadData();
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

