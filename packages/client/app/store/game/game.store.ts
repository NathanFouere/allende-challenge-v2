import type { Game } from '@shared/game/game';

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    games: [] as Game[],
    selectedGame: null as Game | null,
    creatingGame: false,
    errorOnCreatingGame: false,
    gettingGames: false,
    errorOnGettingGames: false,
    gamePendingDeletionId: null as number | null,
    changingTurn: false,
  }),
  getters: {
    userGames(state): Game[] {
      return state.games;
    },
    isCreatingGame(state): boolean {
      return state.creatingGame;
    },
    isGettingGames(state): boolean {
      return state.gettingGames;
    },
    isChangingTurn(state): boolean {
      return state.changingTurn;
    },
    hasErrorOnCreatingGame(state): boolean {
      return state.errorOnCreatingGame;
    },
    hasErrorOnGettingGames(state): boolean {
      return state.errorOnGettingGames;
    },
    hasSelectedGame(state): boolean {
      return state.selectedGame != null;
    },
    getSelectedGame(state): Game | null {
      return state.selectedGame;
    },
    getSelectedGameId(state): number {
      if (!state.selectedGame) {
        throw new Error('No game selected');
      }
      return state.selectedGame.id;
    },
    getSelectedGameTurn(state): number {
      if (!state.selectedGame) {
        throw new Error('No game selected');
      }
      return state.selectedGame.turn;
    },
    getGamePendingDeletionId(state): number | null {
      return state.gamePendingDeletionId;
    },
  },
  actions: {
    setGames(games: Game[]) {
      this.games = games;
    },
    setChangingTurn() {
      this.changingTurn = true;
    },
    unsetChangingTurn() {
      this.changingTurn = false;
    },
    setCreatingGame() {
      this.creatingGame = true;
    },
    unsetCreatingGame() {
      this.creatingGame = false;
    },
    setGettingGames() {
      this.gettingGames = true;
    },
    unsetGettingGames() {
      this.gettingGames = false;
    },
    setErrorOnGettingGames() {
      this.errorOnGettingGames = true;
    },
    unsetErrorOnGettingGames() {
      this.errorOnGettingGames = false;
    },
    setErrorOnCreatingGame() {
      this.errorOnCreatingGame = true;
    },
    unsetErrorOnCreatingGame() {
      this.errorOnCreatingGame = false;
    },
    setSelectedGame(game: Game) {
      this.selectedGame = game;
    },
    updateSelectedGame(game: Game) {
      this.selectedGame = { ...game };
    },
    unsetSelectedGame() {
      this.selectedGame = null;
    },
    setGamePendingDeletionId(id: number) {
      this.gamePendingDeletionId = id;
    },
    unsetGamePendingDeletionId() {
      this.gamePendingDeletionId = null;
    },
  },
  persist: true,
});
