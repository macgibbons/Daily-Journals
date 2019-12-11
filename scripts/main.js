import { getEntries, useEntries } from "./JournalDataProvider.js";
import EntryListComponent from "./JounrnalEntryList.js";
import entrySaver from "./JournalEntrySave.js";
import journalFormComponent from "./JournalForm.js";

// console.log(useJournalEntries())

getEntries().then( 
    EntryListComponent
)

journalFormComponent()
// entrySaver()

