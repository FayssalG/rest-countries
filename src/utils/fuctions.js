async function fetchData(url , q='' , params=''){
    const response = await fetch(url + q +params)
    if (!response.ok) {
        throw new Error('404')

    }
    const parsedResponse = response.json()
    return parsedResponse
}

export {fetchData}