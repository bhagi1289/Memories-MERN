export default (posts = []/* state*/, action) => {
    switch (action.type) {
        case 'CREATE':
            return posts;

        case 'FETCH_ALL':
            return action.payload;
        default:
            return posts;
    }
}