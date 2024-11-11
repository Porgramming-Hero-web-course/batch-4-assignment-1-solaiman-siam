"use strict";
{
    function calculateShapeArea(shape) {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius * shape.radius;
        }
        else if (shape.shape === "rectangle") {
            return shape.height * shape.width;
        }
    }
    const result1 = calculateShapeArea({ shape: "circle", radius: 5 });
    const result2 = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(result1, result2);
}
