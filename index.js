var Directions;
(function (Directions) {
    Directions[Directions["TOP"] = 0] = "TOP";
    Directions[Directions["LEFT"] = 1] = "LEFT";
    Directions[Directions["RIGHT"] = 2] = "RIGHT";
    Directions[Directions["BOTTOM"] = 3] = "BOTTOM";
})(Directions || (Directions = {}));
var TimingFunction;
(function (TimingFunction) {
    TimingFunction["EASE"] = "ease";
    TimingFunction["EASE_IN"] = "ease-in";
    TimingFunction["EASE_OUT"] = "ease-out";
    TimingFunction["EASE_IN_OUT"] = "ease-in-out";
    TimingFunction["LINEAR"] = "linear";
})(TimingFunction || (TimingFunction = {}));
function frame(id, direction, timing) {
    if (direction === Directions.TOP) {
        console.log(timing);
    }
    if (direction === Directions.LEFT) {
        console.log(timing);
    }
    if (direction === Directions.RIGHT) {
        console.log(timing);
    }
    if (direction === Directions.BOTTOM) {
        console.log(timing);
    }
}
frame('id', Directions.TOP, TimingFunction.EASE);
