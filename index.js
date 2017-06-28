function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const names = ["Vera", "Matt", "Rod"]

  names.forEach(callback)

  return names
}

function doToArray(array, callback) {
  array.forEach(callback)
}
