export default function collectionReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_COLLECTION':
            return [...state,
                Object.assign({}, action.collection)
            ];
        default:
            return state;
    }
}