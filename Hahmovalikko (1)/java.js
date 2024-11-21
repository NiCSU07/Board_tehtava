document.getElementById('submitButton').addEventListener('click', function() {
    var feedback = document.getElementById('feedback').value;
    if (feedback) {
        window.location.href = 'vastaus.html';
    } else {
        alert('Ole hyvä ja anna palautetta ennen lähettämistä.');
    }
});
