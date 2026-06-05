# Running Game 🏃

A fun and engaging running game built with vanilla HTML, CSS, and JavaScript!

## Features

- 🎮 **Simple & Addictive Gameplay** - Jump over obstacles to survive
- 📊 **Score Tracking** - Keep track of your best scores with local storage
- 🎯 **Progressive Difficulty** - The game gets harder as you score more points
- 📱 **Responsive Design** - Works on desktop and mobile devices
- ⌨️ **Multiple Controls** - Use Space bar, Arrow Up, or tap on mobile to jump
- 🎨 **Beautiful UI** - Smooth animations and gradient backgrounds

## How to Play

1. Open `index.html` in your web browser
2. Press **Space Bar** or **Arrow Up** to make the player jump
3. Avoid the obstacles coming from the right side
4. Each obstacle you successfully avoid increases your score
5. Try to beat your high score!

## Game Mechanics

- **Player**: The red character on the left
- **Obstacles**: Green blocks coming from the right
- **Ground**: Green ground area where the player runs
- **Difficulty**: Game speed increases every 5 points scored
- **High Score**: Automatically saved in your browser's local storage

## Controls

- **Desktop**: 
  - `SPACE` - Jump
  - `ARROW UP` - Jump
  
- **Mobile**: 
  - Tap anywhere on the screen to jump

## File Structure

```
runnergame/
├── index.html      # HTML structure
├── style.css       # Game styling and animations
├── script.js       # Game logic and mechanics
└── README.md       # This file
```

## Technical Details

- **No External Dependencies** - Pure vanilla JavaScript
- **Local Storage** - High score is saved in browser
- **RequestAnimationFrame** - Smooth 60fps gameplay
- **Collision Detection** - Accurate obstacle detection
- **Responsive Canvas** - Adapts to different screen sizes

## Future Enhancements

- Different character skins
- Power-ups and special items
- Multiple difficulty levels
- Sound effects
- Leaderboard system
- Mobile app version

## License

Feel free to use and modify this game for your own projects!

---

**Enjoy the game and challenge your friends to beat your high score!** 🎉