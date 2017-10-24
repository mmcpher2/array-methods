
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

const insertPlanets = function (planets) {
    planetEl.innerHTML += `
    <article>${planets}</article>
    `
}
planets.forEach(insertPlanets)

/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const planetCapitalizer = planets.map(function (planet) {
        const firstLetter = planet.charAt(0)
        const capitalFl = firstLetter.toUpperCase()
        const brokenPlanet = planet.replace(firstLetter, "")
        const fixedPlanet = capitalFl + brokenPlanet
        return fixedPlanet
})
console.log(planetCapitalizer)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const eLetterPlanets = planets.filter(function (ePlanets) {
        const filteredPlanets = ePlanets.includes("e")
        if (filteredPlanets === true) {
            return ePlanets
        }
})
console.log(eLetterPlanets)

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const newSentence = words.reduce(function (allWords, eachWord){
        const sentenceBuilder = allWords + " " + eachWord
        return sentenceBuilder
})
console.log(newSentence)