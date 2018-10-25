import { fetchDiscussionThisWeekApi } from './api/discussionThisWeekApi'

export function fetchDiscussionThisWeek(typeToDisplay) {
    return (dispatch) => {
        fetchDiscussionThisWeekApi(dispatch, typeToDisplay);
    }
}