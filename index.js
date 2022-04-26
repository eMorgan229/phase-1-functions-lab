// Code your solution in this file!
/* deliverables:
block 1
distanceFromHqInBlocks () {}
input: pickup location for a passenger
returns: number of blocks from headquarters
*/
function distanceFromHqInBlocks(pickUp) {

    return Math.abs(pickUp - 42);
}

/*
block 2
distanceFromHqFeet() {}
input: distanceFromHqBlocks return value
output: translates number of blocks to feet (so multiply distanceFromHqInBlocks output by 264 feet long.)
*/
function distanceFromHqInFeet(distance) {
    return (distanceFromHqInBlocks(distance) * 264);
}

/*
block 3
distanceTravelledInFeet
input: (1) the start block and (2) destination block
output: number of feet travelled formula would be: (higherValueBlock-lowerValueBlock)*264 
*/
function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * 264);
}

/*
block 4
calculatesFarePrice
should be a conditional statement
input: distanceTravelledInFeet - 400 feet free
    if (after subtracting 400) greater than 0, but less than or equal 2000, price=2 cents 

    if (after subtracting 400) is greater than or equal to 1600 but less than 2100 price=flat fare

    if greater than 2100 return "cannot travel that far"
*/ 
function calculatesFarePrice(start, destination) {
    const distance =  distanceTravelledInFeet(start, destination)
        if (distance <= 400 ) {
            return 0;
    } 
        else if (distance > 400 && distance < 2000){
            return ((distance - 400) * 0.02);
    }
        else if (distance > 2000 && distance < 2500) {
            return 25;
    }
        else if (distance > 2500) {
            return 'cannot travel that far';
        }

}
    