function ALFinances() {
    //construct the JS shell to hold the finance data
    // repeat the code for 2025
    var teamList = ["Banoaster Republic", "David's 5 & Dime", "Flower Children",
                    "Hradek Hrams", "Jak of Diamonds", "Kelly S*M*A*S*H", 
                    "Kirk's Enterprise", "Non-Zero Chance", "The Blossoms",
                    "The Patsy Killjoys", "The Shohei Kid", "Wichita TinMen"];

    var beginning = [7.54, 19.11, 110.87,
                     -113.67, -18.61, -98.6,
                     1394.46, 0, -71.73,
                     190.9, 1044.79, 507.33];

    var paid = [0, 0, 0, 
                0, 0, 0, 
                0, 0, 0, 
                0, 0, 0];

    var draft = [-27.1, -26.3, -27.1,
                 -27.0, -27.1, -27.1, 
                 -26.7, -25.9, -26.2, 
                 -27.0, -26.8, -27.1];

    var expenses = [-14.6, -62.3, -48.3, 
                    -68.8, -76.1, -60.1,
                    -210.7, -175.8, -74.3, 
                    -152.1, -53.9, -124.6];

    var winnings = [0, 0, 0,
                    0, 0, 0,
                    273.63, 164.18, 109.45,
                    27.1, 0, 574.25];

    var payment = [0, 0, 0, 
                   300, 0, 300, 
                   0, 0, 0, 
                   0, 0, -200];
    let htmlCode = '<table class="responsive"><thead><th colspan="8">2025 American League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (let i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        const balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';
    htmlCode += "<br />";

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
    htmlCode += '<table class="responsive"><thead><th colspan="8">2024 American League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (let i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        const balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
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

    for (let i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        const balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
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

    for (let i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        const balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
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

    for (let i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        const balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
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

    for (let i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        const balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
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

    for (let i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        const balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
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

    for (let i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        const balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';

    console.log(htmlCode);
    return htmlCode;

}

function NLFinances() {
    // repeat the code for 2025
    var teamList = ["A McNickle for Farm Fresh Gregs", "Donner Party", "Dread Pirate Roberts", 
                    "Leonard Peltier's Army", "Liberty Lunch", "Matty Bos", 
                    "Third Encore", "P-Funk All-Stars", "Blaze of Glory",
                    "The Cream and the Clear", "Wichita Sox Monkees"];

    var beginning = [163.86, 906.64, -300.92, 
                     9.34, 23.26, 319.33,
                     0, -343.38, 190.58,
                     -254.73, 732.33];

    var paid = [0, 0, 0,
                0, 0, 0,
                0, 0, 0,
                0, 0];

    var draft = [-28.3, -28.8, -28.6,
                 -29.2, -29.4, -25.9,
                 0, -28.7, -27.5,
                 -28.3, -29.4];

    var expenses = [-188.9, -41.8, -106.6,
                    -131.8, -80.9, -142.3,
                    0, -94.6, -72.5,
                    -49, -114.1];

    var winnings = [559.5, 0, 0,
                    0, 167.85, 0,
                    0, 0, 29.4,
                    55.95, 279.75];

    var payment = [0, 0, 0,
                   150, 0, 0,
                   0, 0, 0,
                   0, -200];
    let htmlCode = '<table class="responsive"><thead><th colspan="8">2025 National League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (let i = 0; i < 11; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        const balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';
    htmlCode += "<br />";

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
    htmlCode += '<table class="responsive"><thead><th colspan="8">2024 National League Finances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Carryover</td>';
    htmlCode += '<td class="colTitle">Paid</td><td class="colTitle">Draft</td><td class="colTitle">Expenses</td>';
    htmlCode += '<td class="colTitle">Winnings</td><td class="colTitle">Payment</td><td class="colTitle">Balance</td></tr>';

    for (let i = 0; i < 11; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        const balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
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

    for (let i = 0; i < 11; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        const balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
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

    for (let i = 0; i < 11; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        const balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
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

    for (let i = 0; i < 11; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        const balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
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

    for (let i = 0; i < 10; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        const balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
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

    for (let i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        const balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
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

    for (let i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + beginning[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + paid[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + draft[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + expenses[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + winnings[i].toFixed(2) + '</td>';
        htmlCode += '<td class="points">$' + payment[i].toFixed(2) + '</td>';
        const balance = beginning[i] + paid[i] + draft[i] + expenses[i] + winnings[i] + payment[i];
        htmlCode += '<td class="points">$' + balance.toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';

    return htmlCode;

}
