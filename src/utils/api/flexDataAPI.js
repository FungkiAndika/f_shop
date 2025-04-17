export const flexDataAPI = (rawData) => {
    return rawData.map(item => ({
        name: item.name
    }))
}
