// ===Kilometer to meter convert start====
function kilometerToMeter(kilometer) {

    if (kilometer < 0) {
        // for input negative Value 
        return "The negative Value does not acceptable.  please Enter  a possative value ";
    } else if (kilometer == null) {
        // when input is null
        return "Input Require ";
    } else {
        // all possative value 
        return kilometer * 1000;
    };
};


console.log(kilometerToMeter(9));
//======== End===============


//=====Budget Calculator  start=======

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        // for input negative Value
        return "The negative Value does not acceptable. please Enter a valid number ";
    } else if (watch == null && phone == null && laptop == null) {
        // when input is null
        return "Input Require ";

    } else {
        // all possative value 
        return watch * 50 + phone * 100 + laptop * 500;
    };
};

console.log(budgetCalculator(2, 3, 2));

//======== End===============

//==== hotelCost  start =====
function hotelCost(day) {

    if (day < 0) {
        return ' please Enter a valid number ';

    } else {
        if (day <= 10) {
            // cost calculate within 1 to 10 days 
            var totalCost = day * 100;
            return totalCost;

        } else if (day <= 20) {
            // cost calculate within 11 to 20 days 
            day = day - 10;
            var cost2 = day * 80;
            // first 10 days cost =(10*100)
            var totalCost = cost2 + (10 * 100);
            return totalCost;

        } else {
            // cost calculate  more then  20  days 
            day = day - 20;
            var cost3 = day * 50;
            // first 10 days cost= (10*100) second 10 days cost =(10 * 80);
            var totalCost = cost3 + (10 * 100) + (10 * 80);
            return totalCost;

        };
    };
};


console.log(hotelCost(11));

//======== End===============



// ====megafriend  start ======

function megaFriend(arrey) {

    let biggestName = arrey[0]

    for (let i = 0; i < arrey.length; i++) {

        let container = arrey[i];

        if (container.length > biggestName.length) {

            biggestName = container;
        }
    }
    return biggestName;

}


let arrey = ["programming-hero", "sadin", "bangladesh", "indian", "pakistan", 'saimon'];


console.log(megaFriend(arrey));


//======== End===============