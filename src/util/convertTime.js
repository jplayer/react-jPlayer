import {timeFormats} from "../util/constants";

export default (s) => {
    s = (s && typeof s === "number") ? s : 0;

    const myTime = new Date(s * 1000),
        hour = myTime.getUTCHours(),
        min = timeFormats.showHour ? myTime.getUTCMinutes() : myTime.getUTCMinutes() + hour * 60,
        sec = timeFormats.showMin ? myTime.getUTCSeconds() : myTime.getUTCSeconds() + min * 60,
        strHour = (timeFormats.padHour && hour < 10) ? "0" + hour : hour,
        strMin = (timeFormats.padMin && min < 10) ? "0" + min : min,
        strSec = (timeFormats.padSec && sec < 10) ? "0" + sec : sec;

    let strTime = "";
        strTime += timeFormats.showHour ? strHour + timeFormats.sepHour : "";
        strTime += timeFormats.showMin ? strMin + timeFormats.sepMin : "";
        strTime += timeFormats.showSec ? strSec + timeFormats.sepSec : "";

        return strTime;
};