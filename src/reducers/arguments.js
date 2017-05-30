const initalState = {
    for: [
        {
            id: 1,
            text: 'For it 1',
            user: 'Rob',
            votes: 0,
        },
        { 
            id: 2,
            text: 'For it 2',
            user: 'Rob',
            votes: 0,
        },
        { 
            id: 3,
            text: 'For it 3',
            user: 'Rob',
            votes: 0,
        },
    ],
    against: [
        { 
            id: 4,
            text: 'Against it 1',
            user: 'Rob',
            votes: 0,
        },
        { 
            id: 5,
            text: 'Against it 2',
            user: 'Rob',
            votes: 0,
        },
        { 
            id: 6, 
            text: 'Against it 3',
            user: 'Rob',
            votes: 0,
        },
    ],
}

const argumentsReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'LOAD_ARGUMENTS':
            const { forArgs, againstArgs } = action.args;
            return {
                forArgs,
                againstArgs
            }
        case 'VOTE':
            return state;
        default:
            return state;
    }
}

export default argumentsReducer;