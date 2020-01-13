import MoodFilter from "./moodFilter.js"

/*
 You need to make a new HTML element with a class of
 `filters` in index.html
*/
const contentTarget = document.querySelector(".filters")
const eventHub = document.querySelector(".container")

const FilterBar = () => {
    const render = () => {
        contentTarget.innerHTML = `
            ${MoodFilter()}
        `
    }
    render()
        eventHub.addEventListener("click", event => {
            if (event.target.name ==="filter") {
                console.log("filter clicked");
                
              const mood = event.target.value
              const message = new CustomEvent("filterClick", {
                detail: {
                  mood: mood
                }
              })
              eventHub.dispatchEvent(message)
            }
          })
}

export default FilterBar