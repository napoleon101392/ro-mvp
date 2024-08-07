document.addEventListener('DOMContentLoaded', function() {
    const mvpList = [
        { name: 'Eddga', location: 'Payon Field 10', respawn: 120, size: 'Large' },
        { name: 'Tao Gunka', location: 'Beach Dungeon, West Cave', respawn: 300, size: 'Small' }, // NEED
        { name: 'Amon Ra', location: 'Morroc Pyramid B2F', respawn: 68, size: 'Medium' },
        { name: 'Dracula', location: 'Geffen Dungeon 2', respawn: 60, size: 'Medium' },
        { name: 'Golden Thief Bug', location: 'Prontera Culvert 4', respawn: 60, size: 'Small' }, // NEED
        { name: 'Phreeoni', location: 'Morroc Field 15', respawn: 120, size: 'Medium' },
        { name: 'Atroce', location: 'Rachel Field 02', respawn: 240, size: 'Large' },
        { name: 'Lady Tanee', location: 'Ayothaya Dungeon 2', respawn: 420, size: 'Small' },
        { name: 'Mistress', location: 'Mt. Mjolnir 4', respawn: 120, size: 'Small' },
        { name: 'Moonlight Flower', location: 'Payon Cave 5', respawn: 60, size: 'Small' },
        { name: 'Osiris', location: 'Pyramid 4F', respawn: 67, size: 'Medium' },
        { name: 'Drake', location: 'Sunken Ship 2', respawn: 120, size: 'Large' },
        { name: 'Pharaoh', location: 'Sphinx 5', respawn: 73, size: 'Medium' },
        { name: 'Garm', location: 'Lutie Field', respawn: 120, size: 'Large' },
        { name: 'Turtle General', location: 'Turtle Island 4', respawn: 63, size: 'Large' },
        { name: 'Maya', location: 'Ant Hell 2', respawn: 130, size: 'Large' },
        { name: 'Gopinch', location: 'Dremuchi Forest', respawn: 125, size: 'Medium' },
        { name: 'Doppelganger', location: 'Geffen Dungeon 3', respawn: 120, size: 'Medium' },
        { name: 'Egnigem Cenia', location: 'Somatology Laboratory 2', respawn: 120, size: 'Medium' }, // NEED
        { name: 'Kiel-D-01', location: 'Kiel Dungeon 2', respawn: 120, size: 'Medium' },
        { name: 'Orc Hero', location: 'Geffen Field 14', respawn: 70, size: 'Large' },
        { name: 'Evil Snake Lord', location: 'Kunlun Dungeon 3', respawn: 102, size: 'Large' },
        { name: 'Samurai Specter', location: 'Amatsu Dungeon 3', respawn: 96, size: 'Large' },
        { name: 'Vesper', location: 'Juperos Core', respawn: 120, size: 'Large' }, // NEED
        { name: 'Gloom Under Night', location: 'Rachel Sanctuary 5', respawn: 300, size: 'Large' },
        { name: 'White Lady', location: 'Louyang Dungeon 3', respawn: 117, size: 'Large' },
        { name: 'Fallen Bishop', location: 'Cursed Monastery 2', respawn: 130, size: 'Medium' }, // NEED
        { name: 'Baphomet', location: 'Labyrinth Forest 3', respawn: 120, size: 'Large' },
        { name: 'Dark Lord', location: 'Glast Heim Chuchyard', respawn: 66, size: 'Large' },
        { name: 'Detardeurus', location: 'Abyss Lake 3', respawn: 180, size: 'Large' },
        { name: 'Ifrit', location: 'Thor\'s Volcano 3', respawn: 660, size: 'Large' },
        { name: 'Lord of the Dead', location: 'Niflheim', respawn: 133, size: 'Large' },
        { name: 'Orc Lord', location: 'Geffen Field 10', respawn: 123, size: 'Large' },
        { name: 'RSX 0806', location: 'Mine Dungeon 2', respawn: 130, size: 'Large' },
        { name: 'Stormy Knight', location: 'Toy Factory 2', respawn: 60, size: 'Medium' },
        { name: 'Valkyrie Randgris', location: 'Odin Shrine 3', respawn: 480, size: 'Large' },
        { name: 'Wounded Morocc', location: 'Dimensional Gorge', respawn: 720, size: 'Large' },
        { name: 'Beelzebub', location: 'Cursed Monastery 3', respawn: 720, size: 'Large' }
    ];

    const mvpSelect = document.getElementById('mvp-select');
    const killTimeInput = document.getElementById('kill-time');
    const calculateBtn = document.getElementById('calculate-btn');
    const respawnList = document.getElementById('respawn-list');

    // Populate the dropdown list with MVP names
    mvpList.forEach(mvp => {
        const option = document.createElement('option');
        option.value = mvp.name;
        option.textContent = `${mvp.name} (${mvp.size})`;
        mvpSelect.appendChild(option);
    });

    function getCurrentMilitaryTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
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

    calculateBtn.addEventListener('click', function() {
        const selectedMvp = mvpList.find(mvp => mvp.name === mvpSelect.value);
        let killTime = killTimeInput.value.split(':'); // Changed from const to let

        if (!killTimeInput.value) {
            killTime = getCurrentMilitaryTime().split(':');
        }

        const padding_minutes = 5;
        const killHour = parseInt(killTime[0], 10);
        const killMinute = parseInt(killTime[1], 10);
        const respawnTime = selectedMvp.respawn;
        
        let totalMinutes = killHour * 60 + killMinute + respawnTime;
        let respawnHour = Math.floor(totalMinutes / 60);
        let respawnMinute = totalMinutes % 60;
        
        if (respawnHour >= 24) {
            respawnHour -= 24;
        }
        
        const formattedTime = `${String(respawnHour).padStart(2, '0')}:${String(respawnMinute).padStart(2, '0')}`;
        const respawnDate = new Date();
        respawnDate.setHours(respawnHour, respawnMinute, 0, 0);
        
        const now = new Date();
        let timeDifference = (now - respawnDate) / (1000 * 60 * 60);
        if (timeDifference > 24) {
            respawnDate.setDate(respawnDate.getDate() + 1);
        }
        let diff = respawnDate - now;

        console.log(respawnDate);
        console.log(now);
        
        if (diff < 0) {
            const errorSplash = document.createElement('div');
            errorSplash.textContent = 'Error: Respawn time has already passed!';
            errorSplash.className = 'alert alert-danger text-center';
            document.body.appendChild(errorSplash);
        
            setTimeout(() => {
                document.body.removeChild(errorSplash);
            }, 1000);
        } else {
            // Check if the MVP is already in the list
            const existingItem = Array.from(respawnList.children).find(item => item.textContent.includes(selectedMvp.name));
            if (existingItem) {
                alert(`MVP ${selectedMvp.name} is already in the respawn list.`);
                return;
            }
            
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

            // Create the remove button
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
            
            const textSpan = document.createElement('span');
            textSpan.textContent = `${selectedMvp.name} will respawn at ${formattedTime} (${Math.floor(diff / (1000 * 60 * 60))}h ${Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))}m ${Math.floor((diff % (1000 * 60)) / 1000)}s left)`;
            
            // Append elements to the list item
            listItem.appendChild(textSpan);
            listItem.appendChild(removeButton);
            listItem.dataset.respawnTime = respawnDate.getTime();
            
            respawnList.appendChild(listItem);
            
            // Sort the list items
            sortRespawnList();
            
            // Calculate and display the countdown
            function updateCountdown() {
                const now = new Date();
                let diff = respawnDate - now;
                if (diff < 0) {
                    if (respawnList.contains(listItem)) {
                        respawnList.removeChild(listItem);
                    } else {
                        console.error('Attempted to remove a list item that is not a child of respawnList.');
                    }
                    sendDiscordAlert(`${selectedMvp.name}(${selectedMvp.size}) has respawned!`);
                    alert(`${selectedMvp.name}(${selectedMvp.size}) has respawned!`);
                    return;
                }
                
                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                textSpan.textContent = `${selectedMvp.name} (${selectedMvp.size}) will respawn at ${formattedTime} (${hours}h ${minutes}m ${seconds}s left)`;
            }
            
            updateCountdown();
            const countdownInterval = setInterval(() => {
                updateCountdown();
                if (respawnDate - new Date() < 0) {
                    clearInterval(countdownInterval);
                }
            }, 1000);
        }
    });
    
    function sortRespawnList() {
        const items = Array.from(respawnList.children);
        items.sort((a, b) => parseInt(a.dataset.respawnTime, 10) - parseInt(b.dataset.respawnTime, 10));
        items.forEach(item => respawnList.appendChild(item));
    }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, error => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}