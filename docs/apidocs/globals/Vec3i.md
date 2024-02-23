# Vec3i
Represents a 3d integer point in 3d space.

Has the following properties:
- `x`: Integer
- `y`: Integer
- `z`: Integer

Has the following methods:
- `hashCode() : Integer`
- `compareTo({x: Integer, y: Integer, z: Integer}) : Integer`
- `getX() : Integer`
- `getY() : Integer`
- `getZ() : Integer`
- `crossProduct({x: Integer, y: Integer, z: Integer}) : Vec3i`
- `distanceSq({x: Integer, y: Integer, z: Integer}) : Number`
- `distanceSqToCenter({x: Number, y: Number, z: Number}) : Number`
- `toString() : String`