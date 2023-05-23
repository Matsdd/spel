import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Laser } from './laser'

export class LaserBingus extends Actor{

timer = 0;
Enemy

constructor(Exploder, x, y) {
    super({width:Resources.LaserBingus.width, height:Resources.LaserBingus.height})
    this.Enemy = Exploder;
    this.pos = new Vector(x, y)
}

onInitialize(Engine) {
this.graphics.use(Resources.LaserBingus.toSprite())
this.scale = new Vector(0.4, 0.4);

}

onPostUpdate(Engine) {
    if (this.pos.y == this.Enemy.pos.y){
    this.timer += 1;

    if (this.timer > 60) {
        const laser = new Laser(this.pos.x, this.pos.y)
        Engine.currentScene.add(laser)

        this.timer = 0;
    }
}
}

}
