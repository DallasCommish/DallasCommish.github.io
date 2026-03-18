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
