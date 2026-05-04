/**
 * Find the maximum value in an array
 * @param {number[]} results - Array of numbers
 * @returns {number} The maximum value
 */
function maximum(results) {
    var max = results[0];
    for (var i = 0; i < results.length; i++) {
        if (results[i] > max) {
            max = results[i];
        }
    }
    return max;
}

/**
 * Find the minimum value in an array
 * @param {number[]} results - Array of numbers
 * @returns {number} The minimum value
 */
function minimum(results) {
    var min = results[0];
    for (var i = 0; i < results.length; i++) {
        if (results[i] < min) {
            min = results[i];
        }
    }
    return min;
}

function maxCategory() {
    var teamList = ['Banoaster Republic', "David's 5 &amp; Dime", 'Flower Children', 'Hradek Hrams', 
                    'Jak of Diamonds', 'Kelly S*M*A*S*H', "Kirk's Enterprise", 'Non-Zero Chance',
                    'The Blossoms', 'The Patsy Killjoys', 'The Shohei Kid', 'Wichita TinMen'];

    var HR = [7.0, 8.0, 12.0, 7.0, 18.0, 4.0, 15.0, 10.0, 9.0, 9.0, 8.0, 9.0];
    var OBP = [0.3284, 0.3304, 0.3611, 0.3561, 0.3745, 0.3251, 0.3299, 0.32, 0.3321, 0.332, 0.3767, 0.3676];
    var R = [37.0, 31.0, 33.0, 34.0, 42.0, 20.0, 40.0, 36.0, 34.0, 32.0, 41.0, 38.0];
    var RBI = [33.0, 21.0, 35.0, 35.0, 46.0, 29.0, 44.0, 34.0, 38.0, 25.0, 29.0, 33.0];
    var SB = [7.0, 7.0, 5.0, 5.0, 4.0, 5.0, 9.0, 7.0, 6.0, 1.0, 10.0, 7.0];
    var ERA = [4.283, 2.777, 2.16, 2.0, 2.395, 3.405, 4.059, 3.515, 2.235, 1.562, 3.477, 2.821];
    var K = [52.0, 77.0, 63.0, 49.0, 46.0, 57.0, 56.0, 51.0, 47.0, 56.0, 56.0, 42.0];
    var S = [2.0, 0.0, 3.0, 2.0, 2.0, 4.0, 2.0, 0.0, 3.0, 4.0, 2.0, 2.0];
    var W = [4.0, 4.0, 4.0, 6.0, 4.0, 3.0, 2.0, 5.0, 3.0, 5.0, 4.0, 2.0];
    var WHIP = [1.4, 1.1143, 0.855, 1.0, 0.9194, 1.2659, 1.2157, 1.1714, 0.8483, 0.8913, 1.2273, 1.3433];

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
    htmlCode += "<th colspan='11'>2026 Maximum Category</th></thead>";
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
        if (HR[i] === maxHR) {
            htmlCode += "<td class='pointsHL'>" + HR[i] + "</td>";
        } else {
            htmlCode += "<td class='points'>" + HR[i] + "</td>";
        }
        if (RBI[i] === maxRBI) {
            htmlCode += "<td class='pointsHL'>" + RBI[i] + "</td>";
        } else {
            htmlCode += "<td class='points'>" + RBI[i] + "</td>";
        }
        if (SB[i] === maxSB) {
            htmlCode += "<td class='pointsHL'>" + SB[i] + "</td>";
        } else {
            htmlCode += "<td class='points'>" + SB[i] + "</td>";
        }
        if (R[i] === maxR) {
            htmlCode += "<td class='pointsHL'>" + R[i] + "</td>";
        } else {
            htmlCode += "<td class='points'>" + R[i] + "</td>";
        }
        if (W[i] === maxW) {
            htmlCode += "<td class='pointsHL'>" + W[i] + "</td>";
        } else {
            htmlCode += "<td class='points'>" + W[i] + "</td>";
        }
        if (S[i] === maxS) {
            htmlCode += "<td class='pointsHL'>" + S[i] + "</td>";
        } else {
            htmlCode += "<td class='points'>" + S[i] + "</td>";
        }
        if (ERA[i] === minERA) {
            htmlCode += "<td class='pointsHL'>" + ERA[i].toFixed(3) + "</td>";
        } else {
            htmlCode += "<td class='points'>" + ERA[i].toFixed(3) + "</td>";
        }
        if (WHIP[i] === minWHIP) {
            htmlCode += "<td class='pointsHL'>" + WHIP[i].toFixed(4) + "</td>";
        } else {
            htmlCode += "<td class='points'>" + WHIP[i].toFixed(4) + "</td>";
        }
        if (K[i] === maxK) {
            htmlCode += "<td class='pointsHL'>" + K[i] + "</td></tr>";
        } else {
            htmlCode += "<td class='points'>" + K[i] + "</td></tr>";
        }
    }
    htmlCode += "</tbody></table>";
    htmlCode += '<br /><br /><br /><p style="font-style: italic;">Last updated: 5/4/2026</p>';
    htmlCode += '<h1>MaxCat Change Log</h1>';
    htmlCode += '<p>League-wide category leaders after each weekly file is added.</p>';
    htmlCode += '<section class="week">';
    htmlCode += '<h2>Week 2</h2>';
    htmlCode += '<div class="week-meta">After adding 2.csv</div>';
    htmlCode += '<table>';
    htmlCode += '<thead><tr><th>Category</th><th>Previous Leader</th><th>Current Leader</th></tr></thead>';
    htmlCode += '<tbody>';
    htmlCode += '<tr><td>HR</td><td><span class="baseline">Baseline</span></td><td>The Blossoms, The Patsy Killjoys at 9</td></tr>';
    htmlCode += '<tr><td>OBP</td><td><span class="baseline">Baseline</span></td><td>Wichita TinMen at 0.3676</td></tr>';
    htmlCode += '<tr><td>R</td><td><span class="baseline">Baseline</span></td><td>Wichita TinMen at 38</td></tr>';
    htmlCode += '<tr><td>RBI</td><td><span class="baseline">Baseline</span></td><td>The Blossoms at 37</td></tr>';
    htmlCode += '<tr><td>SB</td><td><span class="baseline">Baseline</span></td><td>Kirk&#x27;s Enterprise at 9</td></tr>';
    htmlCode += '<tr><td>ERA</td><td><span class="baseline">Baseline</span></td><td>The Patsy Killjoys at 1.562</td></tr>';
    htmlCode += '<tr><td>K</td><td><span class="baseline">Baseline</span></td><td>Kirk&#x27;s Enterprise at 56</td></tr>';
    htmlCode += '<tr><td>S</td><td><span class="baseline">Baseline</span></td><td>Jak of Diamonds, Kirk&#x27;s Enterprise, The Patsy Killjoys, Wichita TinMen at 2</td></tr>';
    htmlCode += '<tr><td>W</td><td><span class="baseline">Baseline</span></td><td>The Patsy Killjoys at 5</td></tr>';
    htmlCode += '<tr><td>WHIP</td><td><span class="baseline">Baseline</span></td><td>The Blossoms at 0.8483</td></tr>';
    htmlCode += '</tbody>';
    htmlCode += '</table>';
    htmlCode += '</section>';
    htmlCode += '<section class="week">';
    htmlCode += '<h2>Week 3</h2>';
    htmlCode += '<div class="week-meta">After adding 3.csv</div>';
    htmlCode += '<table>';
    htmlCode += '<thead><tr><th>Category</th><th>Previous Leader</th><th>Current Leader</th></tr></thead>';
    htmlCode += '<tbody>';
    htmlCode += '<tr><td>HR</td><td>The Blossoms, The Patsy Killjoys at 9</td><td>Non-Zero Chance at 10</td></tr>';
    htmlCode += '<tr><td>OBP</td><td>Wichita TinMen at 0.3676</td><td>The Shohei Kid at 0.3767</td></tr>';
    htmlCode += '<tr><td>R</td><td>Wichita TinMen at 38</td><td>The Shohei Kid at 41</td></tr>';
    htmlCode += '<tr><td>RBI</td><td>The Blossoms at 37</td><td>The Blossoms at 38</td></tr>';
    htmlCode += '<tr><td>SB</td><td>Kirk&#x27;s Enterprise at 9</td><td>The Shohei Kid at 10</td></tr>';
    htmlCode += '<tr><td>K</td><td>Kirk&#x27;s Enterprise at 56</td><td>Flower Children at 63</td></tr>';
    htmlCode += '<tr><td>S</td><td>Jak of Diamonds, Kirk&#x27;s Enterprise, The Patsy Killjoys, Wichita TinMen at 2</td><td>Kelly S*M*A*S*H, The Patsy Killjoys at 4</td></tr>';
    htmlCode += '<tr><td>W</td><td>The Patsy Killjoys at 5</td><td>Hradek Hrams at 6</td></tr>';
    htmlCode += '</tbody>';
    htmlCode += '</table>';
    htmlCode += '</section>';
    htmlCode += '<section class="week">';
    htmlCode += '<h2>Week 4</h2>';
    htmlCode += '<div class="week-meta">After adding 4.csv</div>';
    htmlCode += '<table>';
    htmlCode += '<thead><tr><th>Category</th><th>Previous Leader</th><th>Current Leader</th></tr></thead>';
    htmlCode += '<tbody>';
    htmlCode += '<tr><td>HR</td><td>Non-Zero Chance at 10</td><td>Jak of Diamonds at 18</td></tr>';
    htmlCode += '<tr><td>R</td><td>The Shohei Kid at 41</td><td>Jak of Diamonds at 42</td></tr>';
    htmlCode += '<tr><td>RBI</td><td>The Blossoms at 38</td><td>Jak of Diamonds at 46</td></tr>';
    htmlCode += '<tr><td>K</td><td>Flower Children at 63</td><td>David&#x27;s 5 &amp; Dime at 77</td></tr>';
    htmlCode += '</tbody>';
    htmlCode += '</table>';
    htmlCode += '</section>';
    htmlCode += '<section class="week">';
    htmlCode += '<h2>Week 5</h2>';
    htmlCode += '<div class="week-meta">After adding 5.csv</div>';
    htmlCode += '<table>';
    htmlCode += '<thead><tr><th>Category</th><th>Previous Leader</th><th>Current Leader</th></tr></thead>';
    htmlCode += '<tbody>';
    htmlCode += '<tr><td>HR</td><td>Jak of Diamonds at 18</td><td>Jak of Diamonds, The Shohei Kid at 18</td></tr>';
    htmlCode += '<tr><td>OBP</td><td>The Shohei Kid at 0.3767</td><td>Flower Children at 0.3858</td></tr>';
    htmlCode += '<tr><td>R</td><td>Jak of Diamonds at 42</td><td>Hradek Hrams at 50</td></tr>';
    htmlCode += '<tr><td>S</td><td>Kelly S*M*A*S*H, The Patsy Killjoys at 4</td><td>Flower Children, Kelly S*M*A*S*H, The Patsy Killjoys at 4</td></tr>';
    htmlCode += '<tr><td>W</td><td>Hradek Hrams at 6</td><td>Hradek Hrams, Non-Zero Chance at 6</td></tr>';
    htmlCode += '</tbody>';
    htmlCode += '</table>';
    htmlCode += '</section>';
    htmlCode += '<section class="week">';
    htmlCode += '<h2>Week 6</h2>';
    htmlCode += '<div class="week-meta">After adding 6.csv</div>';
    htmlCode += '<table>';
    htmlCode += '<thead><tr><th>Category</th><th>Previous Leader</th><th>Current Leader</th></tr></thead>';
    htmlCode += '<tbody>';
    htmlCode += '<tr><td>ERA</td><td>The Patsy Killjoys at 1.562</td><td>Wichita TinMen at 1.452</td></tr>';
    htmlCode += '</tbody>';
    htmlCode += '</table>';
    htmlCode += '</section>';
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
    htmlCode += "<p>The Blossoms wins the tie-breaker 6 - 4</p>";

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
