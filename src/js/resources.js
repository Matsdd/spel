import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import shrekImage from '../images/shrek.png'
import ExploderImage from '../sprites/robots/ExploderI.png'
import BackgroundImage from '../images/Background.png'



const Resources = {
    Shrek: new ImageSource(shrekImage),
    Exploder: new ImageSource(ExploderImage),
    Background: new ImageSource(BackgroundImage)
}
const ResourceLoader = new Loader([Resources.Shrek, Resources.Exploder, Resources.Background])

export { Resources, ResourceLoader }