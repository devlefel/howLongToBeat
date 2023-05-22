export class GameHour {
    Name: string;
    gameplayMain: number;
    gameplayExtra: number;
    private gameplayMedium: number;
    constructor(name: string, gameplayMain, gameplayExtra: number) {
        this.Name = name;
        this.gameplayMain = gameplayMain;
        this.gameplayExtra = gameplayExtra;
        this.gameplayMedium = ((this.gameplayMain + this.gameplayExtra) / 2);
    }
}