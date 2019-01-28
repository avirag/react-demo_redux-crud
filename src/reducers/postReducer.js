const initState = [
  { id: 1, title: 'title1', body: 'body1' },
  { id: 2, title: 'title2', body: 'body2' },
  { id: 3, title: 'title3', body: 'body3' }
];

const postReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_POST':
      return state.concat([action.data]);
    case 'EDIT_POST':
      return state.map(post => post.id !== action.id ? post : {...post, editing: !post.editing});
    case 'DELETE_POST':
      return state.filter(post => post.id !== action.id);
    case 'UPDATE':
      return state.map(post => {
        if(post.id !== action.id) {
          return post;
        }

        return {
          ...post,
          title: action.data.title,
          body: action.data.body,
          editing: !post.editing,
        }
      });
    default:
      return state;
  }
}

export default postReducer;