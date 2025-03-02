import { PublicHolidaysDataTable } from "./modules/class-public-holidays-data-table.js";
import { testFunction } from "./modules/class-public-holidays-data-table.js";

(() => {
function init() {
    testFunction();
    //holidays table
    let holidaysDataTable = null;
    try {
        // build table using an instance of DataTable class
        holidaysDataTable = new PublicHolidaysDataTable(
            {   title: "List of Public Holidays",
                country: "IE",
                year: 2025,
            });
    } catch(err) {
        console.error(err);
        holidaysDataTable.getComponentRoot().innerHTML += '<h2>Error</h2><p>No product data to display.</p><p>' + err + '</p>';
    }
}

window.addEventListener("load", (event => {
    init();
}));

})();