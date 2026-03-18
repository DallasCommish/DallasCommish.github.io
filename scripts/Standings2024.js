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
    htmlCode += "</tbody></table>";

    return htmlCode;
  }
  