function distanceFromHqInBlocks(location){
    return Math.abs(42 - location);
    }
function distanceFromHqInFeet(location) {
    const blocks = Math.abs(42 - location);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}
function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(startBlock - endBlock);
        const feetPerBlock = 264;
        return blocksTravelled * feetPerBlock;

        }
    function calculatesFarePrice(startBlock, endBlock) {
        const distance = distanceTravelledInFeet(startBlock, endBlock);
        let fare;
        if (distance <= 400) {
            fare = 0;
        }
        else if(distance > 400 && distance < 2000) {
           fare = (distance - 400) * 0.02;
        }
        else if(distance > 2000 && distance <= 2500) {
            fare = 25;
        }
        else {
            fare = 'cannot travel that far';
        }
        return fare;
}

module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice,
};