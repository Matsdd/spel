import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import ExploderImage from '../sprites/robots/ExploderI.png'

import LaserBingusImage from '../sprites/cats/LaserBingus.png'
import FortificationImage from '../sprites/cats/Fortification.png'


import LaserImage from '../images/laser.png'
import BackgroundImage from '../images/Background.png'
import ExplosionImage from '../images/explosionimage.png'

const Resources = {
    Exploder: new ImageSource(ExploderImage),
    LaserBingus: new ImageSource(LaserBingusImage),
    Fortification: new ImageSource(FortificationImage),
    Laser: new ImageSource(LaserImage),
    Background: new ImageSource(BackgroundImage),
    Explosion: new ImageSource(ExplosionImage)
}
const ResourceLoader = new Loader([Resources.Exploder, Resources.LaserBingus, 
    Resources.Fortification, Resources.Laser, Resources.Background, Resources.Explosion])

export { Resources, ResourceLoader }