let entries = []

export const useEntries = () => {
    return entries
}

export const getEntries = () => {
    return fetch('http://localhost:3000/entries')
        .then(response => response.json())
        .then(
            parsedEntries => {
                // console.table(parsedEntries)
                entries = parsedEntries.slice()
            }
        )
}

export const saveEntry = entries => {
    return fetch('http://localhost:3000/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entries)
    })
    .then(getEntries)
}


export const deleteEntry = entryId => {
    return fetch(`http://localhost:3000/entries/${entryId}`, {
        method: "DELETE"
    })
        .then(getEntries)
}

export const editEntry  = (entry) => {
    return fetch(`http://localhost:3000/entries/${entry.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
}