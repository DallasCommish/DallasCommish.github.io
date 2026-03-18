function maxCategory2025() {
    var teamList = ['Banoaster Republic', "David's 5 &amp; Dime", 'Flower Children', 'Hradek Hrams', 
                    'Jak of Diamonds', 'Kelly S*M*A*S*H', "Kirk's Enterprise", 'Non-Zero Chance',
                    'The Blossoms', 'The Patsy Killjoys', 'The Shohei Kid', 'Wichita TinMen'];

    var HR = [13, 9, 14, 22, 11, 14, 19, 15, 17, 22, 10, 19];
    var OBP = [0.3667, 0.3556, 0.3929, 0.3569, 0.3445, 0.381, 0.3937, 0.392, 0.3502, 0.35, 0.3516, 0.3717];
    var R = [45, 35, 47, 55, 34, 51, 56, 44, 46, 49, 33, 51];
    var RBI = [52, 33, 41, 54, 38, 50, 52, 43, 48, 59, 34, 48];
    var SB = [8, 10, 8, 11, 9, 10, 12, 9, 9, 8, 10, 9];
    var ERA = [1.34, 1.696, 1.465, 1.862, 2.723, 1.517, 2.077, 1.845, 2.137, 2.301, 1.5, 1.237];
    var K = [55, 66, 76, 55, 59, 61, 57, 68, 61, 61, 54, 75];
    var S = [4, 2, 5, 4, 5, 3, 7, 4, 6, 6, 3, 4];
    var W = [7, 6, 5, 4, 5, 4, 5, 5, 9, 6, 6, 6];
    var WHIP = [0.8936, 0.942, 0.7692, 0.7778, 1.0084, 0.8351, 0.7615, 0.9375, 0.8889, 0.9375, 0.8333, 0.7129];

    var maxOBP = maximum(OBP);
    var maxHR = maximum(HR);
    var maxR = maximum(R);
    var maxRBI = maximum(RBI);
    var maxSB = maximum(SB);
    var minERA = minimum(ERA);
    var maxK = maximum(K);
    var maxS = maximum(S);
    var maxW = maximum(W);
    var minWHIP = minimum(WHIP);

    var htmlCode = "<table id='MaxCategory' class='responsive'><thead>";
    htmlCode += "<th colspan='11'>2025 Maximum Category</th></thead>";
    htmlCode += "<tr><td class='colTitle'>Team Name</td><td class='colTitle'>OBP</td>";
    htmlCode += "<td class='colTitle'>HR</td><td class='colTitle'>RBI</td>";
    htmlCode += "<td class='colTitle'>SB</td><td class='colTitle'>R</td>";
    htmlCode += "<td class='colTitle'>W</td><td class='colTitle'>S</td>";
    htmlCode += "<td class='colTitle'>ERA</td><td class='colTitle'>WHIP</td>";
    htmlCode += "<td class='colTitle'>K</td></tr><tbody>";

    for (var i = 0; i < 12; i++) {
        htmlCode += "<tr><td class='team'>" + teamList[i] + "</td>";
        if (OBP[i] === maxOBP) {
            htmlCode += "<td class='pointsHL'>" + OBP[i].toFixed(4) + "</td>";
        } else {
            htmlCode += "<td class='points'>" + OBP[i].toFixed(4) + "</td>";
        }
        if (HR[i] == maxHR) {
            htmlCode += "<td class='pointsHL'>" + HR[i] + "</td>";
        } else {
            htmlCode += "<td class='points'>" + HR[i] + "</td>";
        }
        if (RBI[i] == maxRBI) {
            htmlCode += "<td class='pointsHL'>" + RBI[i] + "</td>";
        } else {
            htmlCode += "<td class='points'>" + RBI[i] + "</td>";
        }
        if (SB[i] == maxSB) {
            htmlCode += "<td class='pointsHL'>" + SB[i] + "</td>";
        } else {
            htmlCode += "<td class='points'>" + SB[i] + "</td>";
        }
        if (R[i] == maxR) {
            htmlCode += "<td class='pointsHL'>" + R[i] + "</td>";
        } else {
            htmlCode += "<td class='points'>" + R[i] + "</td>";
        }
        if (W[i] == maxW) {
            htmlCode += "<td class='pointsHL'>" + W[i] + "</td>";
        } else {
            htmlCode += "<td class='points'>" + W[i] + "</td>";
        }
        if (S[i] == maxS) {
            htmlCode += "<td class='pointsHL'>" + S[i] + "</td>";
        } else {
            htmlCode += "<td class='points'>" + S[i] + "</td>";
        }
        if (ERA[i] == minERA) {
            htmlCode += "<td class='pointsHL'>" + ERA[i].toFixed(3) + "</td>";
        } else {
            htmlCode += "<td class='points'>" + ERA[i].toFixed(3) + "</td>";
        }
        if (WHIP[i] == minWHIP) {
            htmlCode += "<td class='pointsHL'>" + WHIP[i].toFixed(4) + "</td>";
        } else {
            htmlCode += "<td class='points'>" + WHIP[i].toFixed(4) + "</td>";
        }
        if (K[i] == maxK) {
            htmlCode += "<td class='pointsHL'>" + K[i] + "</td></tr>";
        } else {
            htmlCode += "<td class='points'>" + K[i] + "</td></tr>";
        }
    }
    htmlCode += "</tbody></table>";
    htmlCode += '<br /><br /><br /><p style="font-style: italic;">Last updated: 9/1/2025</p>';
    return htmlCode;
}

function maximum(results) {
    var max = results[0];
    for (var i = 0; i < results.length; i++) {
        if (results[i] > max) {
            max = results[i];
        }
    }
    return max;
}

function minimum(results) {
    var min = results[0];
    for (var i = 0; i < results.length; i++) {
        if (results[i] < min) {
            min = results[i];
        }
    }
    return min;
}

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


function showFinish2025() {
    var teamOrderAL = ["Wichita TinMen", "Kirk's Enterprise", "Non-Zero Chance",
                       "The Blossoms", "The Patsy Killjoys", "Hradek Hrams",
                       "Banoaster Republic", "Flower Children", "The Shohei Kid",
                       "Kelly S*M*A*S*H", "David's 5 & Dime", "Jak of Diamonds"];
    var teamPointsAL = [103, 93.5, 89, 72, 72, 67.5, 59, 57, 51, 48, 34, 33.5];
    var teamOrderNL = ["A McNickle for Farm Fresh Gregs", "Wichita Sox Monkees", "Liberty Lunch",
                       "Dread Pirate Roberts", "Matty Bos", "The Cream and the Clear",
                       "Leonard Peltier's Army", "P-Funk All-Stars", "Donner Party",
                       "Blaze of Glory", "Third Encore", ''];
    var teamPointsNL = [79, 74.5, 58, 54, 50, 49.5, 49, 38, 32, 29, 9, 0];
  
    var htmlCode = "<table id='BaseballFinish' class='responsive'><thead><th colspan='5'>2025 Finish</th></thead>";
    htmlCode += "<tr><td class='colTitle'>American League</td>";
    htmlCode += "<td class='colTitle'>Points</td>";
    htmlCode += "<td class='colTitle'>Place</td>";
    htmlCode += "<td class='colTitle'>National League</td>";
    htmlCode += "<td class='colTitle'>Points</td></tr><tbody>";
  
    for (var i = 0; i < 12; i++) {
      htmlCode += "<tr><td class='team'>" + teamOrderAL[i] + "</td>";
      htmlCode += "<td class='points'>" + teamPointsAL[i].toFixed(1) + "</td>";
      htmlCode += "<td class='points'>" + (i + 1) + "</td>";
      htmlCode += "<td class='team'>" + teamOrderNL[i] + "</td>";
      htmlCode += "<td class='points'>" + teamPointsNL[i].toFixed(1) + "</td></tr>";
    }

    htmlCode += "</tbody></table>";
    htmlCode += "<p>The Blossoms wins the tie-breaker 6 - 4";

    htmlCode += "<table id='prizePair'>";
    htmlCode += "<caption>Final Prize Pair Selections</caption>";
    htmlCode += "<thead>";
    htmlCode += "<td>Prize Money</td><td>Draft Order</td><td>Owner</td>";
    htmlCode += "</thead>";
    htmlCode += "<tr><td>50%</td><td>11<sup>th</sup></td><td>Greg</td></tr>";
    htmlCode += "<tr><td>25%</td><td>10<sup>th</sup></td><td>Glenn</td></tr>";
    htmlCode += "<tr><td>15%</td><td>9<sup>th</sup></td><td>Ken</td></tr>";
    htmlCode += "<tr><td>10%</td><td>8<sup>th</sup></td><td>Doug</td></tr>";
    htmlCode += "<tr><td>$29.4</td><td>7<sup>th</sup></td><td>David</td></tr>";
    htmlCode += "<tr><td>$0</td><td>1<sup>st</sup></td><td>Matt R</td></tr>";
    htmlCode += "<tr><td>$0</td><td>2<sup>nd</sup></td><td>Matt A</td></tr>";
    htmlCode += "<tr><td>$0</td><td>3<sup>rd</sup></td><td>Jon</td></tr>";
    htmlCode += "<tr><td>$0</td><td>4<sup>th</sup></td><td>Marc</td></tr>";
    htmlCode += "<tr><td>$0</td><td>5<sup>th</sup></td><td>Rich</td></tr>";
    htmlCode += "<tr><td>$0</td><td>6<sup>th</sup></td><td>Don</td></tr>";
    htmlCode += "</table>";

    return htmlCode;
  }
