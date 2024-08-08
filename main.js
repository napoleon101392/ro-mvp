document.addEventListener('DOMContentLoaded', function() {
    const mvpList = getMvpList();
    const mvpSelect = document.getElementById('mvp-select');
    const killTimeInput = document.getElementById('kill-time');
    const calculateBtn = document.getElementById('calculate-btn');
    const respawnList = document.getElementById('respawn-list');

    populateMvpDropdown(mvpList, mvpSelect);

    calculateBtn.addEventListener('click', function() {
        handleCalculateButtonClick(mvpList, mvpSelect, killTimeInput, respawnList);
    });
});

function getMvpList() {
    return [
        { name: 'Eddga', location: 'Payon Field 10', respawn: 120, size: 'Large', imageUrl: 'images/monster/Eddga.gif' },
        { name: 'Tao Gunka', location: 'Beach Dungeon, West Cave', respawn: 300, size: 'Small', imageUrl: 'images/monster/TaoGunka.gif' },
        { name: 'Amon Ra', location: 'Morroc Pyramid B2F', respawn: 68, size: 'Medium', imageUrl: 'images/monster/AmonRa.gif' },
        { name: 'Dracula', location: 'Geffen Dungeon 2', respawn: 60, size: 'Medium', imageUrl: 'images/monster/Dracula.gif' },
        { name: 'Golden Thief Bug', location: 'Prontera Culvert 4', respawn: 60, size: 'Small', imageUrl: 'images/monster/GoldenThiefBug.gif' },
        { name: 'Phreeoni', location: 'Morroc Field 15', respawn: 120, size: 'Medium', imageUrl: 'images/monster/Phreeoni.gif' },
        { name: 'Atroce', location: 'Rachel Field 02', respawn: 240, size: 'Large', imageUrl: 'images/monster/Atroce.gif' },
        { name: 'Lady Tanee', location: 'Ayothaya Dungeon 2', respawn: 420, size: 'Small', imageUrl: 'images/monster/LadyTanee.gif' },
        { name: 'Mistress', location: 'Mt. Mjolnir 4', respawn: 120, size: 'Small', imageUrl: 'images/monster/Mistress.gif' },
        { name: 'Moonlight Flower', location: 'Payon Cave 5', respawn: 60, size: 'Small', imageUrl: 'images/monster/MoonlightFlower.gif' },
        { name: 'Osiris', location: 'Pyramid 4F', respawn: 67, size: 'Medium', imageUrl: 'images/monster/Osiris.gif' },
        { name: 'Drake', location: 'Sunken Ship 2', respawn: 120, size: 'Large', imageUrl: 'images/monster/Drake.gif' },
        { name: 'Pharaoh', location: 'Sphinx 5', respawn: 73, size: 'Medium', imageUrl: 'images/monster/Pharaoh.gif' },
        { name: 'Garm', location: 'Lutie Field', respawn: 120, size: 'Large', imageUrl: 'images/monster/Garm.gif' },
        { name: 'Turtle General', location: 'Turtle Island 4', respawn: 63, size: 'Large', imageUrl: 'images/monster/TurtleGeneral.gif' },
        { name: 'Maya', location: 'Ant Hell 2', respawn: 130, size: 'Large', imageUrl: 'images/monster/Maya.gif' },
        { name: 'Gopinch', location: 'Dremuchi Forest', respawn: 125, size: 'Medium', imageUrl: 'images/monster/Gopinch.gif' },
        { name: 'Doppelganger', location: 'Geffen Dungeon 3', respawn: 120, size: 'Medium', imageUrl: 'images/monster/Doppelganger.gif' },
        { name: 'Egnigem Cenia', location: 'Somatology Laboratory 2', respawn: 120, size: 'Medium', imageUrl: 'images/monster/EgnigemCenia.gif' },
        { name: 'Kiel-D-01', location: 'Kiel Dungeon 2', respawn: 120, size: 'Medium', imageUrl: 'images/monster/KielD01.gif' },
        { name: 'Orc Hero', location: 'Geffen Field 14', respawn: 70, size: 'Large', imageUrl: 'images/monster/Orc Hero.gif' },
        { name: 'Evil Snake Lord', location: 'Kunlun Dungeon 3', respawn: 102, size: 'Large', imageUrl: 'images/monster/EvilSnakeLord.gif' },
        { name: 'Samurai Specter', location: 'Amatsu Dungeon 3', respawn: 96, size: 'Large', imageUrl: 'images/monster/SamuraiSpecter.gif' },
        { name: 'Vesper', location: 'Juperos Core', respawn: 120, size: 'Large', imageUrl: 'images/monster/Vesper.gif' },
        { name: 'Gloom Under Night', location: 'Rachel Sanctuary 5', respawn: 300, size: 'Large', imageUrl: 'images/monster/GloomUnderNight.gif' },
        { name: 'White Lady', location: 'Louyang Dungeon 3', respawn: 117, size: 'Large', imageUrl: 'images/monster/WhiteLady.gif' },
        { name: 'Fallen Bishop', location: 'Cursed Monastery 2', respawn: 120, size: 'Medium', imageUrl: 'images/monster/FallenBishop.gif' },
        { name: 'Baphomet', location: 'Labyrinth Forest 3', respawn: 120, size: 'Large', imageUrl: 'images/monster/Baphomet.gif' },
        { name: 'Dark Lord', location: 'Glast Heim Chuchyard', respawn: 66, size: 'Large', imageUrl: 'images/monster/DarkLord.gif' },
        { name: 'Detardeurus', location: 'Abyss Lake 3', respawn: 180, size: 'Large', imageUrl: 'images/monster/Detardeurus.gif' },
        { name: 'Ifrit', location: 'Thor\'s Volcano 3', respawn: 660, size: 'Large', imageUrl: 'images/monster/Ifrit.gif' },
        { name: 'Lord of the Dead', location: 'Niflheim', respawn: 133, size: 'Large', imageUrl: 'images/monster/LordoftheDead.gif' },
        { name: 'Orc Lord', location: 'Geffen Field 10', respawn: 123, size: 'Large', imageUrl: 'images/monster/OrcLord.gif' },
        { name: 'RSX 0806', location: 'Mine Dungeon 2', respawn: 130, size: 'Large', imageUrl: 'images/monster/RSX0806.gif' },
        { name: 'Stormy Knight', location: 'Toy Factory 2', respawn: 60, size: 'Medium', imageUrl: 'images/monster/StormyKnight.gif' },
        { name: 'Valkyrie Randgris', location: 'Odin Shrine 3', respawn: 480, size: 'Large', imageUrl: 'images/monster/ValkyrieRandgris.gif' },
        { name: 'Wounded Morocc', location: 'Dimensional Gorge', respawn: 720, size: 'Large', imageUrl: 'images/monster/WoundedMorocc.gif' },
        { name: 'Beelzebub', location: 'Cursed Monastery 3', respawn: 720, size: 'Large', imageUrl: 'images/monster/Beelzebub.gif' }
    ];
}

function populateMvpDropdown(mvpList, mvpSelect) {
    mvpList.forEach(mvp => {
        const option = document.createElement('option');
        option.value = mvp.name;
        option.textContent = `${mvp.name} (${mvp.size})`;
        mvpSelect.appendChild(option);
    });
}

function handleCalculateButtonClick(mvpList, mvpSelect, killTimeInput, respawnList) {
    const selectedMvp = mvpList.find(mvp => mvp.name === mvpSelect.value);
    let killTime = killTimeInput.value.split(':');

    if (!killTimeInput.value) {
        killTime = getCurrentMilitaryTime().split(':');
    }

    const respawnDate = calculateRespawnDate(killTime, selectedMvp.respawn);
    const formattedTime = formatTime(respawnDate);
    const now = new Date();
    let diff = calculateTimeDifference(respawnDate, now);

    if (diff < 0) {
        displayError('Error: Respawn time has already passed!');
    } else {
        if (isMvpAlreadyInList(respawnList, selectedMvp.name)) {
            alert(`MVP ${selectedMvp.name} is already in the respawn list.`);
            return;
        }

        const listItem = createListItem(selectedMvp, formattedTime, diff, respawnDate, respawnList);
        respawnList.appendChild(listItem);
        sortRespawnList(respawnList);
        startCountdown(listItem, selectedMvp, formattedTime, respawnDate, respawnList);
    }
}

function getCurrentMilitaryTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function calculateRespawnDate(killTime, respawnTime) {
    const killHour = parseInt(killTime[0], 10);
    const killMinute = parseInt(killTime[1], 10);
    let totalMinutes = killHour * 60 + killMinute + respawnTime;
    let respawnHour = Math.floor(totalMinutes / 60);
    let respawnMinute = totalMinutes % 60;

    if (respawnHour >= 24) {
        respawnHour -= 24;
    }

    const respawnDate = new Date();
    respawnDate.setHours(respawnHour, respawnMinute, 0, 0);

    const now = new Date();
    let timeDifference = (now - respawnDate) / (1000 * 60 * 60);
    if (timeDifference > 24) {
        respawnDate.setDate(respawnDate.getDate() + 1);
    }

    return respawnDate;
}

function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

function calculateTimeDifference(date1, date2) {
    return date1 - date2;
}

function displayError(message) {
    const errorSplash = document.createElement('div');
    errorSplash.textContent = message;
    errorSplash.className = 'alert alert-danger text-center';
    document.body.appendChild(errorSplash);

    setTimeout(() => {
        document.body.removeChild(errorSplash);
    }, 1000);
}

function isMvpAlreadyInList(respawnList, mvpName) {
    return Array.from(respawnList.children).some(item => item.textContent.includes(mvpName));
}

function createListItem(selectedMvp, formattedTime, diff, respawnDate, respawnList) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    const removeButton = createRemoveButton(listItem, respawnList);
    const textSpan = document.createElement('span');
    textSpan.textContent = `${selectedMvp.name} will respawn at ${formattedTime} (${Math.floor(diff / (1000 * 60 * 60))}h ${Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))}m ${Math.floor((diff % (1000 * 60)) / 1000)}s left)`;

    listItem.appendChild(textSpan);
    listItem.appendChild(removeButton);
    listItem.dataset.respawnTime = respawnDate.getTime();

    return listItem;
}

function createRemoveButton(listItem, respawnList) {
    const removeButton = document.createElement('button');
    removeButton.textContent = 'DELETE';
    removeButton.className = 'btn btn-danger btn-sm ml-auto';
    removeButton.addEventListener('click', () => {
        if (respawnList.contains(listItem)) {
            respawnList.removeChild(listItem);
        } else {
            console.error('Attempted to remove a list item that is not a child of respawnList.');
        }
    });
    return removeButton;
}

function sortRespawnList(respawnList) {
    const items = Array.from(respawnList.children);
    items.sort((a, b) => parseInt(a.dataset.respawnTime, 10) - parseInt(b.dataset.respawnTime, 10));
    items.forEach(item => respawnList.appendChild(item));
}

function startCountdown(listItem, selectedMvp, formattedTime, respawnDate, respawnList) {
    function updateCountdown() {
        const now = new Date();
        let diff = calculateTimeDifference(respawnDate, now);

        if (diff < 0) {
            if (respawnList.contains(listItem)) {
                respawnList.removeChild(listItem);
            } else {
                console.error('Attempted to remove a list item that is not a child of respawnList.');
            }
            const spawnTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }); // Get the current time in 12-hour format
            sendDiscordAlert(`${selectedMvp.name}(${selectedMvp.size}) has respawned!`);
            showAlertWithImage(`${selectedMvp.name}(${selectedMvp.size}) has respawned!`, selectedMvp, spawnTime);
            return;
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        listItem.querySelector('span').textContent = `${selectedMvp.name} (${selectedMvp.size}) will respawn at ${formattedTime} (${hours}h ${minutes}m ${seconds}s left)`;
    }

    updateCountdown();
    const countdownInterval = setInterval(() => {
        updateCountdown();
        if (calculateTimeDifference(respawnDate, new Date()) < 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

function showAlertWithImage(message, mvp, spawnTime) {
    // Ensure there is a container for alerts
    let alertContainer = document.getElementById('alert-container');
    if (!alertContainer) {
        alertContainer = document.createElement('div');
        alertContainer.id = 'alert-container';
        alertContainer.style.position = 'fixed';
        alertContainer.style.top = '10px';
        alertContainer.style.right = '10px';
        alertContainer.style.zIndex = '1000';
        alertContainer.style.width = '300px'; // Adjust width as needed
        document.body.appendChild(alertContainer);
    }

    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-info text-center';
    alertDiv.style.marginTop = '10px'; // Ensure alerts overlap each other

    const img = document.createElement('img');
    img.src = mvp.imageUrl;
    img.alt = mvp.name;
    img.style.width = '100px'; // Adjust size as needed
    img.style.height = '100px'; // Adjust size as needed
    img.style.display = 'block';
    img.style.margin = '0 auto 10px';

    const text = document.createElement('p');
    text.textContent = message;
    
    const locationText = document.createElement('p');
    locationText.textContent = `Location: ${mvp.location}`;
    
    const spawnTimeText = document.createElement('p');
    spawnTimeText.textContent = `Spawned at: ${spawnTime}`;
    
    const closeButton = document.createElement('button');
    closeButton.className = 'btn btn-danger';
    closeButton.textContent = 'Close';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.onclick = () => {
        alertContainer.removeChild(alertDiv);
    };

    alertDiv.appendChild(img);
    alertDiv.appendChild(text);
    alertDiv.appendChild(locationText);
    alertDiv.appendChild(spawnTimeText);
    alertDiv.appendChild(closeButton);

    alertContainer.appendChild(alertDiv);
}

function sendDiscordAlert(message) {
    const webhookUrl = 'https://discord.com/api/webhooks/1266272153620447325/NVSypwxpOjj83CWdDF3H9o_KgSb1fp2E5CNoZ_x9eFwEUy0hN2ZrVjO0ZaIwhu97vXL_';
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: message,
        }),
    }).catch(error => console.error('Error sending Discord alert:', error));
}