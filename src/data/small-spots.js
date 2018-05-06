import oddworld from '../assets/small-spots/oddworld.png'
import deponia from '../assets/small-spots/deponia.png'
import theSettlers2 from '../assets/small-spots/the-settlers-2.png'
import neverwinterNights from '../assets/small-spots/neverwinter-nights.png'
import assasinsCreed from '../assets/small-spots/assasins-creed.png'

const SMALL_SPOTS = [{
        title: "ODDWORLD: STRANGER'S WRATH",
        img: oddworld,
        price: {
            currency: 'USD',
            value: 999,
            minorUnits: 100
        },
        discount: 50
    },
    {
        title: "CHAOS ON DEPONIA",
        img: deponia,
        price: {
            currency: 'USD',
            value: 999,
            minorUnits: 100
        },
        owned: true
    },
    {
        title: "THE SETTLERS 2: GOLD EDITION",
        img: theSettlers2,
        price: {
            currency: 'USD',
            value: 599,
            minorUnits: 100
        }
    },
    {
        title: "NEVERWINTER NIGHTS",
        img: neverwinterNights,
        price: {
            currency: 'USD',
            value: 499,
            minorUnits: 100
        },
        discount: 50
    },
    {
        title: "ASSASIN'S CREED: DIRECTOR'S CUT",
        img: assasinsCreed,
        price: {
            currency: 'USD',
            value: 999,
            minorUnits: 100
        }
    }
]

export {
    SMALL_SPOTS
}
