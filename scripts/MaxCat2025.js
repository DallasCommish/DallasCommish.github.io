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
    htmlCode += '<br /><br /><br /><p style="font-style: italic;">Last updated: 9/1/2025</p>';
    return htmlCode;
}
