const repoContainer = document.getElementById('repos');

fetch(`https://api.github.com/users/Fabian2611/repos?sort=updated`)
    .then(response => response.json())
    .then(repos => {
        if (Array.isArray(repos)){
            document.getElementById("no-rates").remove();
        }
        repos.slice(0, 2).forEach(repo => {
            const repoElement = document.createElement('div');
            repoElement.innerHTML = `
                <p><b><a href="${repo.html_url}" target="_blank">${repo.name}</a></b></p>
                <p><q>${repo.description || 'No description.'}</q></p>
            `;
            repoContainer.appendChild(repoElement);
        });
    })
    .catch(error => console.error('Error fetching repositories:', error));
