import '../css/style.css'
import { Actor, Engine, Vector, Timer } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Exploder } from './exploder'
import { LaserBingus } from './laserBingus'
import { Fortification } from './fortification'


export class Game extends Engine {

    constructor() {
        super({ width: 1530.01, height: 860.01 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    onInitialize(Engine) {
        const timer = new Timer({
          fcn: () => this.spawn(),
          repeats: true,
          interval: 10000,
        })  
          Engine.currentScene.add(timer)
          timer.start()
    }
    
    spawn() {   
      let exploder = new Exploder()
          this.add(exploder)
    }

    placeLaserBingus() {
        let laserBingus = new LaserBingus(x, y)
            this.add(laserBingus)
    }


    startGame(laser) {
        const Background = new Actor();
        Background.graphics.use(Resources.Background.toSprite());
        Background.pos = new Vector(767, 430);
        Background.scale = new Vector(0.8, 0.8);
        this.add(Background);
        console.log("start de game!")

    let laserBingus1 = new LaserBingus(350, 300)
        this.add(laserBingus1)
    let laserBingus2 = new LaserBingus(350, 450)
        this.add(laserBingus2)
    let laserBingus3 = new LaserBingus(350, 600)
        this.add(laserBingus3)
    let laserBingus4 = new LaserBingus(350, 750)
        this.add(laserBingus4)
    let laserBingus5 = new LaserBingus(475, 750)
        this.add(laserBingus5)
    let laserBingus6 = new LaserBingus(600, 750)
        this.add(laserBingus6)
    let laserBingus7 = new LaserBingus(725, 750)
        this.add(laserBingus7)
    let laserBingus8 = new LaserBingus(850, 750)
        this.add(laserBingus8)
    let laserBingus9 = new LaserBingus(975, 750)
        this.add(laserBingus9)
    let laserBingus10 = new LaserBingus(1100, 750)
        this.add(laserBingus10)
    let laserBingus11 = new LaserBingus(1225, 750)
        this.add(laserBingus11)
    let laserBingus12 = new LaserBingus(1350, 750)
        this.add(laserBingus12)

    let fortification = new Fortification(850, 300)
        this.add(fortification)

    }
}



new Game()
