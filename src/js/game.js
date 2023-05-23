import '../css/style.css'
import { Actor, Engine, Vector, hasOnPostUpdate } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Exploder } from './exploder'
import { LaserBingus } from './laserBingus'
import { Laser } from './laser'
import { Fortification } from './fortification'

export class Game extends Engine {

    constructor() {
        super({ width: 1530, height: 860 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    
    startGame() {
        const Background = new Actor();
        Background.graphics.use(Resources.Background.toSprite());
        Background.pos = new Vector(767, 430);
        Background.scale = new Vector(0.8, 0.8);
        this.add(Background);
        console.log("start de game!")


    let exploder = new Exploder()
        this.add(exploder)
    let laserBingus1 = new LaserBingus(exploder, 350, 300)
        this.add(laserBingus1)
    let laserBingus2 = new LaserBingus(exploder, 350, 450)
        this.add(laserBingus2)
    let laserBingus3 = new LaserBingus(exploder, 350, 600)
        this.add(laserBingus3)
    let laserBingus4 = new LaserBingus(exploder, 350, 750)
        this.add(laserBingus4)
    let fortification = new Fortification()
        this.add(fortification)
        

        exploder.on('collisionstart', (event) => {
            if (event.other instanceof Laser) {
                exploder.hp -= 1
                event.other.kill()
            }
            if (event.other instanceof Fortification) {
                exploder.kill()
                fortification.kill()
            }
        })

        
    }
}



new Game()
