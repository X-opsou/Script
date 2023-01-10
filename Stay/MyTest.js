// ==UserScript==
// @name         New Userscript
// @namespace    https://stay.app/
// @version      0.1
// @description  Template userscript created by Stay
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==
(function () {
  'use strict';
  // Your code here...
  var aNewBodyElement = document.createElement("body");
  aNewBodyElement.id = "newBodyElement";
  document.body = aNewBodyElement;
  alert(document.body.id); // "newBodyElement"
})();
