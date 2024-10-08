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
        { name: 'Amon Ra', location: 'Morroc Pyramid B2F', respawn: 68, size: 'Medium', imageUrl: 'images/monster/AmonRa.gif' },
        { name: 'Atroce', location: 'Rachel Field 02', respawn: 240, size: 'Large', imageUrl: 'images/monster/Atroce.gif' },
        { name: 'Baphomet', location: 'Labyrinth Forest 3', respawn: 120, size: 'Large', imageUrl: 'images/monster/Baphomet.gif' },
        { name: 'Beelzebub', location: 'Cursed Monastery 3', respawn: 720, size: 'Large', imageUrl: 'images/monster/Beelzebub.gif' },
        { name: 'Cecil Damon', location: 'Bio Lab 3', respawn: 120, size: 'Medium', imageUrl: 'images/monster/CecilDamon.gif' },
        { name: 'Dark Lord', location: 'Glast Heim Chuchyard', respawn: 66, size: 'Large', imageUrl: 'images/monster/DarkLord.gif' },
        { name: 'Detardeurus', location: 'Abyss Lake 3', respawn: 180, size: 'Large', imageUrl: 'images/monster/Detardeurus.gif' },
        { name: 'Doppelganger', location: 'Geffen Dungeon 3', respawn: 123, size: 'Medium', imageUrl: 'images/monster/Doppelganger.gif' },
        { name: 'Dracula', location: 'Geffen Dungeon 2', respawn: 60, size: 'Medium', imageUrl: 'images/monster/Dracula.gif' },
        { name: 'Drake', location: 'Sunken Ship 2', respawn: 120, size: 'Large', imageUrl: 'images/monster/Drake.gif' },
        { name: 'Eddga', location: 'Payon Field 10', respawn: 120, size: 'Large', imageUrl: 'images/monster/Eddga.gif' },
        { name: 'Egnigem Cenia', location: 'Somatology Laboratory 2', respawn: 120, size: 'Medium', imageUrl: 'images/monster/EgnigemCenia.gif' },
        { name: 'Eremes Guile', location: 'Bio Lab 3', respawn: 120, size: 'Medium', imageUrl: 'images/monster/EremesGuile.gif' },
        { name: 'Evil Snake Lord', location: 'Kunlun Dungeon 3', respawn: 102, size: 'Large', imageUrl: 'images/monster/EvilSnakeLord.gif' },
        { name: 'Fallen Bishop', location: 'Cursed Monastery 2', respawn: 120, size: 'Medium', imageUrl: 'images/monster/FallenBishop.gif' },
        { name: 'Garm', location: 'Lutie Field', respawn: 120, size: 'Large', imageUrl: 'images/monster/Garm.gif' },
        { name: 'Gloom Under Night', location: 'Rachel Sanctuary 5', respawn: 308, size: 'Large', imageUrl: 'images/monster/GloomUnderNight.gif' },
        { name: 'Golden Thief Bug', location: 'Prontera Culvert 4', respawn: 60, size: 'Small', imageUrl: 'images/monster/GoldenThiefBug.gif' },
        { name: 'Gopinch', location: 'Dremuchi Forest', respawn: 125, size: 'Medium', imageUrl: 'images/monster/Gopinch.gif' },
        { name: 'Howard Alt-Eisen', location: 'Bio Lab 3', respawn: 120, size: 'Large', imageUrl: 'images/monster/HowardAltEisen.gif' },
        { name: 'Ifrit', location: 'Thor\'s Volcano 3', respawn: 660, size: 'Large', imageUrl: 'images/monster/Ifrit.gif' },
        { name: 'Kathryne Keyron', location: 'Bio Lab 3', respawn: 120, size: 'Medium', imageUrl: 'images/monster/KathryneKeyron.gif' },
        { name: 'Kiel-D-01', location: 'Kiel Dungeon 2', respawn: 120, size: 'Medium', imageUrl: 'images/monster/KielD01.gif' }, // todo:: check spawn time, this is not correct
        { name: 'Lady Tanee', location: 'Ayothaya Dungeon 2', respawn: 420, size: 'Small', imageUrl: 'images/monster/LadyTanee.gif' },
        { name: 'Lord of the Dead', location: 'Niflheim', respawn: 133, size: 'Large', imageUrl: 'images/monster/LordoftheDead.gif' },
        { name: 'Margaretha Sorin', location: 'Bio Lab 3', respawn: 120, size: 'Medium', imageUrl: 'images/monster/MargarethaSorin.gif' },
        { name: 'Maya', location: 'Ant Hell 2', respawn: 129, size: 'Large', imageUrl: 'images/monster/Maya.gif' },
        { name: 'Mistress', location: 'Mt. Mjolnir 4', respawn: 128, size: 'Small', imageUrl: 'images/monster/Mistress.gif' },
        { name: 'Moonlight Flower', location: 'Payon Cave 5', respawn: 60, size: 'Small', imageUrl: 'images/monster/MoonlightFlower.gif' },
        { name: 'Orc Hero', location: 'Geffen Field 14', respawn: 70, size: 'Large', imageUrl: 'images/monster/OrcHero.gif' },
        { name: 'Orc Lord', location: 'Geffen Field 10', respawn: 123, size: 'Large', imageUrl: 'images/monster/OrcLord.gif' },
        { name: 'Osiris', location: 'Pyramid 4F', respawn: 65, size: 'Medium', imageUrl: 'images/monster/Osiris.gif' },
        { name: 'Pharaoh', location: 'Sphinx 5', respawn: 63, size: 'Medium', imageUrl: 'images/monster/Pharaoh.gif' },
        { name: 'Phreeoni', location: 'Morroc Field 15', respawn: 120, size: 'Medium', imageUrl: 'images/monster/Phreeoni.gif' },
        { name: 'RSX 0806', location: 'Mine Dungeon 2', respawn: 135, size: 'Large', imageUrl: 'images/monster/RSX0806.gif' },
        { name: 'Samurai Specter', location: 'Amatsu Dungeon 3', respawn: 96, size: 'Large', imageUrl: 'images/monster/SamuraiSpecter.gif' },
        { name: 'Seyren Windsor', location: 'Bio Lab 3', respawn: 120, size: 'Large', imageUrl: 'images/monster/SeyrenWindsor.gif' },
        { name: 'Stormy Knight', location: 'Toy Factory 2', respawn: 63, size: 'Medium', imageUrl: 'images/monster/StormyKnight.gif' },
        { name: 'Tao Gunka', location: 'Beach Dungeon, West Cave', respawn: 300, size: 'Small', imageUrl: 'images/monster/TaoGunka.gif' },
        { name: 'Turtle General', location: 'Turtle Island 4', respawn: 63, size: 'Large', imageUrl: 'images/monster/TurtleGeneral.gif' },
        { name: 'Valkyrie Randgris', location: 'Odin Shrine 3', respawn: 480, size: 'Large', imageUrl: 'images/monster/ValkyrieRandgris.gif' },
        { name: 'Vesper', location: 'Juperos Core', respawn: 127, size: 'Large', imageUrl: 'images/monster/Vesper.gif' },
        { name: 'White Lady', location: 'Louyang Dungeon 3', respawn: 117, size: 'Large', imageUrl: 'images/monster/WhiteLady.gif' },
        { name: 'Wounded Morocc', location: 'Dimensional Gorge', respawn: 720, size: 'Large', imageUrl: 'images/monster/WoundedMorocc.gif' },      
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

function formatTimeInput(input) {
    // Step 1: Check if the input contains a colon
    if (input.includes(':')) {
        return input;
    }

    // Step 2: Determine the position to insert the colon
    let position;
    if (input.length % 2 === 0) {
        // Even length: insert in the center
        position = input.length / 2;
    } else {
        // Odd length: insert after the first digit
        position = 1;
    }

    // Step 3: Insert the colon at the determined position
    return input.slice(0, position) + ':' + input.slice(position);
}

function handleCalculateButtonClick(mvpList, mvpSelect, killTimeInput, respawnList) {
    const selectedMvp = mvpList.find(mvp => mvp.name === mvpSelect.value);
    let killTime = killTimeInput.value.split(':');

    if (killTime[0] > 24) {
        displayError('Invalid hours');
        return;
    }

    if (killTime[1] > 59) {
        displayError('Invalid minutes');
        return;
    }

    if (!killTimeInput.value) {
        killTime = getCurrentMilitaryTime().split(':');
    }

    // Check if the MVP is already in the respawn list
    if (isMvpAlreadyInList(respawnList, selectedMvp.name)) {
        displayError(`${selectedMvp.name} is already in the respawn list.`);
        return;
    }

    const respawnDate = calculateRespawnDate(killTime, selectedMvp.respawn);
    const formattedTime = formatTime(respawnDate);
    const now = new Date();
    let diff = calculateTimeDifference(respawnDate, now);

    if (respawnDate < now) {
        displayError('Invalid kill time. Please select a future time.');
        return;
    }

    const listItem = createListItem(selectedMvp, formattedTime, diff, respawnDate, respawnList);
    respawnList.appendChild(listItem);
    sortRespawnList(respawnList);
    startCountdown(listItem, selectedMvp, formattedTime, respawnDate, respawnList);
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

    // Adjust the date if the respawn time is on the next day
    // if (respawnHour < killHour || (respawnHour === killHour && respawnMinute < killMinute)) {
    //     respawnDate.setDate(respawnDate.getDate());
    // }

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
            clearInterval(listItem.countdownInterval); // Clear the interval
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
    listItem.countdownInterval = setInterval(() => {
        updateCountdown();
        if (calculateTimeDifference(respawnDate, new Date()) < 0) {
            clearInterval(listItem.countdownInterval);
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
    closeButton.className = 'btn btn-success';
    closeButton.textContent = 'DONE';
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
    const webhookUrl = '';
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