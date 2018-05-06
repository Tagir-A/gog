import PropTypes from "prop-types";
import price from "./price";

const {
    number,
    shape,
    string
} = PropTypes;

export default shape({
    title: string.isRequired,
    img: string.isRequired,
    discount: number,
    price: price.isRequired
});
