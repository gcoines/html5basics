var Html5Basics = Html5Basics || {};
Html5Basics.Features = Html5Basics.Features || {};
Html5Basics.Features.Detector = Html5Basics.Features.Detector || (function () {

    //Private references, once having added private scope thorugh Module Pattern
    var htmlNode = null;

    function showFeatures(node) {
        htmlNode = node;
        if(htmlNode == null)
            throw 'No HtmlNode specified';

        //Print features detected through Modernizr
        var featuresPrinter = new Html5Basics.Features.Printer(Modernizr);
        htmlNode.innerHTML = featuresPrinter.printAllFeatures();
    }

    function checkFeature(featureContainer, featureName){
        return !!featureContainer[featureName]; //Double negation trick to obtain boolean
    }

    function checkElementFeature(elementName){
        return !!document.createElement(elementName).getContext;
    }

    function checkElementFeatureMethod(elementName, elementMethodName, elementMethodParam){
        var result = false;
        var elem = document.createElement(elementName);
        var isElemMethodAvailable = !!elem[elementMethodName];
        result = isElemMethodAvailable ? elem[elementMethodName](elementMethodParam) : isElemMethodAvailable;
        return result;
    }

    function checkElementAttributeState(elementName, elementAttributeName, elementAttributeValue){
        var elem = document.createElement(elementName);
        elem.setAttribute(elementAttributeName, elementAttributeValue);
        return elem.getAttribute(elementAttributeName) === elementAttributeValue;
    }

    //Revealing Module Pattern
    return {
        printFeatures: showFeatures,
        isFeatureAvailableOnGlobalObject: checkFeature,
        isFeatureElementAvailable: checkElementFeature,
        isFeatureElementAvailableFor: checkElementFeatureMethod,
        isFeatureElementAttributeAvailable: checkElementAttributeState
    };

})();