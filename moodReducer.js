const DEFAULT_STATE = {
  mood: '┐( ˘_˘ )┌'
};

function moodReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'MOOD_HAPPY':
      return { ...state, mood: action.payload };
    case 'MOOD_SAD':
      return { ...state, mood: action.payload };    
    case 'MOOD_ANGRY':
      return { ...state, mood: action.payload };
    case 'MOOD_CONFUSED':
      return { ...state, mood: action.payload };
    default:
      return state;
  }
}
