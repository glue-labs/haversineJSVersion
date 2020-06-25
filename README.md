# Haversine (JS Version)
Calculate the distance (in various units) between two points on Earth using their latitude and longitude.
## Usage
### Calculate the distance between Lyon and Paris
```js
var lyon = { lat1: 45.7597, lng1: 4.8422 };
var paris = { lat2: 48.8567, lng2: 2.3508 };
var result = haversine(lyon,paris );
console.log(result);
>> 392  # in kilometers

result = haversine(lyon, paris, "MILES")
>> 243 # in miles
```
## Credits
original python script source (mapado/haversine) [https://github.com/mapado/haversine]