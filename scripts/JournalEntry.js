import { useEntries, deleteEntry } from "./JournalDataProvider.js";

const eventHub = document.querySelector(".container")

const JournalEntryComponent = (entry) => {

        return `
            <section id="entry--${entry.id}" class="journalEntry">
                <div>Date: ${entry.date}</div>
                <div>Concept: ${entry.concept}</div>
                <div>${entry.entry}</div>
                <div>Mood: ${entry.mood}</div>
                <button id="deleteEntry--${entry.id}">Delete</button>
    
            </section>
        `

}

export default JournalEntryComponent