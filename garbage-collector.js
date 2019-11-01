// ==UserScript==
// @name         GC
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  This script is going to clean u2p useless tabs
// @author       Manpreet Singh
// @match        http://s3-ap-southeast-1.amazonaws.com/cag-automation-reports/*
// @match        https://secure.expandrive.com/*
// @match        https://www.facebook.com/*
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        window.close();
    }, 5 * 60 * 1000);
})();



document.onreadystatechange= function(){
	console.log(document.readyState)
}
