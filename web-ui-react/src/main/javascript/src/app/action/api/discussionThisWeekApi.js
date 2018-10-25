import axios, { DISCUSSION_THIS_WEEK_END_POINT } from './axios/axios';

export function fetchDiscussionThisWeekApi(dispatch, typeToDisplay) {
    axios.get(DISCUSSION_THIS_WEEK_END_POINT).then(function (response) {
        console.log(response);

        var questions = [ // change this to read from server response when the Back End ready, and make sure back end give desired response in json
            { title: 'Happy Hour Week 1 September 2018 Performance?', id: 1 },
            { title: 'Q2 2018 Mitrais Bandung Staff Outing?', id: 2, tags: ['FEATURED'], badge: 'Bandung' },
            { title: 'Mitrais Benefit 2018 Update', id: 3, tags: ['HOT'] },
            { title: 'What the effective way to fills up Mitrais CRS', id: 4, tags: ['HOT', 'MY_REGION'] }
        ].filter((item, index) => {
            return (typeToDisplay === 'ALL' || (item.tags && item.tags.includes(typeToDisplay)));
        });

        dispatch({
            type: "SET_DISCUSSION_THIS_WEEK",
            payload: {
                questions: questions,
                typeToDisplay: typeToDisplay
            }
        })
    }.bind(this)).catch(function (error) {
        console.log(error);
    });
}