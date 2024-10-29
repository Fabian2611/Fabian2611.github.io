const username = 'Fabian2611'; // Replace with your GitHub username
const repoContainer = document.getElementById('repos');

fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    .then(response => response.json())
    .then(repos => {
        repos.slice(0, 2).forEach(repo => { // Display the latest 5 repositories
            const repoElement = document.createElement('div');
            repoElement.innerHTML = `
                <p><b><a href="${repo.html_url}" target="_blank">${repo.name}</a></b></p>
                <p><q>${repo.description || 'No description.'}</q></p>
            `;
            repoContainer.appendChild(repoElement);
        });
    })
    .catch(error => console.error('Error fetching repositories:', error));
