let entries = []

export const useEntries = () => {
    return entries
}

export const getEntries = () => {
    return fetch('http://localhost:3000/entries')
        .then(response => response.json())
        .then(
            parsedEntries => {
                console.table(parsedEntries)
                entries = parsedEntries.slice()
            }
        )
}

export const saveEntry = entries => {
    fetch('http://localhost:3000/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entries)
    })
    .then(getEntries)
}