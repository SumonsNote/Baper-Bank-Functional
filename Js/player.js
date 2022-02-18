function setStylePlayer(player) {
    player.style.border = '1px solid tomato';
    player.style.margin = '15px';
    player.style.padding = '15px';
    player.style.borderRadius = '15px';
}
const players = document.getElementsByClassName('player');
for (const player of players) {
    setStylePlayer(player);
}

function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, alias repellat fuga neque iure ipsa quaerat et ut praesentium repudiandae, ullam omnis debitis quasi vero deserunt aliquam, ab perspiciatis est!</p>
    `
    setStylePlayer(player);
    playersContainer.appendChild(player);
}

document.getElementById('players').addEventListener('click', function (e) {
    if (e.target.tagName.toLowerCase() == 'div') {
        e.target.style.backgroundColor = 'yellow';
    }
    else {
        e.target.parentNode.style.backgroundColor = 'yellow';
    }
})