import { saveEntry } from "./JournalDataProvider.js";

const eventHub = document.querySelector(".container")


const entrySaver = () => {

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

    // eventHub.addEventListener("noteSaved", (evt) => {
    //         const noteObject = evt.detail.note
    // }
    // )
}

export default entrySaver