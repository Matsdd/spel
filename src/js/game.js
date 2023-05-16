import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Exploder } from './exploder'


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
    }
}



new Game()
