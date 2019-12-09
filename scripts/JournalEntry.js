const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div>Date: ${entry.date}</div>
            <div>Concept: ${entry.concept}</div>
            <div>${entry.entry}</div>
            <div>Mood: ${entry.mood}</div>

        </section>
    `
}

export default JournalEntryComponent