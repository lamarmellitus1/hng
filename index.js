document.addEventListener("DOMContentLoaded", function() {
    const infoContainer = document.getElementById('infoContainer');

    const nameDiv = document.createElement('div');
    nameDiv.className = 'info name';
    nameDiv.textContent = 'Name: Okoro Mellitus';
    
    const usernameDiv = document.createElement('div');
    usernameDiv.className = 'info username';
    usernameDiv.textContent = 'Username: okoro mellitus';
    
    const emailDiv = document.createElement('div');
    emailDiv.className = 'info email';
    emailDiv.textContent = 'Email: okoromellitus@gmail.com';
    
    infoContainer.appendChild(nameDiv);
    infoContainer.appendChild(usernameDiv);
    infoContainer.appendChild(emailDiv);
});
