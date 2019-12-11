import { saveEntry } from "./JournalDataProvider.js";

const contentTarget = document.querySelector(".journalFormContainer")
const eventHub = document.querySelector(".container")


const journalFormComponent = () => {
    const render = () => {
        contentTarget.innerHTML = `
        <form action="">
                <fieldset>
                    <label for="journalDate">Date of Journal</label>
                    <input type="date" name="journalDate" id="journalDate">
                </fieldset>
                <fieldset>
                    <label for="journalDate">Concepts Covered</label>
                    <input type="text" name="concepts" id="concepts">
                </fieldset>
                <fieldset>
                    <label for="journalEntry">Journal Entry</label>
                    <textarea id="entry__content" rows="10" cols="68"></textarea>
                </fieldset>
                <fieldset>
                    <label for="Mood">Mood</label>
                    <select name="mood" id="mood">
                        <option value="happy">Happy</option>
                        <option value="neutral">Neutral</option>
                        <option value="sad">Sad</option>
                    </select>
                </fieldset>
                <fieldset class="button">
                    <button id="save__entry" type="submit" form="" value="Submit">enter</button>
                </fieldset>
                
            </form>
        `
    }

    render()
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "save__entry") {
            
            const entryDate= document.querySelector("#journalDate").value
            const entryConcept= document.querySelector("#concepts").value
            const entryContent= document.querySelector("#entry__content").value
            const entryMood= document.querySelector("#mood").value

            const entryToSave = {
                date: entryDate,
                concept: entryConcept,
                entry: entryContent,
                mood: entryMood
            }

        
            saveEntry(entryToSave)
        }
    })
}
export default journalFormComponent