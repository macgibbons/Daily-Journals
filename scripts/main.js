import { getEntries, useEntries } from "./JournalDataProvider.js";
import EntryListComponent from "./JounrnalEntryList.js";
import journalFormComponent from "./JournalForm.js";
import FilterBar from "./filter/filterBar.js";
import MoodFilter from "./filter/moodFilter.js";


getEntries()
    .then(EntryListComponent)
    .then(MoodFilter)
    // .then(FilterBar)

journalFormComponent()

