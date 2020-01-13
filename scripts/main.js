import { getEntries,  } from "./JournalDataProvider.js";
import EntryListComponent from "./JounrnalEntryList.js";
import journalFormComponent from "./JournalForm.js";


getEntries()
    .then(EntryListComponent)
    .then(journalFormComponent)


