# Vec3
Used to represent a point in 3d space.

Has the following properties:
- `x`: Number: equal to the vector's `xCoord`
- `y`: Number: equal to the vector's `yCoord`
- `z`: Number: equal to the vector's `zCoord`

It has the following methods:
- `subtractReverse(Vec3 vec) : void`
- `normalize() : Vec3`
- `dotProduct(Vec3 vec) : number`
- `crossProduct(Vec3 vec) : Vec3`
- `subtract({x: number, y: number, z: number}) : Vec3`
- `addVector({x: number, y: number, z: number}) : Vec3`
- `addVector(Vec3 vec) : Vec3`
- `distanceTo(Vec3 vec) : number`
- `squareDistanceTo(Vec3 vec) : number`
- `lengthVector() : number`
- `getIntermediateWithXValue({vec: Vec3, x: number}) : Vec3`
- `getIntermediateWithYValue({vec: Vec3, y: number}) : Vec3`
- `getIntermediateWithZValue({vec: Vec3, z: number}) : Vec3`
- `toString() : string`
- `rotatePitch({pitch: number}) : Vec3`
- `rotateYaw({yaw: number}) : Vec3`