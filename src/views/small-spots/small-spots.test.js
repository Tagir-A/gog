import { SmallSpots } from "./small-spots";
import {GAMES} from '../../data/games'

describe('small-spots', () => {
    it('renders as expected', () => {
        const wrapper = shallow(<SmallSpots
            games={GAMES}
            addToCart={()=>null}
            />)
        expect(wrapper).toMatchSnapshot()
    })
})