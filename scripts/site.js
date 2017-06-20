$( document ).ready(function() {
    var tz    = moment.tz.guess();
    var date  = moment.tz( '2017-08-09', tz );
    var now   = new Date();
    var diff  = ( date.valueOf() / 1000 ) - ( now.getTime() / 1000 );

    var clock = $( '.countdown' ).FlipClock( diff, {
        clockFace   : 'DailyCounter',
        countdown   : true,
        showSeconds : true
    });

});


