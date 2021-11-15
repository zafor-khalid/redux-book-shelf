import allBooks from "../../fakeData/books.json"

const initailState = {
    readingList: [],
    discoverList: allBooks,
    finishedList: []
}

const bookReducers = (state = initailState, action) => {
    switch (action.type) {
        case 'ADD_TO_LIST': {
            const newState = {
                ...state,
                readingList: [...state.readingList, action.payload]
            }
            return newState;
        }
        case 'REMOVE_FROM_LIST': {
            const newState = {
                ...state,
                readingList: state.readingList.filter(b => b.id !== action.payload)
            }
            return newState;

        }
        default: {
            return state;
        }

    }
}

export default bookReducers;
