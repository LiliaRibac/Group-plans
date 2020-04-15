const initState = {
  projects: [
    {
      id: '1',
      title: 'Make the bed',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
    },
    {
      id: '2',
      title: 'Buy milk',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
    },
    {
      id: '3',
      title: 'Do yoga',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
    },
  ],
};

//here we will manipulate the state when we will have data
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('create project', action.project);
  }
  return state;
};
export default projectReducer;
