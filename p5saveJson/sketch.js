var json;

function setup() {

  json = {}; // new JSON Object

  json.id = 0;
  json.species = 'Panthera leo';
  json.name = 'Lion';

// To save, un-comment the line below, then click 'run'
saveJSONObject(json, 'lion.json');
}

// Saves the following to a file called "lion.json":
// {
//   "id": 0,
//   "species": "Panthera leo",
//   "name": "Lion"
// }