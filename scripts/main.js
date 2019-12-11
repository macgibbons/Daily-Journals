import { getEntries, useEntries } from "./JournalDataProvider.js";
import EntryListComponent from "./JounrnalEntryList.js";
import entrySaver from "./JournalEntrySave.js";

// console.log(useJournalEntries())

getEntries().then( 
    EntryListComponent
)

entrySaver()

