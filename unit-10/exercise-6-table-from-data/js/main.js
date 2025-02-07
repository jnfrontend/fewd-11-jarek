// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
    // globals
    const contentContainer = document.getElementById("content");
    
    function renderTable(publicHolidays){
        let hols = publicHolidays;
        let outputHtml = '<div class="table-container">';

        outputHtml +='<h2>List of Public Holidays in Ireland for 2024</h2>';
        outputHtml += '<table class="blueTable">';
        outputHtml += '  <thead>';
        outputHtml += '    <tr>';
        outputHtml += '      <th>Date</th>';
        outputHtml += '      <th>Name (in Irish)</th>';
        outputHtml += '      <th>Name</th>';
        outputHtml += '    </tr>';
        outputHtml += '  </thead>';
        outputHtml += '  <tbody>';

        for (let i in hols) {
            outputHtml += '<tr>';
            outputHtml += '  <td>' + hols[i].date + '</td>';
            outputHtml += '  <td>' + hols[i].localName + '</td>';
            outputHtml += '  <td>' + hols[i].name + '</td>';
            outputHtml += '</tr>';
        }
        outputHtml += '  </tbody>';
        outputHtml += '</table>';
        outputHtml += '</div>';

        contentContainer.innerHTML = outputHtml;
    }

    function init() {
        try {
            // load data as a JS object
            console.log(data);
            renderTable(data); // render table
        } catch(err) {
            console.error(err);
            contentContainer.innerHTML = '<h2>Error</h2><p>No public holidays to display.</p><p>' + err + '</p>';
        }
    }

    window.addEventListener("load", (event => {
        init();
    }));

})();