import {GAMES} from '../../data/games'
import { Cart } from './cart';

describe('cart-product', () => {
    it('renders as expected', () => {
        const wrapper = shallow(<Cart
            products={GAMES}
            isOpen={true}
            toggleCart={()=>null}
            removeFromCart={()=>null}
            clearCart={()=>null}
            />)
        expect(wrapper).toMatchSnapshot()
    })
})