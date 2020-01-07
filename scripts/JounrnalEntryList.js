import JournalEntryComponent from "./JournalEntry.js"
import { useEntries, deleteEntry, getEntries } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")

const entryLog = document.querySelector("#entryLog")

const EntryListComponent = () => {

    const entries = useEntries()
    eventHub.addEventListener("click", clickEvent => {
        // if the id of the button starts with "deleteNote--" then it performs the next function
        if (clickEvent.target.id.startsWith("deleteEntry--")) {
            
            // this creates an array and .split takes the "deleteNote" and "#" value from the id and splits it 
            // into separate variables
            const [prefix, id] = clickEvent.target.id.split("--")
            
            // this creates a new custom event "deleteNoteClicked" where it builds an object containing the ID of  
            // the button clicked so we now can use that info to delete that specific note
            const message = new CustomEvent("deleteEntryClicked", {
                detail: {
                    entryId: id
                }
            })
            // this dispatches the custom event message to the eventHub
            eventHub.dispatchEvent(message)
            // this envokes the deleteNote function and re-renders the notes
            deleteEntry(id).then( () => renderEntriesAgain() )
        }
    })

    const renderEntriesAgain = () => {
  
        const allTheEntries = useEntries()
        render(allTheEntries)

    }
    const render = (entries) => {
        // const entries = useEntries()
      
        entryLog.innerHTML =
        
        `
            ${
                   entries.map(
                       entry => {
                       return JournalEntryComponent(entry)}).join("") 
            }
        `
    }
    getEntries().then(
        render(entries)
    )
}



export default EntryListComponent