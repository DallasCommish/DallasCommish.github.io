function ALMinors24() {
    var pick = [];
    var superScript = [];
    // first round
    pick.push("Greg", "Brent", "Kelly", 
              "Jeremy", "Kelly", "Chris", 
              "Chris", "David", "Jon", 
              "Brent", "Jeremy", "Randall");
    superScript.push("14","9","7",
              "1, 8, and 11","0","12 and 18",
              "0","2 and 13","6",
              "3","4 and 16","5");

    // second round
    pick.push("David", "Marty", "Jordan", 
              "Randall", "Jordan", "Greg", 
              "Chris", "Jon", "David", 
              "Glenn", "Marty", "Chris");
    superScript.push("15","0","17",
              "0","19","0",
              "0","0","0",
              "0","10","20");

    // third round
    pick.push("Brent", "Marty", "Jeremy", 
              "Randall", "Kelly", "Greg", 
              "Chris", "Jon", "David", 
              "Glenn", "Rich", "Jordan");
    superScript.push("0","0","0",
                     "0","0","0",
                     "0","0","0",
                     "0","0","0");

    // fourth round
    pick.push("Brent", "Marty", "Jeremy", 
              "Randall", "Kelly", "Greg", 
              "Chris", "Jon", "David", 
              "Glenn", "Rich", "Jordan");
    superScript.push("0","0","0",
                     "0","0","0",
                     "0","0","0",
                     "0","0","0");

    let htmlCode = '<table class="responsive"><thead><th colspan="5">2024 American League Minors Roster Draft (Ordered)</th></thead>';
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
    htmlCode += '<li>4/1/2022: <strong>Jordan</strong> trades <em>Jordan Montgomery</em> ';
    htmlCode += 'to <strong>Randall</strong> for a 2024 1st round minor league pick.</li>';
    // 2
    htmlCode += '<li>7/6/2022: <strong>Jon</strong> trades <em>Nate Lowe</em>, ';
    htmlCode += '<em>Elijah Morgan</em>, and a 2024 1st round minor league pick to ';
    htmlCode += '<strong>Greg</strong> for <em>Whit Merrifield</em> and <em>Trevor Story.</em>';
    // 3
    htmlCode += '<li>8/7/2022: <strong>Brent</strong> trades <em>Alex Verdugo</em> and ';
    htmlCode += '<em>Liam Hendriks</em> to <strong>Glenn</strong> for <em>Clarke Schmidt</em>';
    htmlCode += ' and a 2024 1st round minor league pick.</li>';
    // 4
    htmlCode += '<li>8/7/2022: <strong>Brent</strong> trades <em>Adam Engel</em> ';
    htmlCode += 'and <em>Ramon Laureano</em> and a 2023 5th round reserve pick to ';
    htmlCode += '<strong>Rich</strong> for a 2023 1st round reserve pick and a 2024 ';
    htmlCode += '1st round minor league pick.</li>';
    // 5
    htmlCode += '<li>8/14/2022: <strong>Randall</strong> trades <em>Luis Castillo</em> ';
    htmlCode += 'to <strong>Jordan</strong> for <em>Jasson Dominguez</em> and a 2024 1st';
    htmlCode += ' round minor league pick.</li>'
    // 6
    htmlCode += '<li>8/23/2022: <strong>Jon</strong> trades <em>A.J. Pollock</em> ';
    htmlCode += 'and <em>Jesse Winker</em> to <strong>David</strong> for a 2024 1st ';
    htmlCode += 'round minor league pick and a 2025 2nd round minor league pick.</li>';
    // 7
    htmlCode += '<li>2/28/2023: <strong>Kelly</strong> trades <em>Brayan Bello</em> and a ';
    htmlCode += '2nd round 2023 minor league pick to <strong>Jeremy</strong> for a 1st round ';
    htmlCode += '2024 minor league pick.</li>';
    // 8
    htmlCode += '<li>6/11/2023: <strong>Jordan</strong> trades <em>Aroldis Chapman</em>, ';
    htmlCode += '<em>Lance McCullers</em>, and a 1st round 2024 minor league pick to ';
    htmlCode += '<strong>Randall</strong> for <em>Emmanuel Clase</em> and <em>Cionel Perez</em>.</li>';
    // 9
    htmlCode += '<li>7/2/2023: <strong>Brent</strong> trades <em>Alex Kiriloff</em>, <em>Bailey Ober</em>, ';
    htmlCode += 'and <em>Enrique Hernandez</em> to <strong>Marty</strong> for a 2024 1st round minor ';
    htmlCode += 'pick and a 2026 1st round minor league pick.</li>';
    // 10
    htmlCode += "<li>8/7/2023: <strong>Rich</strong> trades <em>Tyler Wells</em>, <em>John Means</em>, ";
    htmlCode += "and a 2024 2nd round minor league pick to <strong>Marty</strong> for ";
    htmlCode += "<em>Justin Verlander</em> and <em>Randy Arozarena</em>.</li>";
    // 11
    htmlCode += '<li>3/15/2024: <strong>Randall</strong> trades <em>Jonah Heim</em>, a 2024 1st round ML pick, and ';
    htmlCode += 'a 2024 1st round reserve pick to <strong>Jeremy</strong> for <em>Nestor Cortes</em>, <em>Brooks Lee</em>, ';
    htmlCode += 'and a 2024 1st round reserve pick.</li>';
    // 12
    htmlCode += "<li>3/25/2024: <strong>Greg</strong> trades a 2024 1st round minors pick to ";
    htmlCode += "<strong>Randall</strong> for a 2025 1st round minors pick.</li>";
    // 13
    htmlCode += "<li>3/25/2024: <strong>Greg</strong> trades a 2024 1st round minors pick to ";
    htmlCode += "<strong>David</strong> for a 2024 1st round reserve pick.</li>";
    // 14
    htmlCode += "<li>3/26/2024: <strong>Greg</strong> trades <em>Wilyer Abreu</em> and <em>Erik Swanson</em> ";
    htmlCode += "to <strong>Brent</strong> for a 1st round 2024 minors pick.";
    // 15
    htmlCode += '<li>3/28/2024: <strong>Brent</strong> trades a 2nd round 2024 ML pick to ';
    htmlCode += '<strong>David</strong> for a 2027 1st round ML pick.</li>';
    // 16
    htmlCode += "<li>3/28/2024: <strong>Jeremy</strong> trades a 1st round 2025 ML pick to ";
    htmlCode += "<strong>Brent</strong> for a 1st round 2024 ML pick (originally Rich).";
    // 17
    htmlCode += "<li>3/28/2024: <strong>Jeremy</strong> trasdes <em>Will Smith</em>, ";
    htmlCode += "<em>Pablo Lopez</em>, and a 2nd round 2024 ML pick to <strong>Jordan</strong> ";
    htmlCode += "for <em>Carlos Estevez</em> and <em>Travis Jankowski</em>.</li>";
    // 18
    htmlCode += "<li>3/29/2024: <strong>Randall</strong> trades <em>J.P. France</em>, ";
    htmlCode += "<em>Jason Foley</em>, and a 1st round 2024 ML pick to ";
    htmlCode += "<strong>Chris</strong> for <em>Esteury Ruiz</em>.</li>";
    // 19
    htmlCode += "<li>3/29/2024: <strong>Kelly</strong> trades a 2nd round 2024 ML pick to ";
    htmlCode += "<strong>Jordan</strong> for a 2nd round 2025 ML pick.</li>";
    // 20
    htmlCode += "<li>3/29/2024: <strong>Chris</strong> trades <em>Nick Pivetta</em> to ";
    htmlCode += "<strong>Jordan</strong> for <em>Logan T. Allen</em> and a 2nd round 2024 ML pick.</li>";
    htmlCode += '</ol>';
    return htmlCode;
}

function ALReserves24() {
    var pick = [];
    var superScript = [];
    // first round
    pick.push("Brent", "Marty", "Randall", "Jeremy", "Kelly", "Greg",
    "Chris", "Jon", "Greg", "Glenn", "Rich", "Greg");
    superScript.push("0","0","3","3","0","0",
                     "0","0","4","0","0","2");

    // second round
    pick.push("Brent", "Marty", "Jeremy", "Randall", "Kelly", "David",
    "Chris", "Jon", "David", "Glenn", "Rich", "Jordan");
    superScript.push("0","0","0","0","0","1",
                     "0","0","0","0","0","0");

    // third round
    pick.push("Brent", "Marty", "Jeremy", "Randall", "Kelly", "Greg",
    "Chris", "Jon", "Greg", "Glenn", "Rich", "Jordan");
    superScript.push("0","0","0","0","0","0",
                     "0","0","1","0","0","0");

    // fourth round
    pick.push("Brent", "Marty", "Jeremy", "Randall", "Kelly", "Greg",
    "Chris", "Jon", "David", "Glenn", "Rich", "Jordan");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","0");

    // fifth round
    pick.push("Brent", "Marty", "Jeremy", "Randall", "Kelly", "Greg",
    "Chris", "Jon", "David", "Glenn", "Rich", "Jordan");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","0");

    // sixth round
    pick.push("Brent", "Marty", "Jeremy", "Randall", "Kelly", "Greg",
    "Chris", "Jon", "David", "Glenn", "Rich", "Jordan");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","0");

    // seventh round
    pick.push("Brent", "Marty", "Jeremy", "Randall", "Kelly", "Greg",
    "Chris", "Jon", "David", "Glenn", "Rich", "Jordan");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","0");

    let htmlCode = '<table class="responsive"><thead><th colspan="8">2024 American League Reserves Roster Draft (Ordered)</th></thead>';
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
    htmlCode += '<li>5/1/2023: <strong>Greg</strong> trades a 2024 2nd round reserve roster pick ';
    htmlCode += 'to <strong>David</strong> for a 2024 3rd round reserve roster pick.</li>';
    // 2
    htmlCode += '<li>6/14/2023: <strong>Greg</strong> trades <em>Garrett Whitlock</em> to ';
    htmlCode += '<strong>Jordan</strong> for a 2024 1st round reserve pick.</li>';
    // 3
    htmlCode += '<li>3/15/2024: <strong>Randall</strong> trades <em>Jonah Heim</em>, a 2024 1st round ML pick, and ';
    htmlCode += 'a 2024 1st round reserve pick to <strong>Jeremy</strong> for <em>Nestor Cortes</em>, <em>Brooks Lee</em>, ';
    htmlCode += 'and a 2024 1st round reserve pick.</li>';
    // 4
    htmlCode += "<li>3/25/2024: <strong>Greg</strong> trades a 2024 1st round minors pick to ";
    htmlCode += "<strong>David</strong> for a 2024 1st round reserve pick.</li>";
    htmlCode += '</ol>';
    return htmlCode;
}

function NLReserves24() {
    var pick = [];
    var superScript = [];
    // FYPD first round
     pick.push("Matt A", "Jon", "Marc", "Greg", "Ken", "Jeffrey", "Doug", "David",
               "Matt R", "Rich", "Glenn");
     superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // FYPD second round
    pick.push("Matt A", "Jon", "Marc", "Jeffrey", "Ken", "Jeffrey", "Doug", "David",
              "Matt R", "Rich", "Glenn");
    superScript.push("0","0","0","3","0","0","0","0","0","0","0");

    // FYPD third round
    pick.push("Matt A", "Jon", "Marc", "Greg", "Ken", "Jeffrey", "Doug", "David",
              "Matt R", "Rich", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // FYPD fourth round
    pick.push("Matt A", "Jon", "Marc", "Greg", "Ken", "Jeffrey", "Doug", "David",
              "Matt R", "Rich", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // post-auction first round
    pick.push("Greg", "Matt A", "Marc", "Jon", "Ken", "Jeffrey", "Doug", "David",
              "Matt R", "Rich", "Glenn");
    superScript.push("5","4 and 5","0","4","0","0","0","0",
                     "0","0","0");

    // post-auction second round
    pick.push("Matt A", "Jon", "Marc", "Greg", "Ken", "Jeffrey", "Doug", "David",
              "Matt R", "Rich", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // post-auction third round
    pick.push("Matt A", "Greg", "Marc", "Greg", "Ken", "Greg", "Doug", "David",
              "Matt R", "Rich", "Glenn");
    superScript.push("0","1","0","0","0","2","0","0","0","0","0");

    // post-auction fourth round
    pick.push("Matt A", "Jon", "Marc", "Jeffrey", "Ken", "Jeffrey", "Doug", "David",
              "Matt R", "Rich", "Glenn");
    superScript.push("0","0","0","2","0","0","0","0","0","0","0");

    // post-auction fifth round
    pick.push("Matt A", "Jon", "Marc", "Greg", "Ken", "Jeffrey", "Doug", "David",
              "Matt R", "Rich", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // post-auction sixth round
    pick.push("Matt A", "Jon", "Marc", "Greg", "Ken", "Jeffrey", "Doug", "David",
              "Matt R", "Rich", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // post-auction seventh round
    pick.push("Matt A", "Jon", "Marc", "Greg", "Ken", "Jeffrey", "Doug", "David",
              "Matt R", "Rich", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // online first round
    pick.push("Matt A", "Jon", "Marc", "Greg", "Ken", "Jeffrey", "Doug", "David",
              "Matt R", "Rich", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // online second round
    pick.push("Matt A", "Jon", "Marc", "Greg", "Ken", "Jeffrey", "Doug", "David",
              "Matt R", "Rich", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // online third round
    pick.push("Matt A", "Jon", "Marc", "Greg", "Ken", "Jeffrey", "Doug", "David",
              "Matt R", "Rich", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // online fourth round
    pick.push("Matt A", "Jon", "Marc", "Greg", "Ken", "Jeffrey", "Doug", "David",
              "Matt R", "Rich", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // First Year Player Draft
     let htmlCode = '<table class="responsive"><thead><th colspan="5">2024 Ordered National League FYPD</th></thead>';
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
    htmlCode += '<table class="responsive"><thead><th colspan="8">2024 Ordered National League Reserves Roster Draft (Post-Auction)</th></thead>';
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
    htmlCode += '<table class="responsive"><thead><th colspan="8">2024 Ordered National League Online Reserves Roster Draft</th></thead>';
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
    htmlCode += '<li>5/14/2023: <strong>Greg</strong> traded <em>Juan Soto</em> ';
    htmlCode += ' and <em>Will Smith</em> to ';
    htmlCode += '<strong>Jon</strong> for <em>Nick Senzel</em>, <em>Luis Campusano</em>, ';
    htmlCode += ' and a 2024 3rd round post-auction reserve pick.</li>';
    // 2
    htmlCode += '<li>8/30/2023: <strong>Greg</strong> trades <em>Jun-Seok Shim</em>, ';
    htmlCode += '<em>Colin Holderman</em>, <em>George Soriano</em>, and a 2024 4th round ';
    htmlCode += 'reserve pick to <strong>Jeffrey</strong> for <em>Victor Caratini</em>, ';
    htmlCode += '<em>Josh Harrison</em>, and a 2024 3rd round reserve pick.</li>';
    // 3
    htmlCode += '<li>3/4/2024: <strong>Greg</strong> trades a 2nd round pick in the 2024 FYPD ';
    htmlCode += 'to <strong>Jeffrey</strong> for a 3rd round pick in the 2025 FYPD.</li>';
    // 4
    htmlCode += "<li>3/28/2024: <strong>Greg</strong> trades a 2024 1st round pick and a 2025 2nd ";
    htmlCode += "round pick to <strong>Jon</strong> for a 2024 1st round pick.</li>";
    // 5
    htmlCode += "<li>3/29/2024: <strong>Greg</strong> trades a 2024 1st round pick to ";
    htmlCode += "<strong>Matt A</strong> for a 2024 1st round pick.</li>";
    htmlCode += '</ol>';
    return htmlCode;

}
