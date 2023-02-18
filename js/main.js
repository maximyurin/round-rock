// EventListener for scroll position of Y axis
window.addEventListener('scroll', () => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})