//This CanvasDrawer object mostly acts as a Facade for canvas functionality.
//May has no sense, but might do the job to understand the main Facade pattern purposes.
var Html5Basics = Html5Basics || {};
Html5Basics.Drawing = Html5Basics.Drawing || {};
Html5Basics.Drawing.CanvasDrawer = Html5Basics.Drawing.CanvasDrawer || (function () {

    //Private references, once having added private scope thorugh Module Pattern
    var canvasElement = null;
    var context2D = null;
    var context3D = null; //only available with some individual vendors. Not Standard.

    function setCanvasElement(canvasNode) {
        canvasElement = canvasNode;
        context2D = canvasElement.getContext("2d");
        // context3D = this.canvasElement.getContext("3d");
    }

    //Pencil
    function pencilStartPoint(x, y) {
        context2D.moveTo(x, y);
    }

    function pencilTraceTo(x, y) {
        context2D.lineTo(x, y);
    }

    //Ink
    function pencilStyle(style) {
        context2D.strokeStyle = style;
    }

    function pencilDrawTraces() {
        context2D.stroke();
    }

    //Text and Fonts
    function textWrite(x, y, text) {
        context2D.fillText(text, x, y);
    }

    function textStyle(style) {
        context2D.font = style;
    }
    //TODO few more text properties...

    //Gradients
    

    //Drawing methods
    function drawRectangle(x, y, width, height) {
        context2D.fillRect(x, y, width, height);
    }

    function drawRandomPencilPath(x, y, scale, style) {
        pencilStartPoint(x, y);
        pencilStyle(style);
        for (var i = 0; i < 200; i++) {
            pencilTraceTo(
                Math.round(Math.random() * 100 * scale + x),
                Math.round(Math.random() * 100 * scale + y)
            );
        }
        pencilDrawTraces();
    }

    function drawText(x, y, text, style) {
        textStyle(style);
        textWrite(x, y, text);
    }

    //Clear methods
    function clearRectangle(x, y, width, height) {
        context2D.clearRect(x, y, width, height);
    }

    //Revealing Module Pattern
    return {
        setCanvasElement: setCanvasElement,
        drawRectangle: drawRectangle,
        drawRandomPencilPath: drawRandomPencilPath,
        drawText: drawText
    };

})();