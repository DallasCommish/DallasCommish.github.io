function ALMinors27() {
    var pick = [];
    var superScript = [];
    // first round
    pick.push("Glenn", "Greg and Don", "Greg", 
              "Chris", "Jordan", "Brent", 
              "Rich", "Kelly", "Rich", 
              "Greg", "Brent", "Greg");
    superScript.push("0","5","0",
                     "0","0","1",
                     "0","0","4",
                     "3","0","2");

    // second round
    pick.push("Glenn", "Jeremy", "Greg", 
              "Chris", "Jordan", "David M", 
              "Rich", "Kelly", "Marty", 
              "Jon", "Brent", "Randall");
    superScript.push("0","0","0",
                     "0","0","0",
                     "0","0","0",
                     "0","0","0");

    // third round
    pick.push("Glenn", "Jeremy", "Jeremy", 
              "Chris", "Jordan", "David M", 
              "Rich", "Kelly", "Marty", 
              "Jon", "Brent", "Randall");
    superScript.push("0","0","5",
                     "0","0","0",
                     "0","0","0",
                     "0","0","0");

    // fourth round
    pick.push("Glenn", "Jeremy", "Greg", 
              "Chris", "Jordan", "David M", 
              "Rich", "Kelly", "Marty", 
              "Jon", "Brent", "Randall");
    superScript.push("0","0","0",
                     "0","0","0",
                     "0","0","0",
                     "0","0","0");

    let htmlCode = '<table class="responsive"><thead><th colspan="5">2027 American League Minors Roster Draft (Unordered)</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">Round 1</td><td class="colTitle">Round 2</td><td class="colTitle">Round 3</td><td class="colTitle">Round 4</td></tr>';

    for (let i = 0; i < 12; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (let j = 0; j < 4; j++) {
            htmlCode += '<td class="team">';
            htmlCode += pick[j * 12 + i];
            if (superScript[j * 12 + i] != "0") {
                htmlCode += '<sup>' + superScript[j * 12 + i] + '</sup>';
            }
            htmlCode += '</td>';
        }
        htmlCode += '</tr>';
    }

    htmlCode += '</table>';

    // include the footnotes of the trade details
    htmlCode += '<br /><h3>Trade Details</h3>';
    htmlCode += '<ol>';
    // 1
    htmlCode += '<li>3/28/2024: <strong>Brent</strong> trades a 2nd round 2024 ML pick to ';
    htmlCode += '<strong>David</strong> for a 2027 1st round ML pick.</li>';
    // 2
    htmlCode += "<li>4/4/2025: <strong>Greg</strong> trades <em>Jazz Chisholm</em> and a ";
    htmlCode += "2028 1st round ML pick to <strong>Randall</strong> for <em>Cam Smith</em>, ";
    htmlCode += "<em>Juan Brito</em>, and a 2027 1st round ML pick.</li>";
    // 3
    htmlCode += "<li>6/25/2025: <strong>Greg</strong> trades <em>Yusei Kikuchi</em> to ";
    htmlCode += "<strong>Jon</strong> for <em>Spencer Jones</em> and a 2027 1st round ML pick.</li>";
    // 4
    htmlCode += "<li>8/23/2025: <strong>Rich</strong> trades <em>Andres Munoz</em> to ";
    htmlCode += "<strong>Marty</strong> for a 2027 1st round ML pick.</li>";
    // 5
    htmlCode += "<li>2/20/2026: <strong>Jeremy</strong> trades <em>Austin Wells</em>, ";
    htmlCode += "<em>Marcelo Mayer</em>, and a 2027 1st round ML pick to <strong>Greg and Don</strong> ";
    htmlCode += "for <em>Casey Mize</em>, <em>Zebby Matthews</em>, and a 2027 3rd round ML pick.";
    htmlCode += '</ol>';
    return htmlCode;
}

function ALReserves27() {
    var pick = [];
    var superScript = [];
    // first round
    pick.push("Rich", "David", "Brent", "Jon", "Marty", "Chris",
              "Kelly", "Jordan", "Jeremy", "Glenn", "Randall", "Greg");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","0");
    
    // second round
    pick.push("Rich", "David", "Brent", "Jon", "Marty", "Chris",
             "Kelly", "Jordan", "Jeremy", "Glenn", "Randall", "Greg");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","0");
    
    // third round
    pick.push("Rich", "David", "Brent", "Jon", "Marty", "Chris",
              "Kelly", "Jordan", "Jeremy", "Glenn", "Randall", "Greg");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","0");
    
    // fourth round
    pick.push("Rich", "David", "Brent", "Jon", "Marty", "Chris",
              "Kelly", "Jordan", "Jeremy", "Glenn", "Randall", "Jon");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","1");

    // fifth round
    pick.push("Rich", "David", "Brent", "Jon", "Marty", "Chris",
              "Kelly", "Jordan", "Jeremy", "Glenn", "Randall", "Greg");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","0");

    // sixth round
    pick.push("Rich", "David", "Brent", "Jon", "Marty", "Chris",
              "Kelly", "Jordan", "Jeremy", "Glenn", "Randall", "Greg");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","0");

    // seventh round
    pick.push("Rich", "David", "Brent", "Jon", "Marty", "Chris",
              "Kelly", "Jordan", "Jeremy", "Glenn", "Randall", "Greg");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","0");

    let htmlCode = '<table class="responsive"><thead><th colspan="8">2027 American League Reserves Roster Draft (Un-Ordered)</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">Round 1</td><td class="colTitle">Round 2</td><td class="colTitle">Round 3</td><td class="colTitle">Round 4</td><td class="colTitle">Round 5</td><td class="colTitle">Round 6</td><td class="colTitle">Round 7</td></tr>';

    for (let i = 0; i < 12; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (let j = 0; j < 7; j++) {
            htmlCode += '<td class="team">';
            htmlCode += pick[j * 12 + i];
            if (superScript[j * 12 + i] != "0") {
                htmlCode += '<sup>' + superScript[j * 12 + i] + '</sup>';
            }
            htmlCode += '</td>';
        }
        htmlCode += '</tr>';
    }

    htmlCode += '</table>';

    // Include salaries for each round
    htmlCode += '<br /><h3>Salaries by Round</h3>';
    htmlCode += '<ul><li>$1.5 for Rounds 1 - 3</li>';
    htmlCode += '<li>$1.0 for Rounds 4 - 5</li>';
    htmlCode += '<li>$0.5 for Rounds 6 - 7</li></ul>';

    // include the footnotes of the trade details
    htmlCode += '<br /><h3>Trade Details</h3>';
    htmlCode += '<ol>';
    // 1
    htmlCode += "<li>6/9/2025: <strong>Greg</strong> trades <em>Kevin Newman</em> and a 4th round 2027 reserve pick ";
    htmlCode += "to <strong>Jon</strong> for <em>Ryan Montcastle</em>.</li>";
    htmlCode += '</ol>';
    return htmlCode;
}

function NLReserves27() {
    var pick = [];
    var superScript = [];
    // FYPD first round
    pick.push("Jon", "Rich", "Marc", 
        "Matt R", "Doug", "Jeffrey", 
        "Ken", "Marc",
        "Glenn", "Jon", "Matt A");
    superScript.push("0","0","0",
               "0","0","0",
               "0","2",
               "0","1","0");

    // FYPD second round
    pick.push("Jon", "Rich", "Marc", 
        "Matt R", "Doug", "Jeffrey", 
        "Ken", "David",
        "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
               "0","0","0",
               "0","0",
               "0","0","0");

    // FYPD third round
    pick.push("Jon", "Rich", "Marc", 
        "Matt R", "Doug", "Jeffrey", 
        "Ken", "David",
        "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
               "0","0","0",
               "0","0",
               "0","0","0");

    // FYPD fourth round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Jeffrey", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                     "0","0","0",
                     "0","0",
                     "0","0","0");

    // post-auction first round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Jeffrey", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // post-auction second round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Jeffrey", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // post-auction third round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Jeffrey", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // post-auction fourth round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Jeffrey", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // post-auction fifth round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Jeffrey", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // post-auction sixth round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Jeffrey", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // post-auction seventh round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Jeffrey", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // online first round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Jeffrey", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // online second round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Jeffrey", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // online third round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Jeffrey", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // online fourth round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Jeffrey", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // First Year Player Draft
     let htmlCode = '<table class="responsive"><thead><th colspan="5">2027 Un-ordered National League FYPD</th></thead>';
     htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">FYPD Round 1</td><td class="colTitle">FYPD Round 2</td><td class="colTitle">FYPD Round 3</td><td class="colTitle">FYPD Round 4</td>';

    // Round 1 through 4
    for (let i = 0; i < 11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (let j = 0; j < 4; j++) {
            htmlCode += '<td class="team">';
            htmlCode += pick[j * 11 + i];
            if (superScript[j * 11 + i] != "0") {
                htmlCode += '<sup>' + superScript[j * 11 + i] + '</sup>';
            }
            htmlCode += '</td>';
        }
        htmlCode += '</tr>';
    }

    htmlCode += '</table>';

    // Include salaries for each round
    htmlCode += '<br /><h3>Salaries by Round</h3>';
    htmlCode += '<ul><li>$10 and contract of ML for all rounds</li></ul><br />';

    // Post Auction Draft
    htmlCode += '<table class="responsive"><thead><th colspan="8">2026 Un-ordered National League Reserves Roster Draft (Post-Auction)</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td>';
    htmlCode += '<td class="colTitle">Round 1</td>';
    htmlCode += '<td class="colTitle">Round 2</td>';
    htmlCode += '<td class="colTitle">Round 3</td>';
    htmlCode += '<td class="colTitle">Round 4</td>';
    htmlCode += '<td class="colTitle">Round 5</td>';
    htmlCode += '<td class="colTitle">Round 6</td>';
    htmlCode += '<td class="colTitle">Round 7</td></tr>';

    for (let i = 0; i < 11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (let j = 4; j < 11; j++) {
            htmlCode += '<td class="team">';
            htmlCode += pick[j * 11 + i];
            if (superScript[j * 11 + i] != "0") {
                htmlCode += '<sup>' + superScript[j * 11 + i] + '</sup>';
            }
            htmlCode += '</td>';
        }
        htmlCode += '</tr>';
    }

    htmlCode += '</table>';

    // Include salaries for each round
    htmlCode += '<br /><h3>Salaries by Round</h3>';
    htmlCode += '<li>$15 for round 1</li>';
    htmlCode += '<li>$10 for round 2</li>';
    htmlCode += '<li>$5 for rounds 3 and 4</li>';
    htmlCode += '<li>$2 for rounds 5 through 7</li></ul><br />';

    // Online Draft
    htmlCode += '<table class="responsive"><thead><th colspan="8">2026 Un-ordered National League Online Reserves Roster Draft</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td>';
    htmlCode += '<td class="colTitle">Online Round 1</td>';
    htmlCode += '<td class="colTitle">Online Round 2</td>';
    htmlCode += '<td class="colTitle">Online Round 3</td>';
    htmlCode += '<td class="colTitle">Online Round 4</td></tr>';

    for (let i = 0; i < 11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (let j = 11; j < 15; j++) {
            htmlCode += '<td class="team">';
            htmlCode += pick[j * 11 + i];
            if (superScript[j * 11 + i] != "0") {
                htmlCode += '<sup>' + superScript[j * 11 + i] + '</sup>';
            }
            htmlCode += '</td>';
        }
        htmlCode += '</tr>';
    }

    htmlCode += '</table>';

    // Include salaries for each round
    htmlCode += '<br /><h3>Salaries by Round</h3>';
    htmlCode += '<li>$5 for all rounds</li></ul>';

    // include the footnotes of the trade details
    htmlCode += '<br /><h3>Trade Details</h3>';
    htmlCode += '<ol>';
    // 1
    htmlCode += '<li>8/31/2025: <strong>Jon</strong> trades <em>Gabriel Moreno</em> ';
    htmlCode += "to <strong>Greg</strong> for <em>Cal Quantrill</em> and a 2027 1st ";
    htmlCode += "round FYPD pick.</li>";
    // 2
    htmlCode += '<li>3/15/2026: <strong>Marc</strong> trades <em>Jung Hoo Lee</em> to ';
    htmlCode += '<strong>David</strong> for <em>James Triantos</em> and a 2027 1st round FYPD pick.</li>';
    htmlCode += '</ol>';
    return htmlCode;

}
