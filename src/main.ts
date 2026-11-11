import './styles/main.css';
import './styles/overhaul.css';
import { GameApp } from './gameplay/gameEngine';

declare global {
  interface Window {
    __GAME_APP__?: GameApp;
  }
}

function bootGame(): void {
  if (window.__GAME_APP__) return;
  const root = document.getElementById('appRoot');
  const loadingScreen = document.getElementById('loadingOverlay');
  if (!root) return;

  try {
    const app = new GameApp(root);
    window.__GAME_APP__ = app;
    loadingScreen?.classList.add('hidden');
  } catch (err) {
    if (loadingScreen) {
      loadingScreen.innerHTML = `
        <h2>Failed to Start Game</h2>
        <p>${err instanceof Error ? err.message : String(err)}</p>
      `;
    }
  }
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', bootGame);
} else {
  bootGame();
}

