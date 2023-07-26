import food1 from "../assets/menu/Mie-Ramen.svg"
import food2 from "../assets/menu/salad-tahu.svg"
import food3 from "../assets/menu/roti-bakar.svg"
import food4 from "../assets/menu/spaghetti.svg"

import { FormattedMessage } from 'react-intl';
export const FOODS = [
    {
        id: 1,
        foodName: <FormattedMessage id="popular-menu.heading-food-1" />,
        price: 30.000,
        foodImage: food1
    },
    {
        id: 2,
        foodName: "Mie Ramen",
        price: 30.000,
        foodImage: food2
    },
    {
        id: 3,
        foodName: "Mie Ramen",
        price: 30.000,
        foodImage: food3
    },
    {
        id: 4,
        foodName: "Mie Ramen",
        price: 30.000,
        foodImage: food4
    }
]