var appData = {
    "details": {
      "List": "$485,000",
      "ML": "732809 (active)",
      "County": "Benton",
      "Bedrooms": "5",
      "Type": "n/a",
      "Full-Bath : Half-Bath": "3 : 1",
      "Subdivision": "Avalon",
      "Heated sq ft (approx)": "4,013",
      "School Dist": "Rogers",
      "SF Source": "Seller",
      "Garage : Carport": "3 car, attached : Detached",
      "Driveway": "Concrete",
      "Approx Year Built": "2005",
      "Covenant": "Lot/Bk:&nbsp;1.350/1",
      "Levels": "2",
      "Disabled Access": "No",
      "Disclosure": "Yes",
      "Parcel ID": "1516605-000",
      "Taxes": "$4,102",
      "Landscape": "All",
      "Lot Dimensions": "200x288x200x288",
      "Lot Description": "In Subdivision, Level, Sidewalk, View, Wooded",
      "Legal": "Lot"
    },
    "amenities": {
      "Amenities": "Attic Storage, Blinds, Built-Ins, Cathedral Ceiling, Ceiling Fans, Ceramic Tile Counters, Granite Counters, Pantry, Progrmbl Thermost, Skylight, Walk-In Closets, Washer/Dryer Connection ",
      "Appliances": "Countertop, Dishwasher, Dryer, Electric, Garbage Disposal, Hood, Microwave Vent, Range, Refrigerator, Washer ",
      "Equipment": "Central Vacuum, Garage Door Opener, Security System, Smoke Detector, Sprinkler, Wired for Sound ",
      "Water : Lake": "Beaver : Seasonal View"
    },
    "features": {
      "AC": "2 therm/Central",
      "Heat Sys": "2 therm/Central",
      "Exterior": "Brick",
      "Patio": "Covered, Enclosed, Patio, Stone",
      "Fencing": "Backyard",
      "Roads": "Surface Paved",
      "Fireplace": "2/Bedroom, Family Room",
      "Utilities": "Electric, Septic, Water Public",
      "Floor": "Other-Specify In Rmrks, Wood",
      "Water Heater": "2/Electric, Hot Wtr Recirculation, On Demand (In-line)",
      "Foundation": "Concrete Slab",
      "Windows": "n/a",
      "Det Bldg": "Storage Building",
      "Detached Building": "1",
      "Exclusions": "n/a",
      "Roof": "Architectural Shingle"
    },
    "directions": " New Hope Road, East Hwy 94 @ Monte Ne Chicken, turn left, 3.5 Miles to Avalon Subdivision. On left. Go left on Avalon, Rt on Hawthorne Place. (11 Miles to Promenade Mall) "
  };
var Firebase = require('firebase');

var ref = new Firebase('https://hawthorne.firebaseio.com/appData');

ref.set(appData, function (err) {
  if (err) console.log(err);
  process.exit();
});
