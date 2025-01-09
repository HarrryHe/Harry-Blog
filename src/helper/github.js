export async function fetchGitHubRepos(username, limit = 5) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch GitHub repositories");
        }

        const data = await response.json();

        const sortedRepos = data
        .map((repo) => ({
            name: repo.name,
            description: repo.description || "No description provided",
            url: repo.html_url,
            stars: repo.stargazers_count,
            language: repo.language || "Not specified",
            created_at: new Date(repo.created_at).toLocaleDateString(),
        }))
        .sort((a, b) => b.stars - a.stars);

        return sortedRepos.slice(0, limit);
    } catch (error) {
        console.error("Error fetching GitHub repositories:", error.message);
        return [];
    }
}
