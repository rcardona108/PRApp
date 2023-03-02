const ChangeExercise = (state = initialState, action) => {
    switch (action.type) {
      case 'REPS':
        return state = action.payload;
      default:
        return state;
    }
  };
    
  export default ChangeExercise;