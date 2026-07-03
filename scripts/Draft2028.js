function ALMinors28() {
    var pick = [];
    var superScript = [];
    // first round
    pick.push("Glenn", "Jeremy", "Jon", 
              "Chris", "Jordan", "David", 
              "Rich", "Kelly", "Marty", 
              "Jon", "Brent", "Randall");
    superScript.push("0","0","1 and 2",
                     "0","0","0",
                     "0","0","0",
                     "0","0","0");

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
    pick.push("Glenn", "Jeremy", "Greg", 
              "Chris", "Jordan", "David M", 
              "Rich", "Kelly", "Marty", 
              "Jon", "Brent", "Randall");
    superScript.push("0","0","0",
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

    let htmlCode = '<table class="responsive"><thead><th colspan="5">2028 American League Minors Roster Draft (Unordered)</th></thead>';
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
    htmlCode += "<li>4/4/2025: <strong>Greg</strong> trades <em>Jazz Chisholm</em> and a ";
    htmlCode += "2028 1st round ML pick to <strong>Randall</strong> for <em>Cam Smith</em>, ";
    htmlCode += "<em>Juan Brito</em>, and a 2027 1st round ML pick.</li>";
    // 2
    htmlCode += "<li>8/31/2025: <strong>Jon</strong> trades <em>Framber Valdez</em> to ";
    htmlCode += "<strong>Randall</strong> for a 2028 1st round ML pick.</li>";
    htmlCode += '</ol>';
    return htmlCode;
}

function NLReserves27() {
    var pick = [];
    var superScript = [];
    // FYPD first round
    pick.push("Greg", "Rich", "Marc", 
        "Matt R", "Doug", "Don", 
        "Ken", "David",
        "Glenn", "Greg", "Matt A");
    superScript.push("1","0","0",
               "0","0","0",
               "0","0",
               "0","0","0");

    // FYPD second round
    pick.push("Jon", "Rich", "Marc", 
        "Matt R", "Doug", "Don", 
        "Ken", "David",
        "Glenn", "Jon", "Matt A");
    superScript.push("0","0","0",
               "0","0","0",
               "0","0",
               "0","1","0");

    // FYPD third round
    pick.push("Jon", "Rich", "Marc", 
        "Matt R", "Doug", "Don", 
        "Ken", "David",
        "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
               "0","0","0",
               "0","0",
               "0","0","0");

    // FYPD fourth round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Don", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                     "0","0","0",
                     "0","0",
                     "0","0","0");

    // post-auction first round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Don", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // post-auction second round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Don", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // post-auction third round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Don", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // post-auction fourth round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Don", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // post-auction fifth round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Don", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // post-auction sixth round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Don", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // post-auction seventh round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Don", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // online first round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Don", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // online second round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Don", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // online third round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Don", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // online fourth round
    pick.push("Jon", "Rich", "Marc", 
              "Matt R", "Doug", "Don", 
              "Ken", "David",
              "Glenn", "Greg", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","0","0");

    // First Year Player Draft
     let htmlCode = '<table class="responsive"><thead><th colspan="5">2028 Un-ordered National League FYPD</th></thead>';
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
    htmlCode += '<li>6/30/2026: <strong>Greg</strong> trades <em>Adrian Morejon</em> and ';
    htmlCode += 'a 2028 2nd round FYPD pick to <strong>Jon</strong> for a 2028 1st round FYPD pick.</li>';
    // 2
    htmlCode += '<li>3/15/2026: <strong>Marc</strong> trades <em>Jung Hoo Lee</em> to ';
    htmlCode += '<strong>David</strong> for <em>James Triantos</em> and a 2027 1st round FYPD pick.</li>';
    htmlCode += '</ol>';
    return htmlCode;

}
