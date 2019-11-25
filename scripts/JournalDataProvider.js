/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
    {
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        date: "11/22/2019",
        concept: "Modular Javascript",
        entry: "We used javascript to automate the creation of objects on the DOM. We built an array of objects and then defined a function to interate over that object. we then created a function to insert those objects as HTML so they display on the webpage",
        mood: "Ok",

    },
    {
        date: "11/25/2019",
        concept: "Javascript",
        entry: "Continuing with modular javascript, today we learned how to automate the creation of dialog boxes. We learned how to define a function that selects the first word of a class and the sibling item so that it then automates the creation of dialog boxes",
        mood: "ok",

    }
 
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}