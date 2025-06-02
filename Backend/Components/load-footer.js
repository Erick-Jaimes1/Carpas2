document.addEventListener('DOMContentLoaded', function() {
    fetch('/Views/Components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
});