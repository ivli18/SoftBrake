class WinScene extends Phaser.Scene {
    constructor() {
        super("WinScene");
    }

    init(data) {
        this.finalTime = data.time;
        this.finalBatteries = data.batteries;
        this.finalScore = data.points;
        
    }

    create() {
        this.add.text(720, 200, "Congrats !!!", {
            fontSize: '48px',
            color: '#ffffff',
            fontFamily: 'Minecraftia'
        }).setOrigin(0.5);

        this.add.text(720, 270, `Time: ${this.finalTime} seconds`, {
            fontSize: '32px',
            color: '#ffff88'
        }).setOrigin(0.5);
        
        this.add.text(720, 340, `Score: ${this.finalScore} points`, {
            fontSize: '32px',
            color: '#ffff88'
        }).setOrigin(0.5);

        this.add.text(720, 410, 'Press R to Restart', {
            fontSize: '24px',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.add.text(720, 480, 'Press R to Restart', {
            fontSize: '24px',
            color: '#ffffff',
            fontFamily: 'Minecraftia'
        }).setOrigin(0.5);

        this.add.text(720, 550, 'Press R to Restart', {
            fontSize: '24px',
            color: '#ffffff'
        }).setOrigin(0.5);

        // Restart the game on R
        this.input.keyboard.once('keydown-R', () => {
            this.sound.stopAll();
            this.scene.start('platformerScene');
        });
    }
}
