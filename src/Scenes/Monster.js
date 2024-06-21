class Monster extends Phaser.Scene {

    keyF;
    keyS;
    keyA;
    keyD;
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 350;
        this.bodyY = 250;

        this.smile_x = 350;
        this.smile_y = 280;

        this.r_horn_x = 380;
        this.r_horn_y = 170;
    
        this.l_horn_x = 330;
        this.l_horn_y = 170;

        this.l_arm_x = 450;
        this.l_arm_y = 300;

        this.r_arm_x = 250;
        this.r_arm_y = 300;

        this.l_leg_x = 410;
        this.l_leg_y = 370;

        this.r_leg_x = 290;
        this.r_leg_y = 370;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redB.png");
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 20, "monsterParts", "eye_angry_red.png");
        my.sprite.smile = this.add.sprite(this.smile_x, this.smile_y, "monsterParts", "mouthA.png");
        my.sprite.fangs = this.add.sprite(this.smile_x, this.smile_y, "monsterParts", "mouthF.png");

        my.sprite.l_horn = this.add.sprite(this.l_horn_x, this.l_horn_y, "monsterParts", "detail_red_horn_large.png");
        my.sprite.r_horn = this.add.sprite(this.r_horn_x, this.r_horn_y, "monsterParts", "detail_red_horn_large.png");

        my.sprite.l_arm = this.add.sprite(this.l_arm_x, this.l_arm_y, "monsterParts", "arm_redD.png");
        my.sprite.r_arm = this.add.sprite(this.r_arm_x, this.r_arm_y, "monsterParts", "arm_redD.png");
        
        my.sprite.l_leg = this.add.sprite(this.l_leg_x, this.l_leg_y, "monsterParts", "leg_redE.png");
        my.sprite.r_leg = this.add.sprite(this.r_leg_x, this.r_leg_y, "monsterParts", "leg_redE.png");

        my.sprite.fangs.visible = false;
        my.sprite.r_arm.flipX = true;
        my.sprite.r_leg.flipX = true;
        my.sprite.l_horn.flipX = true;
        
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(this.keyS.isDown) {
            my.sprite.fangs.visible = false;
            my.sprite.smile.visible = true;
        }
        if(this.keyF.isDown) {
            my.sprite.fangs.visible = true;
            my.sprite.smile.visible = false;
        }

        if(this.keyA.isDown) {
            for(const s in my.sprite) {
                my.sprite[s].x--;
            }
        }

        else if(this.keyD.isDown) {
            for(const s in my.sprite) {
                my.sprite[s].x++;
            }
        }
        
    }

}