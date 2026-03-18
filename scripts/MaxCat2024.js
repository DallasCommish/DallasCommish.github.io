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

