import {GAMES} from '../../../data/games'
import { CartProduct } from './cart-product';

describe('cart-product', () => {
    it('renders as expected', () => {
        const wrapper = shallow(<CartProduct
            product={GAMES[0]}
            onRemoveClick={()=>null}
            />)
        expect(wrapper).toMatchSnapshot()
    })
})