function ALMinors23() {
    var pick = [];
    var superScript = [];
    // first round
    pick.push("Kelly", "David I", "Brent", "Greg", "Kelly", "Brent", "Marty", "Jeremy", "Jordan", "Glenn", "Rich", "David");
    superScript.push("0","0","1","3","2 and 6","0","0","0","0","4","0","5 and 7");

    // second round
    pick.push("Randall", "David I", "Glenn", "Jon", "Randall", "David M", "Marty", "Jeremy", "Jordan", "David M", "Rich", "Glenn");
    superScript.push("8 and 9","0","2 and 5","0","0","10","0","0","0","0","0","0");

    // third round
    pick.push("Kelly", "David I", "Greg", "Jon", "Randall", "Brent", "Marty", "Jeremy", "Jordan", "David M", "Rich", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0","0");

    // fourth round
    pick.push("Kelly", "David I", "Greg", "Jon", "Randall", "Brent", "Marty", "Jeremy", "Jordan", "David M", "Rich", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0","0");

    let htmlCode = '<table class="responsive"><thead><th colspan="5">2023 American League Minors Roster Draft (Ordered)</th></thead>';
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
    htmlCode += '<li>3/29/2019: <strong>Brent</strong> trades a 2019 1st round minor league draft pick,';
    htmlCode += ' a 2019 1st round minor league draft pick (Don), and a 2019 1st round minor league draft';
    htmlCode += ' pick (Marty) to <strong>Don</strong> for a 2019 1st round reserve pick (Jeremy), a 2022';
    htmlCode += ' 1st round minor league pick, and a 2023 1st round minor league pick.</li>';
    // 2
    htmlCode += '<li>4/25/2021: <strong>Randall</strong> trades <em>Clarke Schmidt</em> and a 1st round 2023 ';
    htmlCode += 'minor league pick to <strong>Don and Greg</strong> for <em>Jake Diekman</em> and a 2nd round ';
    htmlCode += '2023 minor league pick.</li>';
    // 3
    htmlCode += '<li>8/30/2021: <strong>Jon</strong> trades <em>Taylor Walls</em>, <em>Orelvis Martinez</em> ';
    htmlCode += '<em>Tyler Glasnow</em>, and a 2023 1st round minor league pick to <strong>Don and Greg</strong> ';
    htmlCode += 'for <em>Nate Lowe</em>, <em>Jeimer Candelario</em>, and <em>Austin Hays</em>.</li>';
    // 4
    htmlCode += '<li>3/20/2022: <strong>Glenn</strong> trades <em>Brandon Marsh</em> to ';
    htmlCode += '<strong>David</strong> for a 2023 1st round minor league pick.</li>';
    // 5
    htmlCode += '<li>7/31/2022: <strong>Glenn</strong> trades <em>George Valera</em> and ';
    htmlCode += 'a 2023 1st round minor league pick to <strong>Randall</strong> for ';
    htmlCode += '<em>Jose Altuve</em> and a 2023 2nd round minor league pick.</li>';
    // 6
    htmlCode += '<li>8/4/2022: <strong>Kelly</strong> trades <em>Mike Trout</em> to ';
    htmlCode += '<strong>Greg</strong> for a 2023 1st round minor league pick and a ';
    htmlCode += '2023 2nd round reserve pick.</li>';
    // 7
    htmlCode += '<li>3/16/2023: <strong>Randall</strong> trades <em>Cole Ragans</em> and ';
    htmlCode += 'a 1st round 2023 minor league pick to <strong>David</strong> for ';
    htmlCode += '<em>Santiago Espinal</em> and <em>George Kirby</em>.</li>';
    // 8
    htmlCode += '<li>2/28/2023: <strong>Kelly</strong> trades <em>Brayan Bello</em> and a ';
    htmlCode += '2nd round 2023 minor league pick to <strong>Jeremy</strong> for a 1st round ';
    htmlCode += '2024 minor league pick.</li>';
    // 9
    htmlCode += '<li>3/22/2023: <strong>Randall</strong> trades <em>Jake Meyers</em>, ';
    htmlCode += '<em>Aledmys Diaz</em>, and <em>Santiago Espinal</em> to <strong>Jeremy</strong> ';
    htmlCode += 'for <em>Anthony Rizzo</em>, <em>Cionel Perez</em> and a 2nd round 2023 minor league pick.</li>';
    // 10
    htmlCode += '<li>3/23/2023: <strong>Brent</strong> trades a 2nd round 2023 minor league ';
    htmlCode += 'pick to <strong>David</strong> for a 1st round 2025 minor league pick.</li>';
    htmlCode += '</ol>';
    return htmlCode;
}

function ALReserves23() {
    var pick = [];
    var superScript = [];
    // first round
    pick.push("Kelly", "David I", "Greg", "Jon", "Randall", "Brent",
              "Marty", "Jeremy", "Jordan", "David M", "Brent", "Glenn");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","3","0");

    // second round
    pick.push("Kelly", "David I", "Greg", "Randall", "Randall", "Brent",
              "Marty", "Jeremy", "Jordan", "David M", "Kelly", "Glenn");
    superScript.push("0","0","0","4","0","0",
                     "0","0","0","0","1 and 2","0");

    // third round
    pick.push("Kelly", "David I", "Greg", "Jon", "Jon", "Brent",
              "Marty", "Jeremy", "Jordan", "David M", "Rich", "Glenn");
    superScript.push("0","0","0","0","4","0",
                     "0","0","0","0","0","0");

    // fourth round
    pick.push("Kelly", "David I", "Greg", "Jon", "Randall", "Brent",
              "Marty", "Jeremy", "Jordan", "David M", "Rich", "Glenn");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","0");

    // fifth round
    pick.push("Kelly", "David I", "Greg", "Jon", "Randall", "Rich",
              "Marty", "Jeremy", "Jordan", "David M", "Rich", "Glenn");
    superScript.push("0","0","0","0","0","3",
                     "0","0","0","0","0","0");

    // sixth round
    pick.push("Kelly", "David I", "Greg", "Randall", "Randall", "Brent",
              "Marty", "Jeremy", "Jordan", "David M", "Rich", "Glenn");
    superScript.push("0","0","0","4","0","0",
                     "0","0","0","0","0","0");

    // seventh round
    pick.push("Kelly", "David I", "Greg", "Jon", "Jon", "Brent",
              "Marty", "Jeremy", "Jordan", "David M", "Rich", "Glenn");
    superScript.push("0","0","0","0","4","0",
                     "0","0","0","0","0","0");

    let htmlCode = '<table class="responsive"><thead><th colspan="8">2023 American League Reserves Roster Draft (Ordered)</th></thead>';
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
    htmlCode += '<li>7/23/2022: <strong>Greg</strong> trades <em>Owen Miller</em> ';
    htmlCode += 'to <strong>Rich</strong> for a 2023 2nd round reserve roster pick.</li>';
    // 2
    htmlCode += '<li>8/4/2022: <strong>Kelly</strong> trades <em>Mike Trout</em> to ';
    htmlCode += '<strong>Greg</strong> for a 2023 1st round minor league pick and a ';
    htmlCode += '2023 2nd round reserve pick.';
    // 3
    htmlCode += '<li>8/7/2022: <strong>Brent</strong> trades <em>Adam Engel</em> ';
    htmlCode += 'and <em>Ramon Laureano</em> and a 2023 5th round reserve pick to ';
    htmlCode += '<strong>Rich</strong> for a 2023 1st round reserve pick and a 2024 ';
    htmlCode += '1st round minor league pick.';
    // 4
    htmlCode += '<li>3/24/2023: <strong>Randall</strong> trades <em>Nate Pearson</em>, a ';
    htmlCode += '2023 3rd round reserve pick, and a 2023 7th round reserve pick to ';
    htmlCode += '<strong>Jon</strong> for a 2023 2nd round reserve pick and a 2023 6th ';
    htmlCode += 'round reserve pick.</li>';
    htmlCode += '</ol>';
    return htmlCode;
}

function NLReserves23() {
    var pick = [];
    var superScript = [];
    // FYPD first round
     pick.push("Matt R", "Matt A", "Rich", "Doug", "Ken", "David I", "David M", "Marc",
               "Jon", "Greg", "Glenn");
     superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // FYPD second round
    pick.push("Matt R", "Matt A", "Rich", "Doug", "Ken", "David I", "David M", "Marc",
        "Jon", "Greg", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // FYPD third round
    pick.push("Matt R", "Matt A", "Rich", "Doug", "Ken", "David I", "David M", "Marc",
        "Jon", "Greg", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // FYPD fourth round
    pick.push("Matt R", "Matt A", "Rich", "Doug", "Ken", "David I", "David M", "Marc",
        "Jon", "Greg", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // post-auction first round
    pick.push("Matt R", "Matt A", "Rich", "Doug", "Ken", "David I", "Rich", "Marc",
        "Rich", "Greg", "Glenn");
    superScript.push("0","0","0","0","0","0","2","0",
        "1","0","0");

    // post-auction second round
    pick.push("Matt R", "Matt A", "Rich", "Doug", "Ken", "David I", "David M", "Marc",
        "Jon", "Greg", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // post-auction third round
    pick.push("Matt R", "Matt A", "Rich", "Doug", "Ken", "David I", "David M", "Marc",
        "Jon", "Greg", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // post-auction fourth round
    pick.push("Matt R", "Matt A", "Rich", "Doug", "Ken", "David I", "David M", "Marc",
        "Jon", "Greg", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // post-auction fifth round
    pick.push("Matt R", "Matt A", "Rich", "Doug", "Ken", "David I", "David M", "Marc",
        "Jon", "Greg", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // post-auction sixth round
    pick.push("Matt R", "Matt A", "Rich", "Doug", "Ken", "David I", "David M", "Marc",
        "Jon", "Greg", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // post-auction seventh round
    pick.push("Matt R", "Matt A", "Rich", "Doug", "Ken", "David I", "David M", "Marc",
        "Jon", "Greg", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // online first round
    pick.push("Matt R", "Matt A", "Rich", "Doug", "Ken", "David I", "David M", "Marc",
        "Jon", "Greg", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // online second round
    pick.push("Matt R", "Matt A", "Rich", "Doug", "Ken", "David I", "David M", "Marc",
        "Jon", "Greg", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // online third round
    pick.push("Matt R", "Matt A", "Rich", "Doug", "Ken", "David I", "David M", "Marc",
        "Jon", "Greg", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // online fourth round
    pick.push("Matt R", "Matt A", "Rich", "Doug", "Ken", "David I", "David M", "Marc",
        "Jon", "Greg", "Glenn");
    superScript.push("0","0","0","0","0","0","0","0","0","0","0");

    // First Year Player Draft
     let htmlCode = '<table class="responsive"><thead><th colspan="5">2023 Ordered National League FYPD</th></thead>';
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
    htmlCode += '<table class="responsive"><thead><th colspan="8">2023 Ordered National League Reserves Roster Draft (Post-Auction)</th></thead>';
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
    htmlCode += '<table class="responsive"><thead><th colspan="8">2023 Ordered National League Online Reserves Roster Draft</th></thead>';
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
    htmlCode += '<li>8/14/2022: <strong>Jon</strong> traded <em>Bryan Reynolds</em>, ';
    htmlCode += '<em>Brice Turang</em>, <em>Andy Pages</em>, <em>Christian Walker</em>, ';
    htmlCode += '<em>Josiah Gray</em>, and a 2023 1st round post-auction pick to ';
    htmlCode += '<strong>Rich</strong> for <em>Trea Turner</em>, <em>Miguel Rojas</em>, ';
    htmlCode += ' and <em>Jose Iglesius</em>.</li>';
    // 2
    htmlCode += '<li>3/24/2023: <strong>Rich</strong> trades <em>Drey Jameson</em> and ';
    htmlCode += '<em>Andy Pages</em> to <strong>David</strong> for <em>Zac Veen</em> and ';
    htmlCode += ' a 2023 1st round post-auction draft pick.</li>';
    htmlCode += '</ol>';
    return htmlCode;

}
