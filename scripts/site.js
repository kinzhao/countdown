$(document).ready(function() {
    var tz = moment.tz.guess(),
    date   = moment.tz('2019-03-10', tz),
    now    = new Date(),
    diff   = (date.valueOf() / 1000) - (now.getTime() / 1000);

    if(diff < 0) {
        diff = 0;
    }

    var clock = $('.countdown').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true,
        showSeconds: true
    });

});