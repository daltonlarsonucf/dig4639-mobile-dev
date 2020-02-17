function Sum (a, b) {
  let result = undefined
  if (typeof a == "number" && typeof b == "number") {
    result = a + b
  }
  return result
}

console.log(Sum(2,3)==5);

function AddList (c) {
  let result = undefined
  if(Array.isArray(c) && c.length > 0){
    result = 0
    for (var i = 0; i < c.length; i++) {
      if (typeof c[i] != "number") {
        result = undefined
        break
      }
      result = result + c[i]
    }
  }
  return result
}

console.log(AddList([1,2,5]));

export { Sum, AddList };