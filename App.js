const store = Redux.createStore(moodReducer)

const mood = document.getElementById('face')

document.getElementById('happy').addEventListener('click', () => {
  store.dispatch({ type: 'MOOD_HAPPY', payload: '٩(◕‿◕｡)۶' });
});
document.getElementById('sad').addEventListener('click', () => {
  store.dispatch({ type: 'MOOD_SAD', payload: '(ಥ﹏ಥ)' });
});
document.getElementById('angry').addEventListener('click', () => {
  store.dispatch({ type: 'MOOD_ANGRY', payload: '٩(ఠ益ఠ)۶' });
});
document.getElementById('confused').addEventListener('click', () => {
  store.dispatch({ type: 'MOOD_CONFUSED', payload: 'ლ(ಠ_ಠ ლ)' });
});

function renderFace() {
  mood.innerHTML = store.getState().mood;
}

renderFace()
store.subscribe(renderFace)