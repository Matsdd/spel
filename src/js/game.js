import '../css/style.css'
import { Actor, Engine, Vector, Timer } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Exploder } from './exploder'
import { LaserBingus } from './laserBingus'
import { Fortification } from './fortification'

import { Spot } from './spot'

export class Game extends Engine {

catfood = 0;


    constructor() {
        super({ width: 1530.01, height: 860.01 })
        this.start(ResourceLoader).then(() => this.startGame())

        // this.showDebug(true)
    }

    onInitialize(Engine) {
        const timer = new Timer({
          fcn: () => this.spawn(),
          repeats: true,
          interval: 10000,
        })  
          Engine.currentScene.add(timer)
          timer.start()

          const spot = new Spot

        //   placeSpots()
    }
    
    // placeSpots() {
    //     for (let i = 0; i < 10; i++) {
    //         console.log('ja')
    //       }
    // }


    spawn() {   
      let exploder = new Exploder()
          this.add(exploder)
    }


    
    // onPreUpdate() {
    //     Engine.input.pointers.primary('down', placeLaserBingus())
    // }

    // placeLaserBingus() {
    //     engine.input.pointers.primary.lastScreenPos.X = x
    //     engine.input.pointers.primary.lastScreenPos.Y = y

    //     let laserBingus = new LaserBingus(x, y)
    //         this.add(laserBingus)
    // }


    startGame() {
        const Background = new Actor();
        Background.graphics.use(Resources.Background.toSprite());
        Background.pos = new Vector(767, 430);
        Background.scale = new Vector(0.8, 0.8);
        this.add(Background);

        const CurrencyCounter = new Actor();
        CurrencyCounter.graphics.use(Resources.CurrencyCounter.toSprite());
        CurrencyCounter.pos = new Vector(80, 100);
        CurrencyCounter.scale = new Vector(0.4, 0.4)
        this.add(CurrencyCounter);

        const Settings = new Actor();
        Settings.graphics.use(Resources.Settings.toSprite());
        Settings.pos = new Vector(1430, 100);
        Settings.scale = new Vector(0.4, 0.4)
        this.add(Settings);

        const Selection = new Actor();
        Selection.graphics.use(Resources.Selection.toSprite());
        Selection.pos = new Vector(700, 100);
        Selection.scale = new Vector(0.4, 0.4)
        this.add(Selection);
        
        console.log("start de game!")

    let laserBingus1 = new LaserBingus(350, 300)
        this.add(laserBingus1)
    let laserBingus2 = new LaserBingus(350, 450)
        this.add(laserBingus2)
    let laserBingus3 = new LaserBingus(350, 600)
        this.add(laserBingus3)
    let laserBingus4 = new LaserBingus(350, 750)
        this.add(laserBingus4)


    let fortification = new Fortification(850, 300)
        this.add(fortification)

    }
}



new Game()
