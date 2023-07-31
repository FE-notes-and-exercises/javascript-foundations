function createBarber(fname, fearnings = 0, fhaircuts = []) {
  return {
    name: fname,
    earnings: fearnings,
    haircuts: fhaircuts
  };
}

function giveCompliment(cutType) {
  return "This "+cutType['style']+" looks great!"

}

function cutHair(barber, cutType) {
  barber.haircuts.push(cutType);
  barber.earnings += cutType.price 
  return barber;
}
function listStyles(barber, style) {
  cuts = []
  for (var i = 0; i < barber.haircuts.length; i++) {
    if (barber.haircuts[i].hairLength == style) {
      cuts.push(barber.haircuts[i].style)
    }
  }
  return cuts
}

module.exports = {
  createBarber,
  giveCompliment,
  cutHair,
  listStyles
  };