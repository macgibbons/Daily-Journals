import { saveEntry, editEntry, useEntries } from "./JournalDataProvider.js";

const contentTarget = document.querySelector(".journalFormContainer")
const eventHub = document.querySelector(".container")


const journalFormComponent = () => {
    const render = () => {
        contentTarget.innerHTML = `
        <form action="">
                <fieldset>
                    <input type="hidden" id="entry-id"/>
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

    eventHub.addEventListener("editButtonClicked", event => {
        const entryToBeEdited = event.detail.entryId

        const allEntryArray = useEntries()

        const theFoundedEntry = allEntryArray.find(
            (currentEntryObject) => {
                return currentEntryObject.id === parseInt(entryToBeEdited, 10)
            }
        )

        document.querySelector("#entry-id").value = theFoundedEntry.id
        document.querySelector("#entry__content").value = theFoundedEntry.entry
        document.querySelector("#mood").value = theFoundedEntry.mood
        document.querySelector("#concepts").value = theFoundedEntry.concept
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "save__entry") {
           // Does the hidden input field have a value?
           const hiddenInputValue = document.querySelector("#entry-id").value

           // If so, edit the note with a PUT operation
           if (hiddenInputValue !== "") {

               const editedEntry = {
                   id: parseInt(document.querySelector("#entry-id").value, 10),
                   entry: document.querySelector("#entry__content").value,
                   mood: document.querySelector("#mood").value,
                   concept: document.querySelector("#concepts").value,
                   date: document.querySelector("#journalDate").value
               }

               editEntry(editedEntry).then(() => {
                   eventHub.dispatchEvent(new CustomEvent("entryHasBeenEdited"))
               })
           } 
        } else {
            
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