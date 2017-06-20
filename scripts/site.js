$( document ).ready(function() {
    var date = new Date( "2017-08-09" );
    var now = new Date();
    var diff = ( date.getTime() / 1000 ) - ( now.getTime() / 1000 );

    var clock = $( '.countdown' ).FlipClock( diff, {
        clockFace : 'DailyCounter',
        countdown : true,
        showSeconds: true
    });
});


