import { getEntries, useEntries } from "./JournalDataProvider.js";
import EntryListComponent from "./JounrnalEntryList.js";
import entrySaver from "./JournalEntrySave.js";
import journalFormComponent from "./JournalForm.js";
import FilterBar from "./filter/filterBar.js";

// console.log(useJournalEntries())

getEntries()
    .then(EntryListComponent)
    .then(FilterBar)

journalFormComponent()
// entrySaver()

