var Html5Basics = Html5Basics || {};
Html5Basics.Features = Html5Basics.Features || {};
Html5Basics.Features.Printer = function (featuresContainer) {

    var featuresOwner = featuresContainer;
    var html = '';

    function printAllFeatures(){
        resetOutput();
        printFeatures(featuresOwner);
        return html;
    }

    function resetOutput(){
        html = '';
    }

    function printFeatures(featuresContainer) {
        for (var feature in featuresContainer) {
            printFeature(feature, featuresContainer);
        }
    }

    function printFeature(feature, featuresContainer) {

        var type = typeof (featuresContainer[feature]);
        if (type == "object") {
            html += '- ' + feature + ':<br />';
            printFeatures(featuresContainer[feature]);
        }
        else if (type != "function")
            html += feature + ': ' + featuresContainer[feature] + '<br/>';
    }

    return {
        printAllFeatures: printAllFeatures
    };
};