function showFinish2024() {
    var teamOrderAL = ["The Shohei Kid", "Kirk's Enterprise", "Wichita TinMen",
                       "Jak of Diamonds", "Banoaster Republic", "Flower Children",
                       "David's 5 & Dime", "Hradek Hrams", "The Patsy Killjoys",
                       "The Blossoms", "Non-Zero Chance", "Kelly S*M*A*S*H"];
    var teamPointsAL = [105, 99, 87, 77, 69, 68, 58, 56, 43, 41, 40, 37];
    var teamOrderNL = ["Matty Bos", "A McNickle for Farm Fresh Gregs", "Wichita Sox Monkees",
                       "Leonard Peltier's Army", "Donner Party", "P-Funk All-Stars",
                       "Dread Pirate Roberts", "Seattle Stackers", "Liberty Lunch",
                       "The Cream and the Clear", "Gobekli Tepe Fluffy Bunnies", ''];
    var teamPointsNL = [78, 73.5, 66, 61, 49.5, 41.5, 39.5, 37.5, 31, 24, 20.5, 0];
  
    var htmlCode = "<table id='BaseballFinish' class='responsive'><thead><th colspan='5'>2024 Finish</th></thead>";
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
  
    htmlCode += "<table id='prizePair'>";
    htmlCode += "<caption>Final Prize Pair Selections</caption>";
    htmlCode += "<thead>";
    htmlCode += "<td>Prize Money</td><td>Draft Order</td><td>Owner</td>";
    htmlCode += "</thead>";
    htmlCode += "<tr><td>50%</td><td>11<sup>th</sup></td><td>Matty Bos</td></tr>";
    htmlCode += "<tr><td>25%</td><td>10<sup>th</sup></td><td>A McNickle for Farm Fresh Gregs</td></tr>";
    htmlCode += "<tr><td>15%</td><td>9<sup>th</sup></td><td>Wichita Sox Monkees</td></tr>";
    htmlCode += "<tr><td>10%</td><td>8<sup>th</sup></td><td>Seattle Stackers</td></tr>";
    htmlCode += "<tr><td>$29.4</td><td>7<sup>th</sup></td><td>Liberty Lunch</td></tr>";
    htmlCode += "<tr><td>$0</td><td>1<sup>st</sup></td><td>Leonard Peltier's Army</td></tr>";
    htmlCode += "<tr><td>$0</td><td>2<sup>nd</sup></td><td>Donner Party</td></tr>";
    htmlCode += "<tr><td>$0</td><td>3<sup>rd</sup></td><td>P-Funk All-Stars</td></tr>";
    htmlCode += "<tr><td>$0</td><td>4<sup>th</sup></td><td>Dread Pirate Roberts</td></tr>";
    htmlCode += "<tr><td>$0</td><td>5<sup>th</sup></td><td>The Cream and the Clear</td></tr>";
    htmlCode += "<tr><td>$0</td><td>6<sup>th</sup></td><td>Gobekli Tepe Fluffy Bunnies</td></tr>";
    htmlCode += "</table>";

    return htmlCode;
  }
  
function showFinish2023() {
    var teamOrderAL = ["Banoaster Republic", "Flower Children", "Wichita TinMen",
                       "David's 5 & Dime", "The Patsy Killjoys", "Hradek Hrams",
                       "The Blossoms", "Jak of Diamonds", "Kirk's Enterprise",
                       "Kelly S*M*A*S*H", "The Shohei Kid", "TBA"];
    var teamPointsAL = [102, 91, 88.5, 86, 78, 57, 51.5, 50, 49, 45, 41, 41];
    var teamOrderNL = ["Wichita Sox Monkees", "Matty Bos", "Leonard Peltier's Army",
                       "Donner Party", "Dread Pirate Roberts", "Seattle Stackers",
                       "P-Funk All-Stars", "A McNickle for Farm Fresh Gregs", "Liberty Lunch",
                       "The Cream and the Clear", "NWA Redbirds", ''];
    var teamPointsNL = [72, 71, 61, 58, 54, 53, 46, 36, 30, 26, 11, 0];
  
    var htmlCode = "<table id='BaseballFinish' class='responsive'><thead><th colspan='5'>2023 Finish</th></thead>";
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
    htmlCode += "<p>The Shohei Kid wins the tie-breaker 8,292 - 7,829";

    htmlCode += "<table id='prizePair'>";
    htmlCode += "<caption>Final Prize Pair Selections</caption>";
    htmlCode += "<thead>";
    htmlCode += "<td>Prize Money</td><td>Draft Order</td><td>Owner</td>";
    htmlCode += "</thead>";
    htmlCode += "<tr><td>50%</td><td>11<sup>th</sup></td><td>Glenn</td></tr>";
    htmlCode += "<tr><td>25%</td><td>10<sup>th</sup></td><td>Rich</td></tr>";
    htmlCode += "<tr><td>15%</td><td>9<sup>th</sup></td><td>Matt R</td></tr>";
    htmlCode += "<tr><td>10%</td><td>8<sup>th</sup></td><td>David</td></tr>";
    htmlCode += "<tr><td>$29.4</td><td>7<sup>th</sup></td><td>Doug</td></tr>";
    htmlCode += "<tr><td>$0</td><td>1<sup>st</sup></td><td>Matt A</td></tr>";
    htmlCode += "<tr><td>$0</td><td>2<sup>nd</sup></td><td>Jon</td></tr>";
    htmlCode += "<tr><td>$0</td><td>3<sup>rd</sup></td><td>Marc</td></tr>";
    htmlCode += "<tr><td>$0</td><td>4<sup>th</sup></td><td>Greg</td></tr>";
    htmlCode += "<tr><td>$0</td><td>5<sup>th</sup></td><td>Ken</td></tr>";
    htmlCode += "<tr><td>$0</td><td>6<sup>th</sup></td><td>Tom</td></tr>";
    htmlCode += "</table>";

    return htmlCode;
  }
  
function ALFaab2019() {
    var teamList = ["Banoaster Republic", "Flower Children", "Hradek Hrams", "Jak of Diamonds", "Kelly S*M*A*S*H", "Kirk's Enterprise", "David's 5 & Dime", "The Blossoms", "The Patsy Killjoys", "changin' names", "Wichita TinMen", "The Shohei Kid"];

    var balance = [99, 76, 5, 100, 36, 22, 22, 0, 3, 101, 0, 0];

    htmlCode = '<table class="responsive"><thead><th colspan="2">2019 American League FAAB Balances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Balance</td></tr>';

    for (i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + balance[i].toFixed(2) + '</td><tr>';
    }

    htmlCode += '</table>';

    htmlCode += '<br /><form><select name="team" onchange="showTeam(this.value, \'AL\')">';
    htmlCode += '<option value="">Select a team:</option>';
    htmlCode += '<option value="Banoaster Republic">Banoaster Republic</option>';
    htmlCode += '<option value="Flower Children">Flower Children</option>';
    htmlCode += '<option value="Hradek Hrams">Hradek Hrams</option>';
    htmlCode += '<option value="Jak of Diamonds">Jak of Diamonds</option>';
    htmlCode += '<option value="Kelly S*M*A*S*H">Kelly S*M*A*S*H</option>';
    htmlCode += '<option value="Kirks Enterprise">Kirk&apos;s Enterprise</option>';
    htmlCode += '<option value="Davids 5 Dime">David&apos;s 5 & Dime</option>';
    htmlCode += '<option value="The Blossoms">The Blossoms</option>';
    htmlCode += '<option value="The Patsy Killjoys">The Patsy Killjoys</option>';
    htmlCode += '<option value="changin names">changin&apos; names</option>';
    htmlCode += '<option value="Wichita TinMen">Wichita TinMen</option>';
    htmlCode += '<option value="The Shohei Kid">The Shohei Kid</option>';
    htmlCode += '</select></form>';

    return htmlCode;

}

function NLFaab2019() {
    var teamList = ["A McNickle for Farm Fresh Gregs", "Cheeseburgers in Paradise", "Donner Party", "Leonard Peltier's Army", "Liberty Lunch", "Matty Bos", "Sons of Pitches", "The Cream and the Clear", "Seattle Stackers", "Wichita Sox Monkees"];

    var balance = [1, 12, 0, 24, 22, 13, 100, 91, 0, 9];

    htmlCode = '<table class="responsive"><thead><th colspan="2">2019 National League FAAB Balances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Balance</td></tr>';

    for (i = 0; i < 10; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + balance[i].toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';

    htmlCode += '<br /><form><select name="team" onchange="showTeam(this.value, \'NL\')">';
    htmlCode += '<option value="">Select a team:</option>';
    htmlCode += '<option value="A McNickle for Farm Fresh Gregs">A McNickle for Farm Fresh Gregs</option>';
    htmlCode += '<option value="Cheeseburgers in Paradise">Cheeseburgers in Paradise</option>';
    htmlCode += '<option value="Donner Party">Donner Party</option>';
    htmlCode += '<option value="Leonard Peltiers Army">Leonard Peltier&apos;s Army</option>';
    htmlCode += '<option value="Liberty Lunch">Liberty Lunch</option>';
    htmlCode += '<option value="Matty Bos">Matty Bos</option>';
    htmlCode += '<option value="Sons of Pitches">Sons of Pitches</option>';
    htmlCode += '<option value="The Cream and The Clear">The Cream and The Clear</option>';
    htmlCode += '<option value="Seattle Stackers">Seattle Stackers</option>';
    htmlCode += '<option value="Wichita SoxMonkees">Wichita SoxMonkees</option>';
    htmlCode += '</select></form>';

    return htmlCode;
}

function maxCategory2023() {
    var teamList = ['Banoaster Republic', "David's 5 &amp; Dime", 'Flower Children', 'Hradek Hrams', 
                    'Jak of Diamonds', 'Kelly S*M*A*S*H', "Kirk's Enterprise", 'The Blossoms',
                    'The Patsy Killjoys', 'The Shohei Kid', 'Wichita TinMen', 'TBA'];

    var BA = [0.3089, 0.3173, 0.3116, 0.2882, 0.2808, 0.3141, 0.2994, 0.3073, 0.2887, 0.2857, 0.3102, 0.3254];
    var HR = [15.0, 17.0, 12.0, 17.0, 14.0, 14.0, 15.0, 13.0, 12.0, 14.0, 19.0, 12.0];
    var R = [50.0, 44.0, 59.0, 43.0, 47.0, 44.0, 42.0, 36.0, 40.0, 37.0, 52.0, 50.0];
    var RBI = [49.0, 44.0, 36.0, 45.0, 45.0, 42.0, 39.0, 42.0, 42.0, 50.0, 49.0, 53.0];
    var SB = [11.0, 5.0, 13.0, 12.0, 15.0, 6.0, 10.0, 13.0, 8.0, 8.0, 11.0, 10.0];
    var ERA = [2.443, 2.211, 2.126, 1.7309999999999999, 2.779, 2.286, 1.3730000000000002, 1.869, 1.629, 2.339, 2.7, 0.48200000000000004];
    var K = [74.0, 72.0, 65.0, 49.0, 52.0, 65.0, 50.0, 77.0, 56.0, 54.0, 69.0, 55.0];
    var S = [5.0, 1.0, 7.0, 5.0, 5.0, 5.0, 5.0, 0.0, 8.0, 3.0, 5.0, 2.0];
    var W = [7.0, 8.0, 6.0, 5.0, 4.0, 7.0, 4.0, 6.0, 6.0, 5.0, 5.0, 3.0];
    var WHIP = [0.9574, 0.8503, 0.9268, 0.75, 1.0368, 0.9206, 0.7119, 0.9569, 1.0192, 0.9517, 1.0105, 0.75];

    var maxBA = maximum(BA);
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
    htmlCode += "<th colspan='11'>2023 Maximum Category</th></thead>";
    htmlCode += "<tr><td class='colTitle'>Team Name</td><td class='colTitle'>BA</td>";
    htmlCode += "<td class='colTitle'>HR</td><td class='colTitle'>RBI</td>";
    htmlCode += "<td class='colTitle'>SB</td><td class='colTitle'>R</td>";
    htmlCode += "<td class='colTitle'>W</td><td class='colTitle'>S</td>";
    htmlCode += "<td class='colTitle'>ERA</td><td class='colTitle'>WHIP</td>";
    htmlCode += "<td class='colTitle'>K</td></tr><tbody>";

    for (var i = 0; i < 12; i++) {
        htmlCode += "<tr><td class='team'>" + teamList[i] + "</td>";
        if (BA[i] == maxBA) {
            htmlCode += "<td class='pointsHL'>" + BA[i].toFixed(4) + "</td>";
        } else {
            htmlCode += "<td class='points'>" + BA[i].toFixed(4) + "</td>";
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
    htmlCode += '<br /><br /><br /><p style="font-style: italic;">Last updated: 9/4/2023</p>';
    return htmlCode;
}

function maxCategory2024() {
    var teamList = ['Banoaster Republic', "David's 5 &amp; Dime", 'Flower Children', 'Hradek Hrams', 
                    'Jak of Diamonds', 'Kelly S*M*A*S*H', "Kirk's Enterprise", 'Non-Zero Chance',
                    'The Blossoms', 'The Patsy Killjoys', 'The Shohei Kid', 'Wichita TinMen'];

    var BA = [0.3238, 0.2763, 0.2796, 0.3043, 0.3214, 0.2684, 0.3217, 0.2947, 0.2821, 0.2899, 0.2918, 0.3022];
    var HR = [18.0, 11.0, 12.0, 18.0, 12.0, 14.0, 16.0, 15.0, 13.0, 9.0, 18.0, 15.0];
    var R = [47.0, 36.0, 36.0, 55.0, 50.0, 39.0, 50.0, 41.0, 36.0, 40.0, 52.0, 45.0];
    var RBI = [49.0, 33.0, 40.0, 52.0, 41.0, 39.0, 52.0, 45.0, 46.0, 34.0, 46.0, 47.0];
    var SB = [9.0, 9.0, 11.0, 10.0, 12.0, 7.0, 11.0, 9.0, 6.0, 12.0, 14.0, 16.0];
    var ERA = [1.434, 2.143, 1.364, 1.473, 1.488, 1.756, 1.766, 1.378, 1.742, 2.0, 1.339, 1.856];
    var K = [54.0, 80.0, 88.0, 29.0, 67.0, 60.0, 67.0, 54.0, 66.0, 51.0, 64.0, 73.0];
    var S = [3.0, 1.0, 4.0, 3.0, 3.0, 4.0, 6.0, 5.0, 1.0, 3.0, 6.0, 6.0];
    var W = [5.0, 6.0, 5.0, 2.0, 8.0, 4.0, 6.0, 6.0, 7.0, 6.0, 6.0, 9.0];
    var WHIP = [0.8882, 0.9091, 0.8494, 0.7031, 0.7282, 0.7632, 0.7869, 0.8348, 0.8871, 0.9444, 0.719, 0.8321];
                                                                                                                                            
    var maxBA = maximum(BA);
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
    htmlCode += "<th colspan='11'>2024 Maximum Category</th></thead>";
    htmlCode += "<tr><td class='colTitle'>Team Name</td><td class='colTitle'>BA</td>";
    htmlCode += "<td class='colTitle'>HR</td><td class='colTitle'>RBI</td>";
    htmlCode += "<td class='colTitle'>SB</td><td class='colTitle'>R</td>";
    htmlCode += "<td class='colTitle'>W</td><td class='colTitle'>S</td>";
    htmlCode += "<td class='colTitle'>ERA</td><td class='colTitle'>WHIP</td>";
    htmlCode += "<td class='colTitle'>K</td></tr><tbody>";

    for (var i = 0; i < 12; i++) {
        htmlCode += "<tr><td class='team'>" + teamList[i] + "</td>";
        if (BA[i] == maxBA) {
            htmlCode += "<td class='pointsHL'>" + BA[i].toFixed(4) + "</td>";
        } else {
            htmlCode += "<td class='points'>" + BA[i].toFixed(4) + "</td>";
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
    htmlCode += '<br /><br /><br /><p style="font-style: italic;">Last updated: 9/10/2024</p>';
    return htmlCode;
}

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
        if (OBP[i] == maxOBP) {
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

    htmlCode = '<table class="responsive"><thead><th colspan="5">2023 American League Minors Roster Draft (Ordered)</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">Round 1</td><td class="colTitle">Round 2</td><td class="colTitle">Round 3</td><td class="colTitle">Round 4</td></tr>';

    for (i = 0; i <12; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 0; j < 4; j++) {
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

    htmlCode = '<table class="responsive"><thead><th colspan="8">2023 American League Reserves Roster Draft (Ordered)</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">Round 1</td><td class="colTitle">Round 2</td><td class="colTitle">Round 3</td><td class="colTitle">Round 4</td><td class="colTitle">Round 5</td><td class="colTitle">Round 6</td><td class="colTitle">Round 7</td></tr>';

    for (i = 0; i <12; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 0; j < 7; j++) {
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
     htmlCode = '<table class="responsive"><thead><th colspan="5">2023 Ordered National League FYPD</th></thead>';
     htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">FYPD Round 1</td><td class="colTitle">FYPD Round 2</td><td class="colTitle">FYPD Round 3</td><td class="colTitle">FYPD Round 4</td>';

    // Round 1 through 4
    for (i = 0; i < 11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 0; j < 4; j++) {
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

    for (i = 0; i < 11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 4; j < 11; j++) {
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

    for (i = 0; i <11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 11; j < 15; j++) {
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

    htmlCode = '<table class="responsive"><thead><th colspan="5">2024 American League Minors Roster Draft (Ordered)</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">Round 1</td><td class="colTitle">Round 2</td><td class="colTitle">Round 3</td><td class="colTitle">Round 4</td></tr>';

    for (i = 0; i <12; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 0; j < 4; j++) {
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

    htmlCode = '<table class="responsive"><thead><th colspan="8">2024 American League Reserves Roster Draft (Ordered)</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">Round 1</td><td class="colTitle">Round 2</td><td class="colTitle">Round 3</td><td class="colTitle">Round 4</td><td class="colTitle">Round 5</td><td class="colTitle">Round 6</td><td class="colTitle">Round 7</td></tr>';

    for (i = 0; i <12; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 0; j < 7; j++) {
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
     htmlCode = '<table class="responsive"><thead><th colspan="5">2024 Ordered National League FYPD</th></thead>';
     htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">FYPD Round 1</td><td class="colTitle">FYPD Round 2</td><td class="colTitle">FYPD Round 3</td><td class="colTitle">FYPD Round 4</td>';

    // Round 1 through 4
    for (i = 0; i < 11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 0; j < 4; j++) {
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

    for (i = 0; i < 11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 4; j < 11; j++) {
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

    for (i = 0; i <11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 11; j < 15; j++) {
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

    htmlCode = '<table class="responsive"><thead><th colspan="5">2025 American League Minors Roster Draft (Ordered)</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">Round 1</td><td class="colTitle">Round 2</td><td class="colTitle">Round 3</td><td class="colTitle">Round 4</td></tr>';

    for (i = 0; i <12; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 0; j < 4; j++) {
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

    htmlCode = '<table class="responsive"><thead><th colspan="8">2025 American League Reserves Roster Draft (Ordered)</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">Round 1</td><td class="colTitle">Round 2</td><td class="colTitle">Round 3</td><td class="colTitle">Round 4</td><td class="colTitle">Round 5</td><td class="colTitle">Round 6</td><td class="colTitle">Round 7</td></tr>';

    for (i = 0; i <12; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 0; j < 7; j++) {
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
     htmlCode = '<table class="responsive"><thead><th colspan="5">2025 Ordered National League FYPD</th></thead>';
     htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">FYPD Round 1</td><td class="colTitle">FYPD Round 2</td><td class="colTitle">FYPD Round 3</td><td class="colTitle">FYPD Round 4</td>';

    // Round 1 through 4
    for (i = 0; i < 11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 0; j < 4; j++) {
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

    for (i = 0; i < 11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 4; j < 11; j++) {
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

    for (i = 0; i <11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 11; j < 15; j++) {
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

function ALMinors26() {
    var pick = [];
    var superScript = [];
    // first round
    pick.push("Glenn", "Jeremy", "Jordan", 
              "Chris", "Jordan", "Greg", 
              "Rich", "Kelly", "Brent", 
              "Jon", "Brent", "Marty");
    superScript.push("0","0","3",
                     "0","0","2 and 9",
                     "0","0","1",
                     "0","0","4");

    // second round
    pick.push("Glenn", "Jeremy", "Kelly", 
              "Chris", "Jeremy", "David M", 
              "Rich", "Kelly", "Marty", 
              "Jeremy", "Brent", "Brent");
    superScript.push("0","0","7",
                     "0","6","0",
                     "0","0","0",
                     "8","0","5");

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
    pick.push("Glenn", "Jordan", "Greg", 
              "Chris", "Jordan", "David M", 
              "Rich", "Kelly", "Marty", 
              "Jon", "Brent", "Randall");
    superScript.push("0","6","0",
                     "0","0","0",
                     "0","0","0",
                     "0","0","0");

    htmlCode = '<table class="responsive"><thead><th colspan="5">2026 American League Minors Roster Draft (Unordered)</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">Round 1</td><td class="colTitle">Round 2</td><td class="colTitle">Round 3</td><td class="colTitle">Round 4</td></tr>';

    for (i = 0; i <12; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 0; j < 4; j++) {
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
    htmlCode += '</ol>';
    return htmlCode;
}

function ALReserves26() {
    var pick = [];
    var superScript = [];
    // first round
    pick.push("Rich", "David", "Brent", "Jon", "Marty", "Chris",
              "Kelly", "Jordan", "Jeremy", "Glenn", "Randall", "Greg");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","0","0");
    
    // second round
    pick.push("Rich", "David", "Brent", "Jon", "Marty", "Chris",
             "Kelly", "Jordan", "Jeremy", "Glenn", "Greg", "Greg");
    superScript.push("0","0","0","0","0","0",
                     "0","0","0","0","2","0");
    
    // third round
    pick.push("Rich", "David", "Brent", "Jon", "Marty", "Greg",
              "Kelly", "Jordan", "Jeremy", "Glenn", "Randall", "Greg");
    superScript.push("0","0","0","0","0","1",
                     "0","0","0","0","0","0");
    
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

    htmlCode = '<table class="responsive"><thead><th colspan="8">2026 American League Reserves Roster Draft (Un-Ordered)</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">Round 1</td><td class="colTitle">Round 2</td><td class="colTitle">Round 3</td><td class="colTitle">Round 4</td><td class="colTitle">Round 5</td><td class="colTitle">Round 6</td><td class="colTitle">Round 7</td></tr>';

    for (i = 0; i <12; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 0; j < 7; j++) {
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
    // htmlCode += '<br /><h3>Trade Details</h3>';
    // htmlCode += '<ol>';
    // 1
    htmlCode += "<li>7/4/2025: <strong>Greg</strong> trades <em>Ramon Laureano</em> ";
    htmlCode += "to <strong>Chris</strong> for a 3rd round 2026 reserve pick.</li>";
    // 2
    htmlCode += "<li>8/24/2025: <strong>Greg</strong> trades <em>Ryan Mountcastle</em> to ";
    htmlCode += "<strong>Randall</strong> for <em>Joe Boyle</em> and a 2nd round 2026 reserve pick.</li>";
    // htmlCode += '</ol>';
    return htmlCode;
}

function NLReserves26() {
    var pick = [];
    var superScript = [];
    // FYPD first round
    pick.push("Jon", "Rich", "Marc", 
        "Matt R", "Doug", "Jeffrey", 
        "Ken", "David",
        "Glenn", "Rich", "Matt A");
    superScript.push("0","0","0",
               "0","0","0",
               "0","0",
               "0","2","0");

    // FYPD second round
    pick.push("Jon", "Rich", "Marc", 
        "Matt R", "Doug", "Jeffrey", 
        "Ken", "David",
        "Glenn", "Greg", "Jon");
    superScript.push("0","0","0",
               "0","0","0",
               "0","0",
               "0","0","1");

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
              "Glenn", "Rich", "Matt A");
    superScript.push("0","0","0",
                 "0","0","0",
                 "0","0",
                 "0","2","0");

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
     htmlCode = '<table class="responsive"><thead><th colspan="5">2026 Un-ordered National League FYPD</th></thead>';
     htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">FYPD Round 1</td><td class="colTitle">FYPD Round 2</td><td class="colTitle">FYPD Round 3</td><td class="colTitle">FYPD Round 4</td>';

    // Round 1 through 4
    for (i = 0; i < 11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 0; j < 4; j++) {
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

    for (i = 0; i < 11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 4; j < 11; j++) {
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

    for (i = 0; i <11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 11; j < 15; j++) {
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
    htmlCode += '<li>3/19/2025: <strong>Jon</strong> trades <em>Dedniel Nunez</em> ';
    htmlCode += 'to <strong>Matt A</strong> for a 2nd round pick in the 2026 FYPD.</li>';
    // 2
    htmlCode += "<li>8/17/2025: <strong>Rich</strong> trades <em>Ivan Herrera</em> and ";
    htmlCode += "<em>Francisco Lindor</em> to <strong>Greg</strong> for <em>Cristian Mena</em>, ";
    htmlCode += "<em>Robert Hassell</em>, <em>Josh Bell</em>, a 1st round 2026 FYPD pick, and ";
    htmlCode += "a 1st round 2026 reserve roster pick.</li>";
    htmlCode += '</ol>';
    return htmlCode;

}


function ALMinors27() {
    var pick = [];
    var superScript = [];
    // first round
    pick.push("Glenn", "Jeremy", "Greg", 
              "Chris", "Jordan", "Brent", 
              "Rich", "Kelly", "Rich", 
              "Greg", "Brent", "Greg");
    superScript.push("0","0","0",
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

    htmlCode = '<table class="responsive"><thead><th colspan="5">2027 American League Minors Roster Draft (Unordered)</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">Round 1</td><td class="colTitle">Round 2</td><td class="colTitle">Round 3</td><td class="colTitle">Round 4</td></tr>';

    for (i = 0; i <12; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 0; j < 4; j++) {
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

    htmlCode = '<table class="responsive"><thead><th colspan="8">2027 American League Reserves Roster Draft (Un-Ordered)</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">Round 1</td><td class="colTitle">Round 2</td><td class="colTitle">Round 3</td><td class="colTitle">Round 4</td><td class="colTitle">Round 5</td><td class="colTitle">Round 6</td><td class="colTitle">Round 7</td></tr>';

    for (i = 0; i <12; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 0; j < 7; j++) {
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
        "Ken", "David",
        "Glenn", "Jon", "Matt A");
    superScript.push("0","0","0",
               "0","0","0",
               "0","0",
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
     htmlCode = '<table class="responsive"><thead><th colspan="5">2027 Un-ordered National League FYPD</th></thead>';
     htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">FYPD Round 1</td><td class="colTitle">FYPD Round 2</td><td class="colTitle">FYPD Round 3</td><td class="colTitle">FYPD Round 4</td>';

    // Round 1 through 4
    for (i = 0; i < 11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 0; j < 4; j++) {
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

    for (i = 0; i < 11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 4; j < 11; j++) {
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

    for (i = 0; i <11; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 11; j < 15; j++) {
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
    htmlCode += '</ol>';
    return htmlCode;

}

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

    htmlCode = '<table class="responsive"><thead><th colspan="5">2028 American League Minors Roster Draft (Unordered)</th></thead>';
    htmlCode += '<tr><td class="colTitle">Slot</td><td class="colTitle">Round 1</td><td class="colTitle">Round 2</td><td class="colTitle">Round 3</td><td class="colTitle">Round 4</td></tr>';

    for (i = 0; i <12; i++) {
        htmlCode += '<tr><td class="points">';
        htmlCode += (i + 1).toString();
        htmlCode += '</td>';
        for (j = 0; j < 4; j++) {
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

function ALFinances() {
    //construct the JS shell to hold the finance data
    // repeat the code for 2024
    var teamList = ["Banoaster Republic", "David's 5 & Dime", "Flower Children",
                    "Hradek Hrams", "Jak of Diamonds", "Kelly S*M*A*S*H", 
                    "Kirk's Enterprise", "Non-Zero Chance", "The Blossoms",
                    "The Patsy Killjoys", "The Shohei Kid", "Wichita TinMen"];

    var beginning = [59.44, 99.81, 214.07,
                     -36.47, -52.57, 0,
                     1257.51, 0, 22.87,
                     277.7, 573.79, 449.94];

    var paid = [0, 0, 0, 
                0, 0, 0, 
                0, 0, 0, 
                0, 0, 0];

    var draft = [-27.1, -26.5, -27.1,
                 -27.0, -27.1, -27.1, 
                 -26.9, -25.2, -27.0, 
                 -27.1, -25.8, -27.1];

    var expenses = [-51.9, -54.2, -76.1, 
                    -50.2, -77.2, -71.5,
                    -181.8, -81.1, -67.6, 
                    -59.7, -194.5, -122.9];

    var winnings = [27.1, 0, 0,
                    0, 138.26, 0,
                    345.65, 0, 0,
                    0, 691.3, 207.39];

    var payment = [0, 0, 0, 
                   0, 0, 0, 
                   0, 106.3, 0, 
                   0, 0, 0];
    htmlCode = '<table class="responsive"><thead><th colspan="8">2024 American League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';
    htmlCode += "<br />";

    // repeat the code for 2023
    var teamList = ["Banoaster Republic", "David's 5 & Dime", "Flower Children",
                    "Hradek Hrams", "Jak of Diamonds", "Kelly S*M*A*S*H", 
                    "Kirk's Enterprise", "TBA", "The Blossoms",
                    "The Patsy Killjoys", "The Shohei Kid", "Wichita TinMen"];

    var beginning = [-457.61, 93.98, -37.51,
                     111.73, 11.13, 0,
                     1367.51, 0, 21.67,
                     473.3, 668.69, 378.09];

    var paid = [0, 0, 0, 
                0, 0, 0, 
                0, 0, 90, 
                0, 0, 0];

    var draft = [-26.4, -26.9, -27.1,
                 -26.5, -27.1, -27.1, 
                 -26.3, -27.1, -27.1, 
                 -27.1, -24.9, -27.1];

    var expenses = [-157.7, -107.5, -71.9, 
                    -121.7, -63.7, -80.9,
                    -83.7, -10, -61.7, 
                    -168.5, -70, -111.4];

    var winnings = [701.15, 140.23, 350.58,
                    0, 27.1, 0,
                    0, 0, 0,
                    0, 0, 210.35];

    var payment = [0, 0, 0, 
                   0, 0, 108, 
                   0, 0, 0, 
                   0, 0, 0];
    htmlCode += '<table class="responsive"><thead><th colspan="8">2023 American League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';
    htmlCode += "<br />";

    // repeat the code for 2022
    var teamList = ["Banoaster Republic", "David's 5 & Dime", "Flower Children",
                    "Hradek Hrams", "Jak of Diamonds", "Kelly S*M*A*S*H", 
                    "Kirk's Enterprise", "Multiverse of Mondesi", "The Blossoms",
                    "The Patsy Killjoys", "The Shohei Kid", "Wichita TinMen"];

    var beginning = [-503.03, 0, -253.91,
                     71.63, 67.13, 91.26,
                     1474.11, 0, -39.53,
                     593.6, 821.59, 173.79];

    var paid = [0, 0, 0, 
                0, 0, 0, 
                0, 0, 150, 
                0, 0, 0];

    var draft = [-27.1, -26.7, -27.1,
                 -27, -27.1, -26.9, 
                 -27.1, -25.8, -27.1, 
                 -27, -27.1, -27.1];

    var expenses = [-60.6, -79, -89.3, 
                    -132.9, -56, -78.4,
                    -79.5, -44.5, -61.7, 
                    -93.3, -125.8, -134.2];

    var winnings = [133.12, 199.68, 332.8,
                    0, 27.1, 0,
                    0, 0, 0,
                    0, 0, 665.6];

    var payment = [0, 0, 0, 
                   200, 0, 14.04, 
                   0, 70.3, 0, 
                   0, 0, -300];
    htmlCode += '<table class="responsive"><thead><th colspan="8">2022 American League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';
    htmlCode += "<br />";

    // repeat the code for 2021
    var teamList = ["Banoaster Republic", "Covid relief pitchers", "David's 5 & Dime",
                    "Flower Children", "Hradek Hrams", "Jak of Diamonds",
                    "Kelly S*M*A*S*H", "Kirk's Enterprise", "The Blossoms",
                    "The Patsy Killjoys", "The Shohei Kid", "Wichita TinMen"];

    var beginning = [-441.23, -236.80, -121.43,
                     -293.36, 247.53, 0,
                     209.86, 954.86, 59.07,
                     398.12, 893.69, 327.39];

    var paid = [0, 0, 0, 
                0, 0, 0, 
                0, 0, 0, 
                0, 0, 0];

    var draft = [-27.1, -27.1, -27.1, -27.1, -27.1, -27.1, -27.1, -27.1, -27.1, -27.1, -27.1, -27.1];

    var expenses = [-34.7, -26.5, -60, -79.8, -148.8, -125.3,
                    -91.5, -185.4, -71.5, -143.3, -45, -153.7];

    var winnings = [0, 0, 0,
                    146.35, 0, 219.53,
                    0, 731.75, 0,
                    365.88, 0, 27.1];

    var payment = [0, 290.4, 208.53, 
                   0, 0, 0, 
                   0, 0, 0, 
                   0, 0, 0];
    htmlCode += '<table class="responsive"><thead><th colspan="8">2021 American League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';
    htmlCode += "<br />";

    // repeat the code for 2019
    var teamList = ["Banoaster Republic", "Flower Children", "Hradek Hrams", "Jak of Diamonds",
                    "Kelly S*M*A*S*H", "Kirk's Enterprise", "Hakuna Moncada", "David's 5 & Dime",
                    "howlin for Yu", "The Blossoms", "The Patsy Killjoys", "Wichita TinMen"];

    var beginning = [-395.83, -219.76, 310.53, -119.45, 180.1, 1090.66, 820.59, -41.03,
                     -199.6, 147.77, -66.08, 302.75];

    var paid = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var draft = [-26.7, -26.7, -26.9, -27, -27, -27, -27, -26.8, -26.7, -27, -26.6, -27];

    var expenses = [-18.7, -46.9, -36.1, -40.6, -77.4, -108.8, -235.3, -53.6,
                    -10.5, -88.8, -180, -149.6];

    var winnings = [0, 0, 0, 0, 134.16, 0, 335.4, 0, 0, 27.1, 670.8, 201.24];

    var payment = [0, 0, 0, 187.05, 0, 0, 0, 0, 0, 0, 0, 0];

    htmlCode += '<table class="responsive"><thead><th colspan="8">2019 American League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';

    // repeat the code for 2018
    var teamList = ["Banoaster Republic", "Flower Children", "Hradek Hrams", "Jak of Diamonds",
                    "Kelly S*M*A*S*H", "Kirk's Enterprise", "Hakuna Moncada", "David's 5 & Dime",
                    "howlin for Yu", "The Blossoms", "The Patsy Killjoys", "Wichita TinMen"];

    var beginning = [-325.23, -133.96, 302.6, -47.35, -28.4, 959.53, 469.84, -238.8, -155.5, 66.67, 7.62, 384.05];

    var paid = [0, 0, 0, 0, 0, 0, 0, 238.8, 0, 0, 0, 0];

    var draft = [-26.5, -27.1, -27.1, -27.1, -27.1, -27.1, -27.1, -27.1, -27.1, -27.1, -27.1, -26.9];

    var expenses = [-44.1, -58.7, -86.9, -45, -64.4, -146.6, -231.8, -48.9, -17, -74.7, -73.7, -54.4];

    var winnings = [0, 0, 121.93, 0, 0, 304.83, 609.65, 0, 0, 182.9, 27.1, 0];

    var payment = [0, 0, 0, 0, 300, 0, 0, 0, 0, 0, 0, 0];
    htmlCode += "<br />";
    htmlCode += '<table class="responsive"><thead><th colspan="8">2018 American League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';

    // this is the code for 2017
    var teamList = ["Banoaster Republic", "Flower Children", "Hradek Hrams", "Jak of Diamonds", "Kelly S*M*A*S*H", "Kirk's Enterprise", "Hakuna Moncada", "In the Limelight", "howlin for Yu", "The Blossoms", "The Patsy Killjoys", "Wichita TinMen"];

    var beginning = [-251.93, -178.96, 638.3, 26.15, -75, 1069.13, 554.44, -175.7, -102.8, 74.97, 143.02, 268.45];

    var paid = [0, 0, 0, 0, 120, 0, 0, 0, 0, 0, 0, 0];

    var draft = [-27.1, -27.1, -27.1, -27.1, -26.7, -26.8, -27, -27.1, -26.7, -27.1, -27.1, -27.1];

    var expenses = [-46.2, -89.3, -146.6, -46.4, -46.7, -82.8, -57.6, -36, -26, -88.8, -135.4, -126.3];

    var winnings = [0, 161.4, 538, 0, 0, 0, 0, 0, 0, 107.6, 27.1, 269];

    var payment = [0, 0, -700, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    htmlCode += "<br />";
    htmlCode += '<table class="responsive"><thead><th colspan="8">2017 American League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';

    console.log(htmlCode);
    return htmlCode;

}

function NLFinances() {
    // repeat the code for 2024
    var teamList = ["A McNickle for Farm Fresh Gregs", "Donner Party", "Dread Pirate Roberts", 
                    "Leonard Peltier's Army", "Liberty Lunch", "Matty Bos", 
                    "Gobekli Tepe Fluffy Bunnies", "P-Funk All-Stars", "Seattle Stackers",
                    "The Cream and the Clear", "Wichita Sox Monkees"];

    var beginning = [92.78, 1022.24, -170.52, 
                     130.74, 69.06, -221.22,
                     0, -203.18, 136.05,
                     -168.33, 667.88];

    var paid = [0, 0, 0,
                0, 0, 0,
                0, 0, 0,
                0, 0];

    var draft = [-29.3, -29.4, -27.7,
                 -29.4, -29.0, -28.1,
                 -29.4, -27.9, -27.1,
                 -29.4, -29.0];

    var expenses = [-288.7, -86.2, -102.7,
                    -92, -46.2, -209.5,
                    -61.4, -112.3, -74,
                    -57, -140];

    var winnings = [389.08, 0, 0,
                    0, 29.4, 778.15,
                    0, 0, 155.63,
                    0, 233.45];

    var payment = [0, 0, 0,
                   0, 0, 0,
                   90.8, 0, 0,
                   0, 0];
    htmlCode = '<table class="responsive"><thead><th colspan="8">2024 National League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (i = 0; i < 11; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';
    htmlCode += "<br />";

    // repeat the code for 2023
    var teamList = ["A McNickle for Farm Fresh Gregs", "Donner Party", "Dread Pirate Roberts", 
                    "Leonard Peltier's Army", "Liberty Lunch", "Matty Bos", 
                    "NWA Redbirds", "P-Funk All-Stars", "Seattle Stackers",
                    "The Cream and the Clear", "Wichita Sox Monkees"];

    var beginning = [226.68, 791.11, -223.6, 
                     273.44, 154.06, -37.42,
                     0, -55.18, -51.20,
                     -133.33, 498.23];

    var paid = [0, 0, 0,
                0, 0, 0,
                0, 0, 51.20,
                0, 0];

    var draft = [-28, -29.4, -29,
                 -29.4, -26.4, -28.8,
                 -16, -28.8, -27.5,
                 -28.6, -28];

    var expenses = [-105.9, -79.6, -122,
                    -113.3, -58.6, -155,
                    -62.5, -119.2, -55.5,
                    -35.8, -182.6];

    var winnings = [0, 340.13, 204.08,
                    0, 0, 0,
                    0, 0, 136.05,
                    29.40, 680.25];

    var payment = [0, 0, 0,
                   0, 0, 0,
                   78.5, 0, 83,
                   0, -300];
    htmlCode += '<table class="responsive"><thead><th colspan="8">2023 National League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (i = 0; i < 11; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';
    htmlCode += "<br />";

    // repeat the code for 2022
    var teamList = ["A McNickle for Farm Fresh Gregs", "Donner Party", "Dread Pirate Roberts", 
                    "Leonard Peltier's Army", "Liberty Lunch", "Matty Bos", 
                    "Never Gonna Give Yu Up", "P-Funk All-Stars", "Seattle Stackers",
                    "The Cream and the Clear", "Wichita Sox Monkees"];

    var beginning = [113.03, 870.41, -98.8, 
                     220.21, 247.26, 106.38,
                     0, 0, 0,
                     -104.53, 671.83];

    var paid = [0, 0, 0,
                0, 0, 0,
                0, 0, 0,
                0, 0];

    var draft = [-29.2, -29.3, -27.7,
                 -29.4, -29.4, -29.2,
                 -29, -27, -29.2,
                 -28.8, -28.7];

    var expenses = [-212.7, -50, -97.10,
                    -130.7, -63.8, -114.6,
                    -88, -170.4, -49.1,
                    0, -156];

    var winnings = [355.55, 0, 0,
                    213.33, 0, 0,
                    0, 142.22, 27.1,
                    0, 711.1];

    var payment = [0, 0, 0,
                   0, 0, 0,
                   117, 0, 0,
                   0, -700];
    htmlCode += '<table class="responsive"><thead><th colspan="8">2022 National League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (i = 0; i < 11; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';
    htmlCode += "<br />";

    // repeat the code for 2021
    var teamList = ["A McNickle for Farm Fresh Gregs", "Cheeseburgers in Paradise", "Donner Party",
                    "Dread Pirate Roberts", "Leonard Peltier's Army", "Liberty Lunch",
                    "Matty Bos", "Never Gonna Give Yu Up", "The Cream and the Clear",
                    "Seattle Stackers", "Wichita SoxMonkees"];

    var beginning = [222.73, 102.9, 944.51, 
                     0, 116.29, 299.76,
                     239.58, 0, -73.12,
                     -432.7, 661.37];

    var paid = [0, 0, 0,
                0, 0, 0,
                0, 0, 0,
                0, 0];

    var draft = [-29.4, -29.4, -29.4,
                 -29.4, -29.4, -29.4,
                 -29.4, -29.4, -29.4,
                 -29.4, -29.4];

    var expenses = [-80.3, -74.2, -44.7,
                    -69.4, -130.1, -23.1,
                    -103.8, -62.9, -2,
                    -51, -118.2];

    var winnings = [0, 105.37, 0,
                    0, 263.43, 0,
                    0, 526.85, 0,
                    29.4, 158.06];

    var payment = [0, -104.67, 0,
                   0, 0, 0,
                   0, -434.55, 0,
                   483.7, 0];
    htmlCode += '<table class="responsive"><thead><th colspan="8">2021 National League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (i = 0; i < 11; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';

    // repeat the code for 2019
    var teamList = ["A McNickle for Farm Fresh Gregs", "Cheeseburgers in Paradise", "Donner Party",
                    "Leonard Peltier's Army", "Liberty Lunch", "Matty Bos",
                    "Sons of Pitches", "The Cream and the Clear", "Seattle Stackers",
                     "Wichita SoxMonkees"];

    var beginning = [311.13, 138.77, 418.31, 166.15, 241.7, 372.88, -166.1, 3.78, -256, 1019.57];

    var paid = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var draft = [-31.4, -31.5, -31.5, -31.5, -31.5, -31, -31.5, -31.5, -29.5, -30.9];

    var expenses = [-88.5, -125.9, -92.5, -148.4, -105.5, -102.3, -12, -45.4, -147.2, -152.4];

    var winnings = [31.5, 0, 650.2, 130.04, 195.06, 0, 0, 0, 0, 325.1];

    var payment = [0, 121.53, 0, 0, 0, 0, 0, 0, 0, -500.00];
    htmlCode += "<br />";
    htmlCode += '<table class="responsive"><thead><th colspan="8">2019 National League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (i = 0; i < 10; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';

    // repeat the code for 2018
    var teamList = ["A McNickle for Farm Fresh Gregs", "Cheeseburgers in Paradise", "Bluth's Banana Stand", "Donner Party",
                    "Leonard Peltier's Army", "Liberty Lunch", "Matty Bos", "Baseball Furies",
                    "Sons of Pitches", "The Cream and the Clear", "Seattle Stackers", "Wichita SoxMonkees"];

    var beginning = [497.03, 177.53, 0, 491.31, 34.72, 277.2, 323.89, 0, -116.5, 83.68, -139.9, 557.32];

    var paid = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var draft = [-26.7, -27.1, -27.1, -27.1, -27.1, -27.1, -27, -26.8, -27.1, -27.1, -27.1, -26.8];

    var expenses = [-159.2, -193, -22, -45.9, -143.7, -35.5, -44.8, -12, -22.5, -52.8, -89, -115.4];

    var winnings = [0, 181.34, 0, 0, 302.23, 27.1, 120.89, 0, 0, 0, 0, 604.45];

    var payment = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    htmlCode += "<br />";
    htmlCode += '<table class="responsive"><thead><th colspan="8">2018 National League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';

    // construct the JS shell to hold the finance data
    var teamList = ["A McNickle for Farm Fresh Gregs", "Cheeseburgers in Paradise", "Condors", "Donner Party",
                    "Leonard Peltier's Army", "Liberty Lunch", "Matty Bos", "Misfits",
                    "Sons of Pitches", "The Cream and the Clear", "Seattle Stackers", "Wichita SoxMonkees"];

    var beginning = [212.03, 226.33, -71.1, 408.91, 52.4, 324.6, 404.89, -277.78, -91, 132.58, -67.9, 532.34];

    var paid = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var draft = [-26.5, -27.1, -26.6, -26.6, -27, -27.1, -26.3, -27.1, -27.1, -27.1, -27.1, -27.1];

    var expenses = [-168.1, -21.7, -66.7, -130.8, -86.6, -20.3, -54.7, -52.6, -25.5, -21.8, -44.9, -91.8];

    var winnings = [479.6, 0, 0, 239.8, 95.92, 0, 0, 0, 27.1, 0, 0, 143.88];

    var payment = [0, 0, 0, 0, 0, 0, 0, 357.48, 0, 0, 0, 0];

    htmlCode += "<br />";
    htmlCode += '<table class="responsive"><thead><th colspan="8">2017 National League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';

    return htmlCode;

}
