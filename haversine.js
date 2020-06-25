
const _AVG_EARTH_RADIUS_KM = 6371.0088

const Unit = {
    "KILOMETERS": 'km',
    "METERS": 'm',
    "MILES": 'mi',
    "NAUTICAL_MILES": 'nmi',
    "FEET": 'ft',
    "INCHES": 'in'
}

const _CONVERSIONS = {
    "km": 1.0,
    "m": 1000.0,
    "mi": 0.621371192,
    "nmi": 0.539956803,
    "ft": 3280.839895013,
    "in": 39370.078740158
}

function get_avg_earth_radius(unit) {
    unit = Unit[unit];
    return _AVG_EARTH_RADIUS_KM * _CONVERSIONS[unit];
}


function haversine(point1, point2, unit = Unit.KILOMETERS) {
    let { lat1, lng1 } = point1;
    let { lat2, lng2 } = point2;

    //  convert all latitudes/longitudes from decimal degrees to radians
    lat1 = radians(lat1);
    lng1 = radians(lng1);
    lat2 = radians(lat2);
    lng2 = radians(lng2);

    //  calculate haversine
    lat = lat2 - lat1
    lng = lng2 - lng1
    d = Math.pow(Math.sin(lat * 0.5), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(lng * 0.5), 2);
    return Math.floor( 2 * get_avg_earth_radius(unit) * Math.asin(Math.sqrt(d)))

}

function radians(degree) {
    return degree * Math.PI / 180;
}
