import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Fortification extends Actor{

    constructor() {
        super({width:Resources.Fortification.width, height:Resources.Fortification.height})
    }

onInitialize(Engine) {
this.graphics.use(Resources.Fortification.toSprite())
this.pos = new Vector(850, 450)
this.scale = new Vector(0.4, 0.4);
}

}
