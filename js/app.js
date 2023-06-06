const brand = document.querySelector('#brand')
const year = document.querySelector('#year')
const minPrice = document.querySelector('#min_price')
const maxPrice = document.querySelector('#max_price')
const doors = document.querySelector('#doors')
const transmission = document.querySelector('#transmission')
const color = document.querySelector('#color')
const result = document.querySelector('#result')

const maxYear = new Date().getFullYear()
const minYear = maxYear - 10

const dataCarObj = {
  brand: '',
  year: '',
  min_price: '',
  max_price: '',
  doors: '',
  transmission: '',
  color: ''
}

document.addEventListener('DOMContentLoaded', () => {
  showCars(cars)
  fillYearField()
})

brand.addEventListener('change', e => {
  dataCarObj.brand = e.target.value
  filterCar()
})

year.addEventListener('change', e => {
  dataCarObj.year = parseInt(e.target.value)

  filterCar()
})

minPrice.addEventListener('change', e => {
  dataCarObj.min_price = e.target.value
  filterCar()
})
maxPrice.addEventListener('change', e => {
  dataCarObj.max_price = e.target.value
  filterCar()
})
doors.addEventListener('change', e => {
  dataCarObj.doors = parseInt(e.target.value)
  filterCar()
})
transmission.addEventListener('change', e => {
  dataCarObj.transmission = e.target.value
  filterCar()
})
color.addEventListener('change', e => {
  dataCarObj.color = e.target.value
  filterCar()
})

function showCars(cars) {
  clearResult()
  cars.forEach(car => {
    const { brand, model, year, doors, transmission, price, color } = car
    const htmlCar = document.createElement('p')

    htmlCar.textContent = `
      ${brand} - ${model} - ${year} - ${doors} doors - Transmission: ${transmission} - Price: $${price} - Color: ${color}
    `

    result.appendChild(htmlCar)
  })
}

function clearResult() {
  while (result.firstChild) {
    result.removeChild(result.firstChild)
  }
}

function fillYearField() {
  for (let i = maxYear; i >= minYear; i--) {
    const option = document.createElement('option')
    option.value = i
    option.textContent = i
    year.appendChild(option)
  }
}

function filterCar() {
  const carResult = cars
    .filter(filterBrand)
    .filter(filterYear)
    .filter(filterMinPrice)
    .filter(filterMaxPrice)
    .filter(filterDoors)
    .filter(filterTransmission)
    .filter(filterColor)

  if (carResult.length > 0) {
    showCars(carResult)
  } else {
    noResult()
  }

  console.log(carResult)
}

function noResult() {
  clearResult()
  const noResult = document.createElement('div')
  noResult.classList.add('alert', 'error')
  noResult.textContent = "There aren't results, try again with other cars :)"

  result.appendChild(noResult)
}

function filterBrand(auto) {
  if (dataCarObj.brand) {
    return auto.brand === dataCarObj.brand
  }

  return auto
}
function filterYear(auto) {
  if (dataCarObj.year) {
    return auto.year === dataCarObj.year
  }

  return auto
}
function filterMinPrice(auto) {
  if (dataCarObj.min_price) {
    return auto.price >= dataCarObj.min_price
  }

  return auto
}
function filterMaxPrice(auto) {
  if (dataCarObj.max_price) {
    return auto.price <= dataCarObj.max_price
  }

  return auto
}
function filterDoors(auto) {
  if (dataCarObj.doors) {
    return auto.doors === dataCarObj.doors
  }

  return auto
}
function filterTransmission(auto) {
  if (dataCarObj.transmission) {
    return auto.transmission === dataCarObj.transmission
  }

  return auto
}
function filterColor(auto) {
  if (dataCarObj.color) {
    return auto.color === dataCarObj.color
  }

  return auto
}
