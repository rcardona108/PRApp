const initialState = 'select a exercise';
  
const ChangeExercise = (state = initialState, action) => {
  switch (action.type) {
    case 'ChangeExercise':
      return state = action.payload;
    default:
      return state;
  }
};
  
export default ChangeExercise;