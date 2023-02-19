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
    let query = String(document.location.href).split('?');
    if (query[1]) {
        let part = query[1].split('&');
        for (let i = 0; i < part.length; i++) {
            let data = part[i].split('=');
            if (data[0] === key && data[1]) return data[1];
        }
    }
    return '';
}

//Write the name of the new user
document.getElementsByClassName('subscriber__name')[0].innerHTML = getVariableValueFromUrl('name').replaceAll('+', ' ');
//Write the surname of the new user
document.getElementsByClassName('subscriber__surname')[0].innerHTML = getVariableValueFromUrl('surname').replaceAll('+', ' ');
//Write the email of the new user
document.getElementsByClassName('subscriber__email')[0].innerHTML = getVariableValueFromUrl('email').replace('%40', '@');