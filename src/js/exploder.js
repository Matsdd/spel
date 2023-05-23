import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fortification } from "./fortification.js";

export class Exploder extends Actor{

randomNumber
lane
hp = 5

    getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  constructor() {
    super({width:Resources.Exploder.width/4, height:Resources.Exploder.height/4})
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
this.vel = new Vector(-80,0)
this.scale = new Vector(0.4, 0.4);
}

onPreUpdate() {
  if (this.hp <= 0) {
    this.kill()
  }
}

}
