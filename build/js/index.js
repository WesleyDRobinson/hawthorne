"use strict";
'use strict';

var fillElements = function fillElements() {
    var links = Array.from(document.querySelectorAll('link[rel="import"]'));
    links.forEach(function (link) {
        var elementId = link.import.URL.split('/').pop().split('.').shift();
        var template = link.import.querySelector('template');
        var clone = document.importNode(template.content, true);
        document.getElementById(elementId).appendChild(clone);
    });
};

document.body.onload = fillElements;