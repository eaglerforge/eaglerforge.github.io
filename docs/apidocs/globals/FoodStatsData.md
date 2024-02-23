# FoodStatsData
Represents the food stats of a player.

Has the following properties:
- `foodLevel`: Integer
- `foodSaturationLevel`: Number
- `foodExhaustionLevel`: Number
- `foodTimer`: Integer
- `prevFoodLevel`: Integer

Has the following methods:
- `addStats({foodLevelIn: Integer, foodSaturationModifier: Number}) : void`
- `addExhaustion({parFloat1: Number}) : void`
- `setFoodLevel({foodLevelIn: Integer}) : void`
- `setFoodSaturationLevel({foodSaturationLevelIn: Number}) : void`
- `getFoodLevel() : Integer`
- `getPrevFoodLevel() : Integer`
- `getSaturationLevel() : Number`
- `needFood() : Boolean`