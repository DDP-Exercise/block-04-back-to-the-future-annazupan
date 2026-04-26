"use strict";

export let clockModel = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    update: function () {
        let now = new Date();
        this.hours = now.getHours();
        this.minutes = now.getMinutes();
        this.seconds = now.getSeconds();
    },

    getTime: function () {
        return {
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds
        };
    },

    saveToLocalStorage: function () {
        let timeString = String(this.hours).padStart(2, "0") + ":"
            + String(this.minutes).padStart(2, "0") + ":"
            + String(this.seconds).padStart(2, "0");
        localStorage.setItem("savedTime", timeString);
        return timeString;
    }
}