function ALFaab2019() {
    var teamList = ["Banoaster Republic", "Flower Children", "Hradek Hrams", "Jak of Diamonds", "Kelly S*M*A*S*H", "Kirk's Enterprise", "David's 5 & Dime", "The Blossoms", "The Patsy Killjoys", "changin' names", "Wichita TinMen", "The Shohei Kid"];

    var balance = [99, 76, 5, 100, 36, 22, 22, 0, 3, 101, 0, 0];

    let htmlCode = '<table class="responsive"><thead><th colspan="2">2019 American League FAAB Balances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Balance</td></tr>';

    for (let i = 0; i < 12; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + balance[i].toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';

    htmlCode += '<br /><form><select name="team" onchange="showTeam(this.value, \'AL\')">';
    htmlCode += '<option value="">Select a team:</option>';
    htmlCode += '<option value="Banoaster Republic">Banoaster Republic</option>';
    htmlCode += '<option value="Flower Children">Flower Children</option>';
    htmlCode += '<option value="Hradek Hrams">Hradek Hrams</option>';
    htmlCode += '<option value="Jak of Diamonds">Jak of Diamonds</option>';
    htmlCode += '<option value="Kelly S*M*A*S*H">Kelly S*M*A*S*H</option>';
    htmlCode += '<option value="Kirk\'s Enterprise">Kirk&apos;s Enterprise</option>';
    htmlCode += '<option value="David\'s 5 & Dime">David&apos;s 5 & Dime</option>';
    htmlCode += '<option value="The Blossoms">The Blossoms</option>';
    htmlCode += '<option value="The Patsy Killjoys">The Patsy Killjoys</option>';
    htmlCode += '<option value="changin\' names">changin&apos; names</option>';
    htmlCode += '<option value="Wichita TinMen">Wichita TinMen</option>';
    htmlCode += '<option value="The Shohei Kid">The Shohei Kid</option>';
    htmlCode += '</select></form>';

    return htmlCode;

}

function NLFaab2019() {
    var teamList = ["A McNickle for Farm Fresh Gregs", "Cheeseburgers in Paradise", "Donner Party", "Leonard Peltier's Army", "Liberty Lunch", "Matty Bos", "Sons of Pitches", "The Cream and the Clear", "Seattle Stackers", "Wichita Sox Monkees"];

    var balance = [1, 12, 0, 24, 22, 13, 100, 91, 0, 9];

    let htmlCode = '<table class="responsive"><thead><th colspan="2">2019 National League FAAB Balances</th></thead>';
    htmlCode += '<tr><td class="colTitle">Team</td><td class="colTitle">Balance</td></tr>';

    for (let i = 0; i < 10; i++) {
        htmlCode += '<tr><td>' + teamList[i] + '</td><td class="points">$' + balance[i].toFixed(2) + '</td></tr>';
    }

    htmlCode += '</table>';

    htmlCode += '<br /><form><select name="team" onchange="showTeam(this.value, \'NL\')">';
    htmlCode += '<option value="">Select a team:</option>';
    htmlCode += '<option value="A McNickle for Farm Fresh Gregs">A McNickle for Farm Fresh Gregs</option>';
    htmlCode += '<option value="Cheeseburgers in Paradise">Cheeseburgers in Paradise</option>';
    htmlCode += '<option value="Donner Party">Donner Party</option>';
    htmlCode += '<option value="Leonard Peltier\'s Army">Leonard Peltier&apos;s Army</option>';
    htmlCode += '<option value="Liberty Lunch">Liberty Lunch</option>';
    htmlCode += '<option value="Matty Bos">Matty Bos</option>';
    htmlCode += '<option value="Sons of Pitches">Sons of Pitches</option>';
    htmlCode += '<option value="The Cream and the Clear">The Cream and the Clear</option>';
    htmlCode += '<option value="Seattle Stackers">Seattle Stackers</option>';
    htmlCode += '<option value="Wichita Sox Monkees">Wichita Sox Monkees</option>';
    htmlCode += '</select></form>';

    return htmlCode;
}

function showTeam(teamName, league) {
    // Legacy pages call this from inline onchange handlers. Keep this defined
    // to avoid a runtime ReferenceError when older FAAB views are rendered.
    return {
        teamName: teamName,
        league: league
    };
}

