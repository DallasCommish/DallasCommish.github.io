function ALMinors26() {
    var pick = [];
    var superScript = [];
    // first round
    pick.push("Brent", "Jordan", "Rich", 
              "Jordan", "Kelly", "Greg", 
              "Jeremy", "Jon", "Brent", 
              "Chris", "Marty", "Glenn");
    superScript.push("0","0","0",
                     "3","0","2 and 9",
                     "0","0","1",
                     "0","4","0");

    // second round
    pick.push("Brent", "Randall", "Rich", 
              "Kelly", "Kelly", "David M", 
              "Jeremy", "Jeremy", "Marty", 
              "Chris", "Brent", "Glenn");
    superScript.push("0","6 and 11","0",
                     "7","0","0",
                     "0","8","0",
                     "0","5","0");

    // third round
    pick.push("Brent", "Jordan", "Rich", 
              "Greg", "Kelly", "David M", 
              "Jeremy", "Jon", "Greg", 
              "Chris", "Randall", "Glenn");
    superScript.push("0","0","0",
                     "0","0","0",
                     "0","0","10",
                     "0","0","0");

    // fourth round
    pick.push("Brent", "Jordan", "Rich", 
              "Greg", "Kelly", "David M", 
              "Jordan", "Jon", "Marty", 
              "Chris", "Randall", "Glenn");
    superScript.push("0","0","0",
                     "0","0","0",
                     "6","0","0",
                     "0","0","0");

    let htmlCode = '<table class="responsive"><thead><th colspan="5">2026 American League Minors Roster Draft (Ordered)</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">Round 1</td><td class="colTitle">Round 2</td><td class="colTitle">Round 3</td><td class="colTitle">Round 4</td></tr>';

    for (var i = 0; i < 12; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (let j = 0; j < 4; j++) {
            htmlCode += '<td class="team">';
            htmlCode += pick[j * 12 + i];
            if (superScript[j * 12 + i] !== "0") {
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
    htmlCode += '<li>7/2/2023: <strong>Brent</strong> trades <em>Alex Kiriloff</em>, <em>Bailey Ober</em>, ';
    htmlCode += 'and <em>Enrique Hernandez</em> to <strong>Marty</strong> for a 2024 1st round minor ';
    htmlCode += 'pick and a 2026 1st round minor league pick.</li>';
    // 2
    htmlCode += '<li>8/7/2023: <strong>Marty</strong> trades <em>Teoscar Hernandez</em> and <em>Bailey Ober</em> ';
    htmlCode += 'to <strong>David</strong> for <em>Connor Norby</em> and a 2026 1st round ML pick.</li>';
    // 3
    htmlCode += "<li>7/23/2024: <strong>Jordan</strong> trades <em>Nick Pivetta</em>, <em>Yordan Alvarez</em>, ";
    htmlCode += "<em>Nate Lowe</em>, and <em>Andres Gimenez</em> to <strong>Greg</strong> for <em>Wenceel Perez</em>, ";
    htmlCode += "<em>Taylor Ward</em>, <em>Bryan Woo</em>, a 1st round 2025 ML pick, and a 1st round 2026 ML pick.</li>";
    // 4
    htmlCode += "<li>7/28/2024: <strong>Marty</strong> trades <em>Joe Ryan</em> and <em>Randy Arozarena</em> to ";
    htmlCode += "<strong>Randall</strong> for <em>Eduoard Julien</em>, <em>Tyler O'Neill</em>, and a 1st round 2026 ML pick.</li>";
    // 5
    htmlCode += "<li>3/17/2025: <strong>Brent</strong> trades <em>Rickey Tiedemann</em> and a 2025 1st round ";
    htmlCode += "ML pick to <strong>Randall</strong> for <em>Zach Eflin</em> and a 2026 2nd round ML pick.</li>";
    // 6
    htmlCode += "<li>3/21/2025: <strong>Jeremy</strong> trades <em>Emmanuel Clase</em>, a 2025 2nd round ML pick, ";
    htmlCode += "and a 2026 4th round ML pick to <strong>Jordan</strong> for <em>Andrew Vaughn</em>, ";
    htmlCode += "<em>Marcelo Mayer</em>, <em>Wenceel Perez</em>, a 2025 4th round ML pick, and a 2026 2nd round ML pick.</li>";
    // 7
    htmlCode += "<li>3/26/2025: <strong>Kelly</strong> trades a 2025 2nd round ML pick to ";
    htmlCode += "<strong>Greg</strong> for a 2026 2nd round ML pick.</li>";
    // 8
    htmlCode += "<li>4/26/2025: <strong>Jeremy</strong> trades <em>Ryan Mountcastle</em>, ";
    htmlCode += "<em>Riley Greene</em>, and <em>Framber Valdez</em> to <strong>Jon</strong> ";
    htmlCode += "for <em>Junior Caminero</em>, <em>Oswald Peraza</em>, <em>Kumar Rocker</em>, ";
    htmlCode += "and a 2026 2nd round ML pick.</li>";
    // 9
    htmlCode += "<li>5/2/2025: <strong>Greg</strong> trades <em>Carlos Estevez</em> ";
    htmlCode += "to <strong>Marty</strong> for <em>Matt Wallner</em> and a 2026 1st round ";
    htmlCode += "ML pick.</li>";
    // 10
    htmlCode += "<li>10/3/2025: <strong>Marty</strong> trades a 2026 3rd round ML pick ";
    htmlCode += "to <strong>Greg</strong> for a 2026 7th round reserve pick.</li>";
    // 11
    htmlCode += "<li>3/6/2026: <strong>Randall</strong> trades <em>David Bednar</em> and ";
    htmlCode += "<em>Max Fried</em> to <strong>Jeremy</strong> for <em>Evan Carter</em>, ";
    htmlCode += "<em>Jack Leiter</em>, and a 2026 2nd round ML pick.</li>";
    htmlCode += '</ol>';
    return htmlCode;
}

function ALReserves26() {
    var pick = [];
    var superScript = [];
    // first round
    pick.push("Brent", "Jordan", "Rich", "Greg", "Kelly", "David",
              "Jeremy", "Jon", "Marty", "Chris", "Randall", "Glenn");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","0");
    
    // second round
    pick.push("Brent", "Jordan", "Rich", "Greg", "Kelly", "David",
              "Jeremy", "Jon", "Marty", "Chris", "Greg", "Glenn");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","2","0");
    
    // third round
    pick.push("Brent", "Jordan", "Rich", "Greg", "Kelly", "David",
              "Jeremy", "Jon", "Marty", "Greg", "Randall", "Glenn");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","1","0","0");
    
    // fourth round
    pick.push("Brent", "Jordan", "Rich", "Greg", "Kelly", "David",
              "Jeremy", "Jon", "Marty", "Chris", "Randall", "Glenn");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","0");

    // fifth round
    pick.push("Brent", "Jordan", "Rich", "Greg", "Kelly", "David",
              "Jeremy", "Jon", "Marty", "Chris", "Randall", "Glenn");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","0");

    // sixth round
    pick.push("Brent", "Jordan", "Rich", "Greg", "Kelly", "David",
              "Jeremy", "Jon", "Marty", "Chris", "Randall", "Glenn");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","0");

    // seventh round
    pick.push("Brent", "Jordan", "Rich", "Marty", "Kelly", "David",
              "Jeremy", "Jon", "Marty", "Chris", "Randall", "Glenn");
    superScript.push("0","0","0","3","0","0",
                     "0","0","0","0","0","0");

    let htmlCode = '<table class="responsive"><thead><th colspan="8">2026 American League Reserves Roster Draft (Ordered)</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">Round 1</td><td class="colTitle">Round 2</td><td class="colTitle">Round 3</td><td class="colTitle">Round 4</td><td class="colTitle">Round 5</td><td class="colTitle">Round 6</td><td class="colTitle">Round 7</td></tr>';

    for ( let i = 0; i < 12; i++) {
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
    htmlCode += "<li>7/4/2025: <strong>Greg</strong> trades <em>Ramon Laureano</em> ";
    htmlCode += "to <strong>Chris</strong> for a 3rd round 2026 reserve pick.</li>";
    // 2
    htmlCode += "<li>8/24/2025: <strong>Greg</strong> trades <em>Ryan Mountcastle</em> to ";
    htmlCode += "<strong>Randall</strong> for <em>Joe Boyle</em> and a 2nd round 2026 reserve pick.</li>";
    // 3
    htmlCode += "<li>10/3/2025: <strong>Marty</strong> trades a 2026 3rd round ML pick ";
    htmlCode += "to <strong>Greg</strong> for a 2026 7th round reserve pick.</li>";
    htmlCode += '</ol>';
    return htmlCode;
}

function NLReserves26() {
    var pick = [];
    var superScript = [];
    // FYPD first round
    pick.push("Greg", "Matt A", "Jon", 
        "Marc", "Rich", "Don", 
        "David", "Doug",
        "Ken", "Glenn", "Rich");
    superScript.push("3","0","0",
               "0","0","0",
               "0","0",
               "0","0","2");

    // FYPD second round
    pick.push("Matt R", "Jon", "Jon", 
        "Marc", "Rich", "Don", 
        "David", "Doug",
        "Ken", "Glenn", "Greg");
    superScript.push("0","1","0",
               "0","0","0",
               "0","0",
               "0","0","0");

    // FYPD third round
    pick.push("Matt R", "Matt A", "Jon", 
        "Marc", "Rich", "Don", 
        "David", "Doug",
        "Ken", "Glenn", "Greg");
    superScript.push("0","0","0",
               "0","0","0",
               "0","0",
               "0","0","0");

    // FYPD fourth round
    pick.push("Matt R", "Matt A", "Jon", 
        "Marc", "Rich", "Don", 
        "David", "Doug",
        "Ken", "Glenn", "Greg");
    superScript.push("0","0","0",
                     "0","0","0",
                     "0","0",
                     "0","0","0");

    // post-auction first round
    pick.push("Matt R", "Matt A", "Jon", 
        "Marc", "Rich", "Don", 
        "David", "Doug",
        "Ken", "Glenn", "Rich");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","2");

    // post-auction second round
    pick.push("Matt R", "Matt A", "Jon", 
        "Marc", "Rich", "Don", 
        "David", "Doug",
        "Ken", "Glenn", "Greg");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // post-auction third round
    pick.push("Matt R", "Matt A", "Jon", 
        "Marc", "Rich", "Don", 
        "David", "Doug",
        "Ken", "Glenn", "Greg");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // post-auction fourth round
    pick.push("Matt R", "Matt A", "Jon", 
        "Marc", "Rich", "Don", 
        "David", "Doug",
        "Ken", "Glenn", "Greg");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // post-auction fifth round
    pick.push("Matt R", "Matt A", "Jon", 
        "Marc", "Rich", "Don", 
        "David", "Doug",
        "Ken", "Glenn", "Greg");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // post-auction sixth round
    pick.push("Matt R", "Matt A", "Jon", 
        "Marc", "Rich", "Don", 
        "David", "Doug",
        "Ken", "Glenn", "Greg");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // post-auction seventh round
    pick.push("Matt R", "Matt A", "Jon", 
        "Marc", "Rich", "Don", 
        "David", "Doug",
        "Ken", "Glenn", "Greg");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // online first round
    pick.push("Matt R", "Matt A", "Jon", 
        "Marc", "Rich", "Don", 
        "David", "Doug",
        "Ken", "Glenn", "Greg");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // online second round
    pick.push("Matt R", "Matt A", "Jon", 
        "Marc", "Rich", "Don", 
        "David", "Doug",
        "Ken", "Glenn", "Greg");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // online third round
    pick.push("Matt R", "Matt A", "Jon", 
        "Marc", "Rich", "Don", 
        "David", "Doug",
        "Ken", "Glenn", "Greg");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // online fourth round
    pick.push("Matt R", "Matt A", "Jon", 
        "Marc", "Rich", "Don", 
        "David", "Doug",
        "Ken", "Glenn", "Greg");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // First Year Player Draft
     let htmlCode = '<table class="responsive"><thead><th colspan="5">2026 Ordered National League FYPD</th></thead>';
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
    htmlCode += '<table class="responsive"><thead><th colspan="8">2026 Ordered National League Reserves Roster Draft (Post-Auction)</th></thead>';
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
    htmlCode += '<ul><li>$15 for round 1</li>';
    htmlCode += '<li>$10 for round 2</li>';
    htmlCode += '<li>$5 for rounds 3 and 4</li>';
    htmlCode += '<li>$2 for rounds 5 through 7</li></ul><br />';

    // Online Draft
    htmlCode += '<table class="responsive"><thead><th colspan="8">2026 Ordered National League Online Reserves Roster Draft</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td>';
    htmlCode += '<td class="colTitle">Online Round 1</td>';
    htmlCode += '<td class="colTitle">Online Round 2</td>';
    htmlCode += '<td class="colTitle">Online Round 3</td>';
    htmlCode += '<td class="colTitle">Online Round 4</td></tr>';

    for (let i = 0; i <11; i++) {
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
    htmlCode += '<ul><li>$5 for all rounds</li></ul>';

    // include the footnotes of the trade details
    htmlCode += '<br /><h3>Trade Details</h3>';
    htmlCode += '<ol>';
    // 1
    htmlCode += '<li>3/19/2025: <strong>Jon</strong> trades <em>Dedniel Nunez</em> ';
    htmlCode += 'to <strong>Matt A</strong> for a 2nd round pick in the 2026 FYPD.</li>';
    // 2
    htmlCode += "<li>8/17/2025: <strong>Rich</strong> trades <em>Ivan Herrera</em> and ";
    htmlCode += "<em>Francisco Lindor</em> to <strong>Greg</strong> for <em>Cristian Mena</em>, ";
    htmlCode += "<em>Robert Hassell</em>, <em>Josh Bell</em>, a 1st round 2026 FYPD pick, and ";
    htmlCode += "a 1st round 2026 reserve roster pick.</li>";
    // 3
    htmlCode += "<li>2/26/2026: <strong>Greg</strong> trades <em>Logan Webb</em> to ";
    htmlCode += "<strong>Matt R</strong> for a 2026 1st round FYPD pick.</li>";
    htmlCode += '</ol>';
    return htmlCode;

}
