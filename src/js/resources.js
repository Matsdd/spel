import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import ExploderImage from '../sprites/robots/ExploderI.png'
import BackgroundImage from '../images/Background.png'

const Resources = {
    Exploder: new ImageSource(ExploderImage),
    Background: new ImageSource(BackgroundImage)
}
const ResourceLoader = new Loader([Resources.Exploder, Resources.Background])

export { Resources, ResourceLoader }