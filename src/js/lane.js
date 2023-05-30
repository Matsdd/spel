import { Actor, Engine, Vector } from "excalibur"

export class lane extends Actor{

constructor(x, y) {
    super({width:Game.Background.width, height:Resources.Laser.height})
    this.pos = new Vector(x, y)
}
}

