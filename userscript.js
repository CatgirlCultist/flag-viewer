// ==UserScript==
// @name         Flag Viewer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  More easily see flags for collection management
// @author       Seanat (aka Yuuka, CatgirlCultist, cbp105)
// @match        https://www.nationstates.net/page=deck/card=*
// @icon         https://www.google.com/s2/favicons?domain=nationstates.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

//  These vars are config
    var autoHideS2Box = true;
    var displayFullFlag = true;
    var s1Redesign = true; // S1 Redesign everywhere can be found here: https://github.com/CatgirlCultist/s1-redesign/blob/main/userscript.js

    if (autoHideS2Box) {
        var cardBox = document.getElementsByClassName("deckcard-title")[0];
        cardBox.style.visibility = "hidden";
    };

    if (displayFullFlag) {
        var cardFlag = document.getElementsByClassName("deckcard-flag")[0];
        var cardFlagImage = new String(cardFlag.style.backgroundImage);
        var cardFlagLink = cardFlagImage.substring(5, cardFlagImage.length-2);
        var img = document.createElement("img");
        img.src = cardFlagLink;
        var src = document.getElementById("deck-single-card");
        src.appendChild(img);
        img.style.objectFit = "none";
    };

    if (s1Redesign) {
        var flagElement = document.getElementsByClassName("deckcard-flag")[0];
        flagElement.style.height = "180px";
        var descBoxElement = document.getElementsByClassName("deckcard-desc")[0];
        descBoxElement.remove();
    };
})();
