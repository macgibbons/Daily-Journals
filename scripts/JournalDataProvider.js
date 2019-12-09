let entries = []

export const useEntries = () => {
    return entries
}

export const getEntries = () => {
    return fetch("./api/entries.json")
        .then(response => response.json())
        .then(
            parsedEntries => {
                console.table(parsedEntries)
                entries = parsedEntries.entries.slice()
            }
        )
}
