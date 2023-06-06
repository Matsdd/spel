import '../css/style.css'
import * as ex from 'excalibur'
import { Actor, Engine, Vector, Timer, TextAlign } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Exploder } from './exploder'
import { LaserBingus } from './laserBingus'
import { Fortification } from './fortification'

import { CurrencyCounter } from './currencyCounter'
import { Settings } from './settings'
import { Selection } from './selection'

import { Spot } from './spot'
import { Battlefield } from "./battlefield"
import { Startscreen } from "./startscreen"
import { Actor, Engine, Vector, TextAlign, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Endscreen } from "./endscreen"

export class Game extends Engine {

    constructor() {
        super({ width: 1530.01, height: 860.01 })
        this.start(ResourceLoader).then(() => this.startGame())
        // this.showDebug(true)
    }

    startGame() {       
        this.addScene('battlefield', new Battlefield())  
        this.addScene('startscreen', new Startscreen())  
        this.addScene('endscreen', new Endscreen())  
        this.goToScene('startscreen', this) 
        console.log("Enjoy!")
    }
}



new Game()
