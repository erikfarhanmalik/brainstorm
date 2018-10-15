
export default function discussionThisWeekReducer(state = {}, action) {
    switch (action.type) {
        case 'SET_DISCUSSION_THIS_WEEK':
            return {
                ...state,
                discussionThisWeek: {
                    ...state.discussionThisWeek,
                    questions: action.payload.questions,
                    typeToDisplay: action.payload.typeToDisplay
                }
            }
        default:
            return state;
    }
}