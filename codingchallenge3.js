/***************************************
Coding challenge 3

John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48, and $268.

To tip the waiter a fair amount, John creaated a simple tip calculator (as a function). he likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1. Containing all three tips (one for each bill)
2. Containing all three final paid amounts (bill + tip).

*/


function ammountOfTip(ammountOfBill) {
    if (ammountOfBill < 50) {
        return ammountOfBill * .2;
    } else if (ammountOfBill >= 50 && ammountOfBill < 200) {
        return ammountOfBill * .15;
    }else {
        return ammountOfBill * .1;
    }
}

var restaurant1 = ammountOfTip(124);
var restaurant2 = ammountOfTip(48);
var restaurant3 = ammountOfTip(268);
console.log (restaurant1, restaurant2, restaurant3);

var tips = [restaurant1, restaurant2, restaurant3];
var totalBill = [restaurant1 + 124, restaurant2 + 48, restaurant3 + 268];
console.log(tips, totalBill)
