function modifyDisplay() {
    // Get needed elements from the DOM
    const tracker = document.getElementById('trackers');
    const results = document.getElementById('results');

    // Make tracker and results boxes visible
    tracker.style.display = 'block';
    results.style.display = 'block';
}


export {
    modifyDisplay
};