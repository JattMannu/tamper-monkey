// ==UserScript==
// @name         GC
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This script is going to clean u2p useless tabs
// @author       Manpreet Singh
// @match        http://s3-ap-southeast-1.amazonaws.com/cag-automation-reports/*
// @match        https://secure.expandrive.com/*
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        window.close();
    }, 60 * 60 * 1000);
})();



document.onreadystatechange= function(){
	console.log(document.readyState)
}
