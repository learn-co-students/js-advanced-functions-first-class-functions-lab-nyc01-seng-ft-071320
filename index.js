const returnFirstTwoDrivers = drivers => {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = drivers => {
  return drivers.slice(drivers.length - 2)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

const createFareMultiplier = int => {
  return function(fare) { return fare * int }
}

const fareDoubler = fare => {
  return createFareMultiplier(2)(fare)
}

const fareTripler = fare => {
  return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (drivers, callback) => {
  return callback(drivers)
}
