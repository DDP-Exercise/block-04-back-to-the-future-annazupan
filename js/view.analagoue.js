"use strict";

export let analogueView = {
    init: function() {
        this.hoursHand   = document.getElementById("hours-container");
        this.minutesHand = document.getElementById("minutes-container");
        this.secondsHand = document.getElementById("seconds-container");
    },

    update: function(time) {
        // each hand uses CSS transform: rotate() to point to the right position
        // the <i> inside is offset upward via CSS, so rotating the container spins the hand

        let secondDeg = time.seconds * 6;                          // 360 / 60 = 6 deg per second
        let minuteDeg = time.minutes * 6 + time.seconds * 0.1;    // + smooth seconds
        let hourDeg   = (time.hours % 12) * 30 + time.minutes * 0.5; // 360 / 12 = 30 deg per hour

        this.hoursHand.style.transform   = "rotate(" + hourDeg   + "deg)";
        this.minutesHand.style.transform = "rotate(" + minuteDeg + "deg)";
        this.secondsHand.style.transform = "rotate(" + secondDeg + "deg)";
    }
};

analogueView.init();