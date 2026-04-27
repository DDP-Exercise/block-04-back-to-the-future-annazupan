"use strict";

import { clockModel } from "./model.time.js";
import { digitalView } from "./view.digital.js";
import { analogueView } from "./view.analagoue.js";

let clockController = {
    tick: function() {
        clockModel.update();
        let time = clockModel.getTime();

        digitalView.update(time);
        analogueView.update(time);
    },

    initListeners: function() {
        document.getElementById("save-btn").addEventListener("click", function() {
            let saved = clockModel.saveToLocalStorage();
            alert("Time saved: " + saved);
        });
    }
};

clockController.initListeners();
clockController.tick();
setInterval(function() {
    clockController.tick();
}, 1000);