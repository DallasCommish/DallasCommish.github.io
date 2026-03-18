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
