# 🕐 Time Format Feature Guide

## Quick Access

**Location**: Settings ⚙️ → Time Format section

## Visual Examples

### 24-Hour Format (Default)
```
Kill Time Display:
┌─────────────────────────────┐
│ Amon Ra (Medium)            │
│ Morroc Pyramid B2F          │
│ Killed: 23:45               │ ← 24-hour format
│                             │
│ Respawn: 01:53              │ ← 24-hour format
│ Time left: 2h 8m 15s        │
└─────────────────────────────┘
```

### 12-Hour Format (AM/PM)
```
Kill Time Display:
┌─────────────────────────────┐
│ Amon Ra (Medium)            │
│ Morroc Pyramid B2F          │
│ Killed: 11:45 PM            │ ← 12-hour format
│                             │
│ Respawn: 01:53 AM           │ ← 12-hour format
│ Time left: 2h 8m 15s        │
└─────────────────────────────┘
```

## Step-by-Step Guide

### Changing Time Format

1. **Open Settings**
   ```
   Click the ⚙️ icon in the top-right corner
   ```

2. **Scroll to Time Format Section**
   ```
   Look for "Time Format" heading near the bottom
   ```

3. **Select Your Preference**
   ```
   ○ 24-hour format (23:45)    ← Military/International time
   ○ 12-hour format (11:45 PM) ← US/Standard time
   ```

4. **Save Changes**
   ```
   Click "Save Settings" button
   ```

5. **See Instant Update**
   ```
   All timer displays update immediately!
   ```

## Format Comparison

| Situation | 24-Hour | 12-Hour |
|-----------|---------|---------|
| Midnight | 00:00 | 12:00 AM |
| Early Morning | 03:30 | 03:30 AM |
| Morning | 09:15 | 09:15 AM |
| Noon | 12:00 | 12:00 PM |
| Afternoon | 14:20 | 02:20 PM |
| Evening | 18:45 | 06:45 PM |
| Night | 22:30 | 10:30 PM |
| Late Night | 23:59 | 11:59 PM |

## Use Cases

### Choose 24-Hour Format If:
- ✅ You're in Europe, Asia, or most of the world
- ✅ You're in military or medical profession
- ✅ You prefer unambiguous time notation
- ✅ Your server uses 24h format
- ✅ You're used to "military time"

### Choose 12-Hour Format If:
- ✅ You're in the USA or Canada
- ✅ You prefer AM/PM notation
- ✅ Your guild uses 12h format
- ✅ It's more familiar to you
- ✅ You find it easier to read

## Technical Details

### What Changes
- ✅ Kill time display format
- ✅ Respawn time display format
- ✅ Discord webhook notification timestamps
- ✅ All existing and future timers

### What Doesn't Change
- ❌ Countdown timers (always shows "2h 30m 15s")
- ❌ MVP respawn durations
- ❌ Timer calculations
- ❌ Time input field

### Persistence
- Setting is saved automatically
- Survives page refresh
- Saved in browser's local storage
- Per-device preference

## FAQ

**Q: Do I need to refresh the page?**
A: No! All times update immediately when you save settings.

**Q: Will my existing timers be affected?**
A: Yes, all timers (existing and new) use your selected format.

**Q: Does this change the input format?**
A: No, you can still enter kill times in any format. This only affects display.

**Q: Can different devices have different formats?**
A: Yes, the setting is per-browser/device.

**Q: What's the default format?**
A: 24-hour format is the default.

**Q: Will this affect countdown timers?**
A: No, countdowns always show as "2h 30m 15s" format.

## Examples in Action

### Scenario 1: US Player
```
Settings: 12-hour format
MVP: Baphomet killed at 8:30 PM
Display: "Killed: 08:30 PM"
Respawn: "Respawn: 10:30 PM"
```

### Scenario 2: EU Player
```
Settings: 24-hour format
MVP: Baphomet killed at 20:30
Display: "Killed: 20:30"
Respawn: "Respawn: 22:30"
```

### Scenario 3: Midnight Crossing
```
24h: Killed: 23:30 → Respawn: 01:30
12h: Killed: 11:30 PM → Respawn: 01:30 AM
```

## Tips

💡 **Guild Coordination**: Agree on a format with your guild for clear communication!

💡 **Screenshots**: If sharing screenshots, mention your time format setting.

💡 **Server Time**: Match your format to your game server's time format.

💡 **Personal Preference**: Choose what feels most natural to you!

## Troubleshooting

**Times showing wrong format:**
1. Open Settings
2. Check Time Format selection
3. Click Save Settings
4. Verify format updates

**Format not persisting:**
1. Check browser allows localStorage
2. Try clearing cache
3. Re-select and save format

**Some times not updating:**
1. Save settings again
2. Add a new timer to verify
3. Check browser console for errors

## Keyboard Shortcut Idea
*(Future feature)*
- Quick toggle: Alt + T
- Cycles between 12h and 24h

---

**Enjoy your preferred time format! ⏰**
