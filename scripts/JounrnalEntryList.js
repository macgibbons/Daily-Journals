import JournalEntryComponent from "./JournalEntry.js"
import { useEntries } from "./JournalDataProvider.js"

const entryLog = document.querySelector("#entryLog")

const EntryListComponent = () => {

    const entries = useEntries()

    entryLog.innerHTML += `
        ${
               entries.map(entry => {
                   return JournalEntryComponent(entry)}).join("") 
        }
    `
}



export default EntryListComponent