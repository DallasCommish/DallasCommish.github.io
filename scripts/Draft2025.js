function ALMinors25() {
    var pick = [];
    var superScript = [];
    // first round
    pick.push("Rich", "Brent", "Brent", 
              "Jon", "Marty", "Chris", 
              "Kelly", "Jordan", "Randall", 
              "Glenn", "Chris", "Randall");
    superScript.push("0","2","0",
                     "0","0","0",
                     "0","0","4 and 9",
                     "0","3 and 7","6 and 10");

    // second round
    pick.push("Rich", "Jon", "Brent", 
              "Jon", "Marty", "Chris", 
              "Kelly", "Greg", "Jordan", 
              "Greg", "David", "Greg");
    superScript.push("0","1","0",
                     "0","0","0",
                     "0","5 and 13","12",
                     "8","11","0");

    // third round
    pick.push("Rich", "David", "Brent", 
              "Jon", "Marty", "Chris", 
              "Kelly", "Jordan", "Jeremy", 
              "Glenn", "Randall", "Greg");
    superScript.push("0","0","0",
                     "0","0","0",
                     "0","0","0",
                     "0","0","0");

    // fourth round
    pick.push("Rich", "David", "Brent", 
              "Jon", "Marty", "Chris", 
              "Kelly", "Jeremy", "Jeremy", 
              "Glenn", "Randall", "Greg");
    superScript.push("0","0","0",
                     "0","0","0",
                     "0","12","0",
                     "0","0","0");

    let htmlCode = '<table class="responsive"><thead><th colspan="5">2025 American League Minors Roster Draft (Ordered)</th></thead>';
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
    htmlCode += '<li>8/23/2022: <strong>Jon</strong> trades <em>A.J. Pollock</em> ';
    htmlCode += 'and <em>Jesse Winker</em> to <strong>David</strong> for a 2024 1st ';
    htmlCode += 'round minor league pick and a 2025 2nd round minor league pick.</li>';
    // 2
    htmlCode += '<li>3/23/2023: <strong>Brent</strong> trades a 2nd round 2023 minor league ';
    htmlCode += 'pick to <strong>David</strong> for a 1st round 2025 minor league pick.</li>';
    // 3
    htmlCode += "<li>3/25/2024: <strong>Greg</strong> trades a 2024 1st round minors pick to ";
    htmlCode += "<strong>Randall</strong> for a 2025 1st round minors pick.</li>";
    // 4
    htmlCode += "<li>3/28/2024: <strong>Jeremy</strong> trades a 1st round 2025 ML pick to ";
    htmlCode += "<strong>Brent</strong> for a 1st round 2024 ML pick (originally Rich).";
    // 5
    htmlCode += "<li>3/29/2024: <strong>Kelly</strong> trades a 2nd round 2024 ML pick to ";
    htmlCode += "<strong>Jordan</strong> for a 2nd round 2025 ML pick.</li>";
    // 6
    htmlCode += "<li>7/23/2024: <strong>Jordan</strong> trades <em>Nick Pivetta</em>, <em>Yordan Alvarez</em>, ";
    htmlCode += "<em>Nate Lowe</em>, and <em>Andres Gimenez</em> to <strong>Greg</strong> for <em>Wenceel Perez</em>, ";
    htmlCode += "<em>Taylor Ward</em>, <em>Bryan Woo</em>, a 1st round 2025 ML pick, and a 1st round 2026 ML pick.</li>";
    // 7
    htmlCode += "<li>7/31/2024: <strong>Chris</strong> trades <em>Chad Green</em> to <strong>Greg</strong> for ";
    htmlCode += "<em>Jake Meyers</em> and a 1st round 2025 ML pick.</li>";
    // 8
    htmlCode += "<li>8/31/2024: <strong>Greg</strong> trades <em>Miguel Andujar</em>, <em>Tarik Skubal</em>, ";
    htmlCode += "and <em>Dylan Carlson</em> to <strong>Glenn</strong> for <em>Kevin Gausman</em>, <em>Rafael Devers</em>, ";
    htmlCode += "<em>Riley Greene</em>, and a 2025 2nd round ML pick.</li>";
    // 9
    htmlCode += "<li>3/17/2025: <strong>Brent</strong> trades <em>Rickey Tiedemann</em> and a 2025 1st round ";
    htmlCode += "ML pick to <strong>Randall</strong> for <em>Zach Eflin</em> and a 2026 2nd round ML pick.</li>";
    // 10
    htmlCode += "<li>3/17/2025: <strong>Jordan</strong> trades <em>Brandon Lowe</em>, a 1st round 2025 ML pick, ";
    htmlCode += "and a 1st round 2025 reserve pick to <strong>Randall</strong> for <em>Anthony Santander</em>, ";
    htmlCode += "<em>Ronel Blanco</em>, and a 1st round 2025 reserve pick.</li>";
    // 11
    htmlCode += "<li>3/21/2025: <strong>David</strong> trades <em>Matt Vierling</em> to <strong>Randall</strong> ";
    htmlCode += "for a 2nd round 2025 ML pick.</li>";
    // 12
    htmlCode += "<li>3/21/2025: <strong>Jeremy</strong> trades <em>Emmanuel Clase</em>, a 2025 2nd round ML pick, ";
    htmlCode += "and a 2026 4th round ML pick to <strong>Jordan</strong> for <em>Andrew Vaughn</em>, ";
    htmlCode += "<em>Marcelo Mayer</em>, <em>Wenceel Perez</em>, a 2025 4th round ML pick, and a 2026 2nd round ML pick.</li>";
    // 13
    htmlCode += "<li>3/26/2025: <strong>Kelly</strong> trades a 2025 2nd round ML pick to ";
    htmlCode += "<strong>Greg</strong> for a 2026 2nd round ML pick.</li>";
    htmlCode += '</ol>';
    return htmlCode;
}

function ALReserves25() {
    var pick = [];
    var superScript = [];
    // first round
    pick.push("Rich", "David", "Brent", "Jon", "Marty", "Chris",
              "Kelly", "Randall", "Jeremy", "Glenn", "Jordan", "Greg");
    superScript.push("0","0","0","0","0","0",
                     "0","2","0","0","2","0");
    
    // second round
    pick.push("Rich", "David", "Brent", "Greg", "Marty", "Chris",
             "Kelly", "Jordan", "Jeremy", "Glenn", "Randall", "Greg");
    superScript.push("0","0","0","1","0","0",
                     "0","0","0","0","0","0");
    
    // third round
    pick.push("Rich", "David", "Brent", "Jon", "Marty", "Chris",
              "Kelly", "Jordan", "Jeremy", "Glenn", "Randall", "Jon");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","1");
    
    // fourth round
    pick.push("Rich", "David", "Brent", "Jon", "Marty", "Chris",
              "Kelly", "Jordan", "Jeremy", "Glenn", "Randall", "Greg");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","0");

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

    let htmlCode = '<table class="responsive"><thead><th colspan="8">2025 American League Reserves Roster Draft (Ordered)</th></thead>';
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
    htmlCode += "<li>8/1/2024: <strong>Greg</strong> trades <em>Yariel Rodriguez</em> and a 3rd round 2025 reserve pick ";
    htmlCode += "to <strong>Jon</strong> for a 2nd round 2025 reserve pick.</li>";
    // 2
    htmlCode += "<li>3/17/2025: <strong>Jordan</strong> trades <em>Brandon Lowe</em>, a 1st round 2025 ML pick, ";
    htmlCode += "and a 1st round 2025 reserve pick to <strong>Randall</strong> for <em>Anthony Santander</em>, ";
    htmlCode += "<em>Ronel Blanco</em>, and a 1st round 2025 reserve pick.</li>";
    htmlCode += '</ol>';
    return htmlCode;
}

function NLReserves25() {
    var pick = [];
    var superScript = [];
    // FYPD first round
    pick.push("Marc", "Rich", "Marc", 
              "Matt R", "Doug", "Jeffrey", 
              "Ken", "David",
              "Glenn", "Matt R", "Matt A");
    superScript.push("2","0","0",
                     "0","0","0",
                     "0","0",
                     "0","3","0");

    // FYPD second round
    pick.push("Jon", "Rich", "Marc", 
              "Greg", "Doug", "Jeffrey", 
              "Ken", "David",
              "Glenn", "Jeffrey", "Matt A");
    superScript.push("0","0","0",
                     "3","0","0",
                     "0","0",
                     "0","1","0");

    // FYPD third round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Greg", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                     "0","0","1",
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
     let htmlCode = '<table class="responsive"><thead><th colspan="5">2025 Ordered National League FYPD</th></thead>';
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
    htmlCode += '<table class="responsive"><thead><th colspan="8">2025 Ordered National League Reserves Roster Draft (Post-Auction)</th></thead>';
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
    htmlCode += '<table class="responsive"><thead><th colspan="8">2025 Ordered National League Online Reserves Roster Draft</th></thead>';
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
    htmlCode += '<li>3/4/2024: <strong>Greg</strong> trades a 2nd round pick in the 2025 FYPD ';
    htmlCode += 'to <strong>Jeffrey</strong> for a 3rd round pick in the 2025 FYPD.</li>';
    // 2
    htmlCode += "<li>8/8/2024: <strong>Marc</strong> trades <em>Rowdy Tellez</em> to ";
    htmlCode += "<strong>Jon</strong> for a 2025 1st round FYPD pick.</li>";
    // 3
    htmlCode += "<li>8/25/2024: <strong>Greg</strong> trades a 2025 1st round FYPD pick to ";
    htmlCode += "<strong>Matt R</strong> for <em>Michael Conforto</em> and a 2025 2nd round FYPD pick.</li>";
    htmlCode += '</ol>';
    return htmlCode;

}
