class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.sound.mute = true;
        this.load.setPath("./assets/");

        // Load characters spritesheet
        this.load.atlas("platformer_characters", "tilemap-characters-packed.png", "tilemap-characters-packed.json");

        // Load tilemap information
        this.load.image("tilemap_tiles", "tilemap_packed.png");
        this.load.image("pixel_tiles", "pixel_packed.png"); 
        this.load.tilemapTiledJSON("platformer-level-1", "platformer-level-1.tmj", "platformer-level-1.tmx");   // Tilemap in JSON

        this.load.image('spotlight', 'spotlight.png');
        this.load.image("battery", "batteryAsset.png");

        // Load the tilemap as a spritesheet
        this.load.spritesheet("tilemap_sheet", "tilemap_packed.png", {
            frameWidth: 18,
            frameHeight: 18
        });
        this.load.spritesheet("pixel_sheet", "pixel_packed.png", {
            frameWidth: 18,
            frameHeight: 18
        });

        this.load.audio('jump', 'jump.ogg');
        this.load.audio('drown', 'drown.ogg');
        this.load.audio('coin', 'coin.ogg'); 
        this.load.audio('bg', 'bg.ogg'); 

        // Oooh, fancy. A multi atlas is a texture atlas which has the textures spread
        // across multiple png files, so as to keep their size small for use with
        // lower resource devices (like mobile phones).
        // kenny-particles.json internally has a list of the png files
        // The multiatlas was created using TexturePacker and the Kenny
        // Particle Pack asset pack.
        this.load.multiatlas("kenny-particles", "kenny-particles.json");
    }

    create() {
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('platformer_characters', {
                prefix: "tile_002",
                start: 1,
                end: 2,
                suffix: ".png",
            }),
            frameRate: 15,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            defaultTextureKey: "platformer_characters",
            frames: [
                { frame: "tile_0021.png" }
            ],
            repeat: -1
        });

        this.anims.create({
            key: 'jump',
            defaultTextureKey: "platformer_characters",
            frames: [
                { frame: "tile_0023.png" }
            ],
        });
         // ...and pass to the next Scene
         this.scene.start("platformerScene");
    }

    // Never get here since a new scene is started in create()
    update() {
    }
}
