"use strict";

export let digitalView = {
    init: function() {
        this.display = document.getElementById("digital-clock");
    },

    update: function(time) {
        let h = String(time.hours).padStart(2, "0");
        let m = String(time.minutes).padStart(2, "0");
        let s = String(time.seconds).padStart(2, "0");
        this.display.textContent = h + ":" + m + ":" + s;
    }
};

digitalView.init();