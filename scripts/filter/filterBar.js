import MoodFilter from "./moodFilter.js"
import { useEntries } from "../JournalDataProvider.js";

/*
 You need to make a new HTML element with a class of
 `filters` in index.html
*/
const contentTarget = document.querySelector(".filters")
const eventHub = document.querySelector(".container")

const FilterBar = () => {
    // const render = () => {
    //     contentTarget.innerHTML = `
    //         ${MoodFilter()}
    //     `
    // }
    // render()
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
          eventHub.addEventListener("filterClick", event => {
            const allEntries = useEntries()
            const mood = event.detail.mood
            const matchingEntries = allEntries.filter(entry => {
                if (entry.mood === mood) {
                    return entry
                }
            })
            // content.classList.remove("emptyLog")
            render(matchingEntries)
        })

        const render = (entries) => {
            contentTarget.innerHTML = `
            <section class="entryList">
          ${
            entries.map(
              (currentEntry) => {
                return JournalEntryComponent(currentEntry)
              }
              ).join(" ")
            }
            </section>
            ` 
          }
}

export default FilterBar