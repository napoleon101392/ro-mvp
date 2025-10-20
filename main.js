// Modern MVP Timer Application
class MVPTimer {
    constructor() {
        this.mvpData = [
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
            { name: 'Kiel-D-01', location: 'Kiel Dungeon 2', respawn: 120, size: 'Medium', imageUrl: 'images/monster/KielD01.gif' },
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
            { name: 'Wounded Morocc', location: 'Dimensional Gorge', respawn: 720, size: 'Large', imageUrl: 'images/monster/WoundedMorocc.gif' }
        ];
        
        this.customSpawnTimes = this.loadCustomSpawnTimes();
        this.settings = this.loadSettings();
        this.activeTimers = new Map();
        this.init();
    }

    init() {
        this.initializeElements();
        this.setupEventListeners();
        this.applyTheme();
        this.populateMvpDropdown();
        this.hideLoadingAndShowContent();
        this.requestNotificationPermission();
        this.loadCustomSpawnSettings();
        this.loadSavedTimers();
        this.checkForUrlActions();
    }

    initializeElements() {
        this.elements = {
            loadingSkeleton: document.getElementById('loading-skeleton'),
            mainContent: document.getElementById('main-content'),
            mvpSelect: document.getElementById('mvp-select'),
            killTimeInput: document.getElementById('kill-time'),
            calculateBtn: document.getElementById('calculate-btn'),
            respawnList: document.getElementById('respawn-list'),
            emptyState: document.getElementById('empty-state'),
            clearAllBtn: document.getElementById('clear-all'),
            themeToggle: document.getElementById('theme-toggle'),
            themeIcon: document.getElementById('theme-icon'),
            webhookUrl: document.getElementById('webhook-url'),
            saveSettings: document.getElementById('save-settings'),
            customSpawns: document.getElementById('custom-spawns'),
            addCustomSpawn: document.getElementById('add-custom-spawn'),
            browserNotifications: document.getElementById('browser-notifications'),
            soundNotifications: document.getElementById('sound-notifications'),
            timeFormat24: document.getElementById('time-format-24'),
            timeFormat12: document.getElementById('time-format-12'),
            btnText: document.getElementById('btn-text'),
            btnSpinner: document.getElementById('btn-spinner')
        };
    }

    setupEventListeners() {
        this.elements.calculateBtn.addEventListener('click', () => this.handleAddMVP());
        this.elements.killTimeInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleAddMVP();
        });
        this.elements.clearAllBtn.addEventListener('click', () => this.clearAllTimers());
        this.elements.themeToggle.addEventListener('click', () => this.toggleTheme());
        this.elements.saveSettings.addEventListener('click', () => this.saveSettings());
        this.elements.addCustomSpawn.addEventListener('click', () => this.addCustomSpawnInput());

        this.elements.webhookUrl.addEventListener('input', this.debounce(() => {
            this.settings.webhookUrl = this.elements.webhookUrl.value;
            this.saveSettingsToStorage();
        }, 500));
    }

    populateMvpDropdown() {
        const fragment = document.createDocumentFragment();
        
        this.mvpData.forEach(mvp => {
            const option = document.createElement('option');
            const customTime = this.customSpawnTimes[mvp.name];
            const displayTime = customTime ? customTime + 'min' : mvp.respawn + 'min';
            
            option.value = mvp.name;
            option.textContent = mvp.name + ' (' + mvp.size + ') - ' + displayTime;
            fragment.appendChild(option);
        });
        
        this.elements.mvpSelect.appendChild(fragment);
    }

    hideLoadingAndShowContent() {
        setTimeout(() => {
            this.elements.loadingSkeleton.style.display = 'none';
            this.elements.mainContent.style.display = 'block';
            this.elements.mainContent.classList.add('fade-in');
        }, 800);
    }

    handleAddMVP() {
        const selectedMvpName = this.elements.mvpSelect.value;
        if (!selectedMvpName) {
            this.showError('Please select an MVP');
            return;
        }

        this.setButtonLoading(true);

        try {
            const mvp = this.mvpData.find(m => m.name === selectedMvpName);
            const killTime = this.parseKillTime();
            
            if (!this.isValidKillTime(killTime)) {
                this.showError('Invalid kill time');
                return;
            }

            if (this.activeTimers.has(mvp.name)) {
                this.showError(mvp.name + ' is already being tracked');
                return;
            }

            const respawnTime = this.calculateRespawnTime(killTime, mvp);
            this.addMVPTimer(mvp, killTime, respawnTime);
            
            this.elements.mvpSelect.value = '';
            this.elements.killTimeInput.value = '';
            this.showSuccess(mvp.name + ' timer added successfully');
            
        } catch (error) {
            console.error('Error adding MVP:', error);
            this.showError('Failed to add MVP timer');
        } finally {
            this.setButtonLoading(false);
        }
    }

    parseKillTime() {
        const input = this.elements.killTimeInput.value.trim();
        const now = new Date();
        
        if (!input) {
            return now;
        }

        const timeMatch = input.match(/^(\d{1,2}):(\d{2})$/);
        if (!timeMatch) {
            throw new Error('Invalid time format');
        }

        const hours = parseInt(timeMatch[1], 10);
        const minutes = parseInt(timeMatch[2], 10);
        
        if (hours > 23 || minutes > 59) {
            throw new Error('Invalid time values');
        }

        const killTime = new Date();
        killTime.setHours(hours, minutes, 0, 0);
        
        // If time is in future, assume it was yesterday
        const timeDiff = killTime.getTime() - now.getTime();
        if (timeDiff > 60 * 60 * 1000) {
            killTime.setDate(killTime.getDate() - 1);
        }
        
        return killTime;
    }

    isValidKillTime(killTime) {
        const now = new Date();
        const timeDiff = now.getTime() - killTime.getTime();
        return timeDiff >= -60 * 60 * 1000 && timeDiff <= 24 * 60 * 60 * 1000;
    }

    calculateRespawnTime(killTime, mvp) {
        const respawnMinutes = this.customSpawnTimes[mvp.name] || mvp.respawn;
        return new Date(killTime.getTime() + respawnMinutes * 60 * 1000);
    }

    addMVPTimer(mvp, killTime, respawnTime) {
        const timerData = {
            mvp: mvp,
            killTime: killTime,
            respawnTime: respawnTime,
            element: null,
            interval: null
        };

        const listItem = this.createTimerListItem(timerData);
        timerData.element = listItem;
        this.elements.respawnList.appendChild(listItem);
        
        this.elements.emptyState.style.display = 'none';
        this.elements.clearAllBtn.style.display = 'block';
        
        this.startCountdown(timerData);
        this.activeTimers.set(mvp.name, timerData);
        this.sortTimers();
        this.saveActiveTimers(); // Save to localStorage
    }

    createTimerListItem(timerData) {
        const mvp = timerData.mvp;
        const killTime = timerData.killTime;
        const respawnTime = timerData.respawnTime;
        
        const listItem = document.createElement('div');
        listItem.className = 'list-group-item d-flex align-items-center justify-content-between py-3 fade-in';
        listItem.dataset.respawnTime = respawnTime.getTime();
        
        listItem.innerHTML = 
            '<div class="d-flex align-items-center">' +
                '<img src="' + mvp.imageUrl + '" alt="' + mvp.name + '" class="rounded me-3" ' +
                     'style="width: 48px; height: 48px; object-fit: cover;" ' +
                     'loading="lazy" ' +
                     'onerror="this.style.display=\'none\'">' +
                '<div>' +
                    '<div class="fw-bold text-primary mb-1">' +
                        mvp.name + ' <span class="badge bg-secondary">' + mvp.size + '</span>' +
                    '</div>' +
                    '<small class="text-muted d-block">' + mvp.location + '</small>' +
                    '<small class="text-muted">Killed: ' + this.formatTime(killTime) + '</small>' +
                '</div>' +
            '</div>' +
            '<div class="text-end">' +
                '<div class="fw-bold text-success timer-display" style="font-size: 1.1em;">Loading...</div>' +
                '<small class="text-muted">Respawn: ' + this.formatTime(respawnTime) + '</small>' +
            '</div>' +
            '<div class="ms-3">' +
                '<button class="btn btn-outline-secondary btn-sm me-2 edit-btn" title="Edit spawn time">✏️</button>' +
                '<button class="btn btn-outline-danger btn-sm remove-btn" title="Remove timer">🗑️</button>' +
            '</div>';
        
        listItem.querySelector('.edit-btn').onclick = () => this.editSpawnTime(timerData);
        listItem.querySelector('.remove-btn').onclick = () => this.removeTimer(mvp.name);
        
        return listItem;
    }

    startCountdown(timerData) {
        const self = this;
        const updateTimer = function() {
            const now = new Date();
            const timeDiff = timerData.respawnTime.getTime() - now.getTime();
            const timerDisplay = timerData.element.querySelector('.timer-display');
            
            if (timeDiff <= 0) {
                self.handleMVPRespawn(timerData);
                return;
            }
            
            const timeString = self.formatTimeDifference(timeDiff);
            timerDisplay.textContent = timeString;
            
            timerDisplay.className = 'fw-bold timer-display';
            if (timeDiff < 5 * 60 * 1000) {
                timerDisplay.classList.add('text-danger');
            } else if (timeDiff < 15 * 60 * 1000) {
                timerDisplay.classList.add('text-warning');
            } else {
                timerDisplay.classList.add('text-success');
            }
        };
        
        updateTimer();
        timerData.interval = setInterval(updateTimer, 1000);
    }

    handleMVPRespawn(timerData) {
        clearInterval(timerData.interval);
        this.activeTimers.delete(timerData.mvp.name);
        timerData.element.remove();
        
        if (this.activeTimers.size === 0) {
            this.elements.emptyState.style.display = 'block';
            this.elements.clearAllBtn.style.display = 'none';
        }
        
        this.saveActiveTimers(); // Save updated list
        this.showRespawnNotification(timerData.mvp);
        this.sendWebhookNotification(timerData.mvp);
    }

    removeTimer(mvpName) {
        const timerData = this.activeTimers.get(mvpName);
        if (timerData) {
            clearInterval(timerData.interval);
            timerData.element.remove();
            this.activeTimers.delete(mvpName);
            
            if (this.activeTimers.size === 0) {
                this.elements.emptyState.style.display = 'block';
                this.elements.clearAllBtn.style.display = 'none';
            }
            this.saveActiveTimers(); // Save updated list
        }
    }

    clearAllTimers() {
        if (confirm('Are you sure you want to clear all MVP timers?')) {
            const self = this;
            this.activeTimers.forEach(function(timerData) {
                clearInterval(timerData.interval);
                timerData.element.remove();
            });
            this.activeTimers.clear();
            this.elements.emptyState.style.display = 'block';
            this.elements.clearAllBtn.style.display = 'none';
            this.saveActiveTimers(); // Save empty list
        }
    }

    sortTimers() {
        const items = Array.from(this.elements.respawnList.children);
        const validItems = items.filter(function(item) {
            return item.dataset.respawnTime;
        });
        
        const self = this;
        validItems.sort(function(a, b) {
            return parseInt(a.dataset.respawnTime) - parseInt(b.dataset.respawnTime);
        });
        
        validItems.forEach(function(item) {
            self.elements.respawnList.appendChild(item);
        });
    }

    editSpawnTime(timerData) {
        const currentTime = this.customSpawnTimes[timerData.mvp.name] || timerData.mvp.respawn;
        const newTime = prompt('Enter new spawn time for ' + timerData.mvp.name + ' (in minutes):', currentTime);
        
        if (newTime && !isNaN(newTime) && newTime > 0) {
            this.customSpawnTimes[timerData.mvp.name] = parseInt(newTime);
            this.saveCustomSpawnTimes();
            
            const newRespawnTime = this.calculateRespawnTime(timerData.killTime, timerData.mvp);
            timerData.respawnTime = newRespawnTime;
            timerData.element.dataset.respawnTime = newRespawnTime.getTime();
            
            const respawnTimeDisplay = timerData.element.querySelector('small:last-child');
            respawnTimeDisplay.textContent = 'Respawn: ' + this.formatTime(newRespawnTime);
            
            this.sortTimers();
            this.showSuccess('Spawn time updated for ' + timerData.mvp.name);
        }
    }

    showRespawnNotification(mvp) {
        const message = mvp.name + ' has respawned at ' + mvp.location + '!';
        
        if (this.settings.browserNotifications && 'Notification' in window && Notification.permission === 'granted') {
            new Notification('MVP Respawned!', {
                body: message,
                icon: mvp.imageUrl
            });
        }
        
        if (this.settings.soundNotifications) {
            this.playNotificationSound();
        }
        
        this.showAlert(message, mvp, 'success');
    }

    showAlert(message, mvp, type) {
        const alertContainer = document.getElementById('alert-container');
        
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-' + type + ' alert-dismissible fade show shadow-sm';
        alertDiv.innerHTML = 
            '<div class="d-flex align-items-center">' +
                '<img src="' + mvp.imageUrl + '" alt="' + mvp.name + '" ' +
                     'style="width: 40px; height: 40px; margin-right: 10px; border-radius: 4px;" ' +
                     'onerror="this.style.display=\'none\'">' +
                '<div>' +
                    '<div class="fw-bold">' + mvp.name + ' Respawned!</div>' +
                    '<small>' + mvp.location + '</small>' +
                '</div>' +
            '</div>' +
            '<button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>';
        
        alertContainer.appendChild(alertDiv);
        
        setTimeout(function() {
            if (alertDiv.parentElement) {
                alertDiv.remove();
            }
        }, 10000);
    }

    sendWebhookNotification(mvp) {
        if (!this.settings.webhookUrl) return;
        
        const message = {
            content: '�� **MVP Respawned!**\n**' + mvp.name + '** (' + mvp.size + ') at **' + mvp.location + '**\nTime: ' + new Date().toLocaleTimeString()
        };
        
        fetch(this.settings.webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(message)
        }).catch(function(error) {
            console.error('Webhook notification failed:', error);
        });
    }

    playNotificationSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        } catch (error) {
            console.log('Audio notification not available');
        }
    }

    toggleTheme() {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-bs-theme', newTheme);
        this.elements.themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('theme', newTheme);
    }

    applyTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-bs-theme', savedTheme);
        this.elements.themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '��';
    }

    loadSettings() {
        const defaultSettings = {
            webhookUrl: '',
            browserNotifications: true,
            soundNotifications: true,
            timeFormat: '24'
        };
        
        try {
            const saved = localStorage.getItem('mvp-timer-settings');
            return saved ? Object.assign(defaultSettings, JSON.parse(saved)) : defaultSettings;
        } catch (e) {
            return defaultSettings;
        }
    }

    saveSettings() {
        this.settings.webhookUrl = this.elements.webhookUrl.value;
        this.settings.browserNotifications = this.elements.browserNotifications.checked;
        this.settings.soundNotifications = this.elements.soundNotifications.checked;
        this.settings.timeFormat = this.elements.timeFormat24.checked ? '24' : '12';
        
        this.saveSettingsToStorage();
        
        // Close the modal first
        const modal = bootstrap.Modal.getInstance(document.getElementById('settingsModal'));
        if (modal) {
            modal.hide();
        }
        
        // Show success message after modal starts closing
        setTimeout(() => {
            this.showSuccess('Settings saved successfully');
        }, 150);
        
        // Refresh all timer displays with new format
        this.refreshAllTimerDisplays();
    }

    saveSettingsToStorage() {
        localStorage.setItem('mvp-timer-settings', JSON.stringify(this.settings));
    }

    loadCustomSpawnTimes() {
        try {
            const saved = localStorage.getItem('mvp-custom-spawns');
            return saved ? JSON.parse(saved) : {};
        } catch (e) {
            return {};
        }
    }

    saveCustomSpawnTimes() {
        localStorage.setItem('mvp-custom-spawns', JSON.stringify(this.customSpawnTimes));
    }

    loadCustomSpawnSettings() {
        this.elements.webhookUrl.value = this.settings.webhookUrl;
        this.elements.browserNotifications.checked = this.settings.browserNotifications;
        this.elements.soundNotifications.checked = this.settings.soundNotifications;
        
        // Set time format radio buttons
        if (this.settings.timeFormat === '12') {
            this.elements.timeFormat12.checked = true;
        } else {
            this.elements.timeFormat24.checked = true;
        }
        
        this.renderCustomSpawnInputs();
    }

    renderCustomSpawnInputs() {
        this.elements.customSpawns.innerHTML = '';
        
        const self = this;
        Object.keys(this.customSpawnTimes).forEach(function(mvpName) {
            const time = self.customSpawnTimes[mvpName];
            self.createCustomSpawnInput(mvpName, time);
        });
    }

    addCustomSpawnInput() {
        // Create a modal-like prompt with select dropdown
        const modal = document.createElement('div');
        modal.className = 'modal fade show';
        modal.style.cssText = 'display: block; background: rgba(0,0,0,0.5);';
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Custom Spawn Time</h5>
                        <button type="button" class="btn-close" onclick="this.closest('.modal').remove()"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="custom-mvp-select" class="form-label">Select MVP</label>
                            <select id="custom-mvp-select" class="form-select">
                                <option value="">Choose an MVP...</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="custom-spawn-time" class="form-label">Spawn Time (minutes)</label>
                            <input type="number" id="custom-spawn-time" class="form-control" min="1" value="60">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                        <button type="button" class="btn btn-primary" id="save-custom-spawn">Save</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Populate MVP select
        const select = document.getElementById('custom-mvp-select');
        this.mvpData.forEach(mvp => {
            const option = document.createElement('option');
            option.value = mvp.name;
            option.textContent = mvp.name + ' (' + mvp.size + ')';
            select.appendChild(option);
        });
        
        // Handle save
        const self = this;
        document.getElementById('save-custom-spawn').onclick = function() {
            const mvpName = select.value;
            const time = document.getElementById('custom-spawn-time').value;
            
            if (!mvpName) {
                alert('Please select an MVP');
                return;
            }
            
            if (time && !isNaN(time) && time > 0) {
                self.customSpawnTimes[mvpName] = parseInt(time);
                self.saveCustomSpawnTimes();
                self.renderCustomSpawnInputs();
                self.elements.mvpSelect.innerHTML = '<option value="">Choose an MVP...</option>';
                self.populateMvpDropdown();
                self.showSuccess('Custom spawn time added for ' + mvpName);
                modal.remove();
            } else {
                alert('Please enter a valid spawn time');
            }
        };
    }

    createCustomSpawnInput(mvpName, time) {
        const div = document.createElement('div');
        div.className = 'input-group mb-2';
        div.innerHTML = 
            '<span class="input-group-text" style="min-width: 120px;">' + mvpName + '</span>' +
            '<input type="number" class="form-control" value="' + time + '" min="1" ' +
                   'onchange="mvpTimer.updateCustomSpawnTime(\'' + mvpName + '\', this.value)">' +
            '<button class="btn btn-outline-danger" onclick="mvpTimer.removeCustomSpawnTime(\'' + mvpName + '\')">×</button>';
        this.elements.customSpawns.appendChild(div);
    }

    updateCustomSpawnTime(mvpName, time) {
        if (time && !isNaN(time) && time > 0) {
            this.customSpawnTimes[mvpName] = parseInt(time);
            this.saveCustomSpawnTimes();
        }
    }

    removeCustomSpawnTime(mvpName) {
        delete this.customSpawnTimes[mvpName];
        this.saveCustomSpawnTimes();
        this.renderCustomSpawnInputs();
        this.elements.mvpSelect.innerHTML = '<option value="">Choose an MVP...</option>';
        this.populateMvpDropdown();
    }

    saveActiveTimers() {
        const timersToSave = [];
        this.activeTimers.forEach(function(timerData, mvpName) {
            timersToSave.push({
                mvpName: mvpName,
                killTime: timerData.killTime.toISOString(),
                respawnTime: timerData.respawnTime.toISOString()
            });
        });
        localStorage.setItem('mvp-active-timers', JSON.stringify(timersToSave));
    }

    loadSavedTimers() {
        try {
            const saved = localStorage.getItem('mvp-active-timers');
            if (!saved) return;
            
            const timers = JSON.parse(saved);
            const now = new Date();
            
            timers.forEach(timer => {
                const mvp = this.mvpData.find(function(m) { return m.name === timer.mvpName; });
                if (!mvp) return;
                
                const respawnTime = new Date(timer.respawnTime);
                
                // Only restore timers that haven't expired yet
                if (respawnTime > now) {
                    const killTime = new Date(timer.killTime);
                    this.addMVPTimer(mvp, killTime, respawnTime);
                }
            });
            
            // Clean up expired timers from storage
            this.saveActiveTimers();
        } catch (e) {
            console.error('Failed to load saved timers:', e);
        }
    }

    requestNotificationPermission() {
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }
    }

    refreshAllTimerDisplays() {
        // Refresh all time displays with the new format
        this.activeTimers.forEach((timerData, mvpName) => {
            const killTimeElement = timerData.element.querySelector('small.text-muted:nth-of-type(2)');
            const respawnTimeElement = timerData.element.querySelector('small.text-muted:last-child');
            
            if (killTimeElement) {
                killTimeElement.textContent = 'Killed: ' + this.formatTime(timerData.killTime);
            }
            if (respawnTimeElement) {
                respawnTimeElement.textContent = 'Respawn: ' + this.formatTime(timerData.respawnTime);
            }
        });
    }

    checkForUrlActions() {
        const params = new URLSearchParams(window.location.search);
        if (params.get('action') === 'add') {
            // Focus on MVP select if opened from shortcut
            setTimeout(() => {
                this.elements.mvpSelect.focus();
            }, 1000);
        }
    }

    saveActiveTimers() {
        const timersToSave = [];
        this.activeTimers.forEach((timerData, mvpName) => {
            timersToSave.push({
                mvpName: mvpName,
                killTime: timerData.killTime.toISOString(),
                respawnTime: timerData.respawnTime.toISOString()
            });
        });
        localStorage.setItem('mvp-active-timers', JSON.stringify(timersToSave));
    }

    loadSavedTimers() {
        try {
            const saved = localStorage.getItem('mvp-active-timers');
            if (!saved) return;
            
            const timers = JSON.parse(saved);
            const now = new Date();
            
            timers.forEach(timer => {
                const respawnTime = new Date(timer.respawnTime);
                
                // Only load timers that haven't expired yet
                if (respawnTime > now) {
                    const mvp = this.mvpData.find(m => m.name === timer.mvpName);
                    if (mvp) {
                        const killTime = new Date(timer.killTime);
                        this.addMVPTimer(mvp, killTime, respawnTime);
                    }
                }
            });
            
            // Clear expired timers
            if (this.activeTimers.size > 0) {
                this.saveActiveTimers();
            }
        } catch (e) {
            console.error('Failed to load saved timers:', e);
        }
    }

    formatTime(date) {
        const use12Hour = this.settings.timeFormat === '12';
        
        return date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: use12Hour
        });
    }    formatTimeDifference(ms) {
        const hours = Math.floor(ms / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((ms % (1000 * 60)) / 1000);
        
        if (hours > 0) {
            return hours + 'h ' + minutes + 'm ' + seconds + 's';
        } else if (minutes > 0) {
            return minutes + 'm ' + seconds + 's';
        } else {
            return seconds + 's';
        }
    }

    setButtonLoading(loading) {
        if (loading) {
            this.elements.btnText.textContent = 'Adding...';
            this.elements.btnSpinner.style.display = 'inline-block';
            this.elements.calculateBtn.disabled = true;
        } else {
            this.elements.btnText.textContent = 'Add MVP';
            this.elements.btnSpinner.style.display = 'none';
            this.elements.calculateBtn.disabled = false;
        }
    }

    showSuccess(message) {
        this.showToast(message, 'success');
    }

    showError(message) {
        this.showToast(message, 'danger');
    }

    showToast(message, type) {
        const toast = document.createElement('div');
        toast.className = 'alert alert-' + type + ' alert-dismissible fade show position-fixed';
        toast.style.cssText = 'top: 20px; left: 50%; transform: translateX(-50%); z-index: 9999; min-width: 300px;';
        toast.innerHTML = 
            message +
            '<button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>';
        
        document.body.appendChild(toast);
        
        setTimeout(function() {
            if (toast.parentElement) {
                toast.remove();
            }
        }, 5000);
    }

    debounce(func, wait) {
        let timeout;
        return function() {
            const args = arguments;
            const later = function() {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize application when DOM is ready
let mvpTimer;
document.addEventListener('DOMContentLoaded', function() {
    mvpTimer = new MVPTimer();
});
