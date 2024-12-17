const players = [
    { name: "John Doe", sport: "soccer", location: "Buenos Aires", level: "beginner", time: "14:00" },
    { name: "Jane Smith", sport: "basketball", location: "Madrid", level: "intermediate", time: "16:00" },
    { name: "Carlos Pérez", sport: "tennis", location: "Barcelona", level: "advanced", time: "10:00" },
    { name: "Ana Torres", sport: "paddle", location: "Buenos Aires", level: "beginner", time: "18:00" },
    // Agregar más jugadores según sea necesario
];

document.addEventListener('DOMContentLoaded', () => {
    const sportFilter = document.getElementById('sport');
    const locationFilter = document.getElementById('location');
    const levelFilter = document.getElementById('level');
    const timeFilter = document.getElementById('time');
    const playersList = document.getElementById('players');

    function filterPlayers() {
        const sport = sportFilter.value;
        const location = locationFilter.value.toLowerCase();
        const level = levelFilter.value;
        const time = timeFilter.value;

        const filteredPlayers = players.filter(player => {
            const matchesSport = sport === 'all' || player.sport === sport;
            const matchesLocation = player.location.toLowerCase().includes(location);
            const matchesLevel = level === 'all' || player.level === level;
            const matchesTime = !time || player.time === time;

            return matchesSport && matchesLocation && matchesLevel && matchesTime;
        });

        displayPlayers(filteredPlayers);
    }

    function displayPlayers(players) {
        playersList.innerHTML = '';
        if (players.length > 0) {
            players.forEach(player => {
                const playerItem = document.createElement('li');
                playerItem.textContent = `${player.name} - ${player.sport} - ${player.location} - ${player.level} - ${player.time}`;
                playersList.appendChild(playerItem);
            });
        } else {
            playersList.innerHTML = '<li>No players found with these filters.</li>';
        }
    }

    // Apply filters when any input changes
    sportFilter.addEventListener('change', filterPlayers);
    locationFilter.addEventListener('input', filterPlayers);
    levelFilter.addEventListener('change', filterPlayers);
    timeFilter.addEventListener('input', filterPlayers);

    // Initial display
    filterPlayers();
});
