function printHTML5FeaturesAvailability() {
    printModernizrFeatures();
}

function printModernizrFeatures() {
    var htmlNode = document.getElementById('features');
    printFeatures(htmlNode, Modernizr);
}

function printFeatures(htmlNode, featuresContainer) {
    for (var feature in featuresContainer) {
        printFeature(htmlNode, feature, featuresContainer);
    }
}

function printFeature(htmlNode, feature, featureContainer) {

    var type = typeof (featureContainer[feature]);
    if (type == "object") {
        htmlNode.innerHTML += '- ' + feature + ':<br />';
        printFeatures(featureContainer[feature]);
    }
    else if (type != "function")
        htmlNode.innerHTML += feature + ': ' + featureContainer[feature] + '<br/>';
}