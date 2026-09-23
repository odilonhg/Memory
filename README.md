# Memory Game

A modern, responsive web-based Memory Card Game built with vanilla JavaScript, HTML5, and CSS3. Test and sharpen your memory by finding all 8 matching pairs of randomly generated images!

---

## 🌐 **Live Demo** :

[https://odilonhg.github.io/Memory/](https://odilonhg.github.io/Memory/)

## 🎮 Features

- **Dynamic Image Pairs**: Fetches 8 unique pairs of images dynamically from the [Picsum Photos](https://picsum.photos/) API for every new game.
- **Fisher–Yates Shuffle**: Cards are randomly shuffled before each round using the Fisher–Yates (Knuth) algorithm.
- **Timer & Move Tracker**: Real-time timer (`MM:SS`) that starts upon your first card flip, alongside an active move counter.
- **Smooth Animations**: Clean card flip and fade-in transitions with hover and matched-state visual indicators.
- **Board Locking Logic**: Prevents rapid multi-clicking and race conditions while validating whether two revealed cards match.
- **Auto-Reset on Victory**: Displays a victory announcement with your final time and total moves, then seamlessly resets the board for a new round.
- **Modern Dark UI**: Designed with CSS custom properties (variables), clean typography, and a sleek dark aesthetic.
- **Zero Dependencies**: 100% vanilla web technologies—no frameworks, npm packages, or build steps required.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic document layout with accessibility attributes (`role="button"`, `tabindex="0"`, `aria-live`).
- **CSS3**: Modern CSS using variables (`:root`), CSS Grid, Flexbox, smooth transitions, and keyframe animations.
- **JavaScript (ES6+)**: Modular vanilla JS managing DOM manipulation, game state, intervals, and asynchronous validation logic.

---

## 🚀 Getting Started

No build tools or installations are required. You can run the game directly in any modern browser.

### Prerequisites

- A modern web browser (Google Chrome, Firefox, Safari, Edge, etc.)
- That's all!

### Installation & Launch

1. **Clone the repository:**
   ```bash
   git clone https://github.com/odilonhg/Memory.git
   cd Memory
   ```

2. **Run the project:**

   - Open `src/index.html` in your browser (./src/index.html). Or directly [visit the demo](https://odilonhg.github.io/Memory/)
---

## 🕹️ How to Play

1. Click on any card to flip it over and reveal its hidden image.
2. The timer starts automatically upon your first move.
3. Select a second card:
   - **Match**: If both cards display the same image, they stay revealed with a green highlight.
   - **No Match**: If they differ, both cards automatically flip back face-down after a brief delay.
4. Continue matching pairs until all 8 pairs (16 cards) are found.
5. Try to complete the board with the lowest number of moves in the fastest time possible!

---

## 📁 Project Structure

```text
Memory/
├── LICENSE
├── README.md
└── src/
    ├── css/
    │   └── main.css      # Styling, color palette, animations, and grid layout
    ├── js/
    │   └── main.js       # Game logic, card shuffling, timer, and event listeners
    └── index.html        # Main HTML structure and semantic layout
```

---

## 📄 License

This project is open-source and distributed under the terms of the **GNU General Public License v3.0 (GPL-3.0)**. See the [LICENSE](LICENSE) file for more information.

---

## 👤 Author

Developed by **Dylan Mesnage**.
