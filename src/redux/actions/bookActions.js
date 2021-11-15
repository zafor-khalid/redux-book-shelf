export const addToReadingList = (payload) => {

    return {
        type: "ADD_TO_LIST",
        payload,
    }

}

export const removeFromReadingList = (payload) => {
    return {
        type: "REMOVE_FROM_LIST",
        payload,
    }

}