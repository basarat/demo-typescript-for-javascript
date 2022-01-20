/** 
 * @param {{x: number, y: number}} point
 */
function logPoint(point) {
  console.log(`{ x: ${point.x}, y: ${point.y}}`);
}

logPoint({ x: 123, y: 456 }); // ✅