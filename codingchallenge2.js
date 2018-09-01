/*************************

Coding Challenege 2

John and Mike both play basketball in different teams. In the latest 3 games, Johns team scored 89, 120, and 103 points, while Mike's team scored 116, 94, and 123 points.

1.Calculated the average score for each team
2.Decide which teams wins in average (higest average score), and print the winner to the console. Also include the average score in the output.
3.Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).

4.Extra: mary also plays basketball, and her team scored 97, 134, and 105 points. Like before, log the average winner to the console. HINT: ou will need the && operaor to take the decision. 
5.Like before, change the scores to generate different winners, keeping in mind there might be draws. 

*/


var johnsGame1 = 89;
var johnsGame2 = 120;
var johnsGame3 = 103;
var marksGame1 = 116;
var marksGame2 = 94;
var marksGame3 = 123;

console.log(johnsGame1, johnsGame2, johnsGame3, marksGame1, marksGame2, marksGame3)


var averageJohnsGames = (johnsGame1 + johnsGame2 + johnsGame3) / 3;
var averageMarksGames = (marksGame1 + marksGame2 + marksGame3) / 3;

console.log(averageJohnsGames, averageMarksGames);


if (averageJohnsGames > averageMarksGames) {
    console.log('The average of John\'s games is higher. Average score ' + averageJohnsGames);
} else if (averageJohnsGames === averageMarksGames) {
    console.log('It is a draw');
} else {
    console.log('The average of Mark\'s games is higher. Average score ' + averageMarksGames);
}



var maryGame1 = 97;
var maryGame2 = 134;
var maryGame3 = 105;

console.log (maryGame1, maryGame2, maryGame3);

var averageMarysGames = (maryGame1 + maryGame2 + maryGame3) / 3;

console.log (averageMarysGames)

if (averageJohnsGames > averageMarksGames && averageJohnsGames
    > averageMarysGames) {
    console.log('John wins. Average score ' + averageJohnsGames);
} else if (averageJohnsGames === averageMarksGames === averageMarysGames) {
    console.log('It is a draw');
} else if (averageMarksGames > averageJohnsGames && averageMarksGames > averageMarysGames) {
    console.log('Mark wins. Average score ' + averageMarksGames);
} else if (averageMarysGames > averageJohnsGames && averageMarysGames > averageMarksGames) {
    console.log('Mary wins. Average score ' + averageMarysGames);
} else {
    console.log('The average of Mark\'s games is higher. Average score ' + averageMarksGames);
}

