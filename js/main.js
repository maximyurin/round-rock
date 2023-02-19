// EventListener for scroll position of Y axis
window.addEventListener('scroll', () => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})

/**
 * Function to search for necessary variables that are passed to the address line by the "GET" method.
 * @param key <-- Name of the necessary variable.
 * @returns {string} <-- Function returns the value of the necessary variable.
 */
const getVariableValueFromUrl = (key) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key) || '';
}

//Insert the name of the new user
document.querySelector('.subscriber__name').innerHTML = getVariableValueFromUrl('name').replaceAll('+', ' ');
//Insert the surname of the new user
document.querySelector('.subscriber__surname').innerHTML = getVariableValueFromUrl('surname').replaceAll('+', ' ');
//Insert the email of the new user
document.querySelector('.subscriber__email').innerHTML = getVariableValueFromUrl('email').replace('%40', '@');