function showFeatures(bikeId) {
    var features = document.getElementById('features-' + bikeId);
    if (features.style.display === 'none') {
        features.style.display = 'block';
    } else {
        features.style.display = 'none';
    }
}
