# THREE6IX 👏

A simple React game built with Vite and TailwindCSS.

## Overview

THREE6IX is a React-based game where players take turns clicking buttons as part of a fun, interactive challenge. The game logic involves rounds, players, and dynamic UI updates such as score, lives, and interactive modals. It uses Vite for fast development, React for UI, and TailwindCSS for styling.

## Features

- **React & Vite:** Fast and modern development environment.
- **TailwindCSS:** Utility-first CSS framework for rapid UI development.
- **Game Logic:** Dynamic handling of rounds, player turns, scoring, and lives.
- **Interactive UI:** Modal popups on game over and engaging player animations.

## Project Structure

```
three6IX
├── src
│   ├── components
│   │   ├── Footer.jsx
│   │   ├── GameComponent.jsx
│   │   ├── GameParams.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── HowToPLay.jsx
│   │   ├── Modal.jsx
│   │   ├── PlayerComponents.jsx
│   │   ├── ScoreComponent.jsx
│   │   └── Whistle.jsx
│   ├── store
│   │   ├── GameStore.jsx
│   │   └── LogicStore.jsx
│   ├── utils
│   │   ├── gameFunc.jsx
│   │   └── validate.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/three6IX.git
   cd three6IX
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Running the Project

Start the development server with:

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

To build the project for production, run:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Linting

Lint your code with:

```bash
npm run lint
```

## Contributing

Contributions are welcome. Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Built with React, Vite, and TailwindCSS.
```

This README file covers installation, running, building, linting, and project structure along with a brief overview of the game.