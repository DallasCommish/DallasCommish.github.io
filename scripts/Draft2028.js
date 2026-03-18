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
    htmlCode += "<li>8/31/2025</li>: <strong>Jon</strong> trades <em>Framber Valdez</em> to ";
    htmlCode += "<strong>Randall</strong> for a 2028 1st round ML pick.</li>";
    htmlCode += '</ol>';
    return htmlCode;
}

