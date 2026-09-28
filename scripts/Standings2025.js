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
