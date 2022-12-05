const { Path } = require("paper/dist/paper-core");
var myPath = new Path();
myPath.strokeColor = 'black';

function onMouseD(event){
    myPath.add(event.point);
}
