import { getEntries, useEntries } from "./JournalDataProvider.js";
import EntryListComponent from "./JounrnalEntryList.js";

// console.log(useJournalEntries())

getEntries().then( 
    EntryListComponent
)


