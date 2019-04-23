var recipes = {};

function updateObjectWithKeyAndValue(ob, key, val) {
  return Object.assign({}, ob, {[key]: val});
}

function destructivelyUpdateObjectWithKeyAndValue(ob, key, val) {
  ob[key] = val;
  return ob;
}

