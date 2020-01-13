const JournalEntryComponent = (entry) => {

        return `
            <section id="entry--${entry.id}" class="journalEntry">
                <div>Date: ${entry.date}</div>
                <div>Concept: ${entry.concept}</div>
                <div>${entry.entry}</div>
                <div>Mood: ${entry.mood}</div>
                <button id="deleteEntry--${entry.id}">Delete</button>
                <button id="editEntry--${entry.id}">Edit</button>
    
            </section>
        `

}

export default JournalEntryComponent