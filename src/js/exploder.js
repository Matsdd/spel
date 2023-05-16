import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Exploder extends Actor{

randomNumber
lane

    getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  constructor() {
    super({width:Resources.Exploder/1, height:Resources.Exploder/1})
    this.randomNumber = this.getRandomInt(4)
    switch (this.randomNumber) {
      case 0:
        this.lane = 300;
        break;
      case 1:
        this.lane = 450;
        break;
      case 2:
        this.lane = 600;
        break;
      case 3:
        this.lane = 750;
        break;  
    }}



onInitialize(Engine) {
this.graphics.use(Resources.Exploder.toSprite())
this.pos = new Vector(1400, this.lane)
this.vel = new Vector(-20,0)
this.scale = new Vector(0.4, 0.4);
}

}
