var Html5Basics = Html5Basics || {};
Html5Basics.Features = Html5Basics.Features || {};
Html5Basics.Features.Detection = Html5Basics.Features.Detection || (function () {

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

    //Revealing Module Pattern
    return {
        printFeatures: showFeatures
    };

})();