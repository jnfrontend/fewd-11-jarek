import { PublicHolidaysDataTable } from "./modules/class-public-holidays-data-table.js";
import { testFunction } from "./modules/class-public-holidays-data-table.js";

(() => {
function init() {
    testFunction();
    //holidays table
    let holidaysDataTable = null;
    try {
        const config = {
            country: "IE",
            year: 2025,
            title: "List of Public Holidays",
            columnNames: ["date", "localName", "name", "types"]
        };
        // build table using an instance of DataTable class
        const holidaysDataTable = new PublicHolidaysDataTable(config);
        // const holidaysDataTable = new PublicHolidaysDataTable({country: "IE", year: 2025, title: "List of Public Holidays", columnNames: ["date", "localName", "name", "types"]});
    } catch(err) {
        console.error(err);
        // holidaysDataTable.getComponentRoot().innerHTML += '<h2>Error</h2><p>No product data to display.</p><p>' + err + '</p>';
    }
}

window.addEventListener("load", (event => {
    init();
}));

})();