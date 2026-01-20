const push = function () {
    console.log("pushing it!")
}

const pull = function () {
    console.log("pulling it!")
}

const pushPull = (func) => {
    func();
}

pushPull(push);
pushPull(pull);


const time = new Date();
const returnTime = function (time) {
    console.log('The current time is: ' + time)
}
const getTime = (func) => {
    func(time);
}
getTime(returnTime)
