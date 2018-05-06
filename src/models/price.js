import {
    number,
    shape,
    string
} from "prop-types";


export default shape({
    currency: string.isRequired,
    value: number.isRequired,
    minorUnits: number.isRequired
});
