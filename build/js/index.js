'use strict';
var fillElements = function fillElements() {
    var links = Array.from(document.querySelectorAll('link[rel="import"]'));
    links.forEach(function (link) {
        var elementId = link.import.URL.split('/').pop().split('.').shift();
        var template = link.import.querySelector('template');
        var clone = document.importNode(template.content, true);
        document.getElementById(elementId).appendChild(clone);
    });

    //Grabs all key-value pairs and puts them in an object
    //
    // var infoData = {};
    //
    // var getAllKeys = document.querySelectorAll('.key');
    // var getAllValues = document.querySelectorAll('.value');
    // for (var i = 0; i < getAllKeys.length; i += 1) {
    //     var k = getAllKeys[i].innerHTML;
    //     var v = getAllValues[i].innerHTML;
    //     infoData[k.slice(0, k.length - 1)] = v;
    // }
    //
    // superagent.post('/').send(infoData).set('Accept', 'application/json').end();
};

document.body.onload = fillElements;