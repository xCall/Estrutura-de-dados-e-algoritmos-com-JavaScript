let movie = 'Lord of the Rings'
//var movie = 'Batman vs Superman'  * erro, movie já foi declarada*

function starWarFan() {
  const movie = 'Star Wars'
  return movie
}

function marvelFan() {
  movie = 'The Avengers'
  return movie
}

function blizzardFan() {
  const isFan = true
  let phrase = 'Warcraft'
  console.log('Before if: ' + phrase)

  if (isFan) {
    let phrase = 'For the Horde!'
    console.log('Inside if: ' + phrase)
  }

  phrase = 'For the Alliance!'
  console.log('After if: ' + phrase)
}

console.log(movie)
console.log(starWarFan())
console.log(marvelFan())
console.log(movie)
blizzardFan()