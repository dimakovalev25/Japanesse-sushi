import styles from './MealList.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: 'Sushi Naomi',
        description:
            "Filadelfia cheese, chicken fillet, masago, tomato, cucumber, sesame",
        price: 11.99,
    },
    {
        id: "m2",
        name: "Sushi Weet ",
        description: "Chicken fillet, masago, tomato, cucumber, sesame",
        price: 3.99,
    },
    {
        id: "m3",
        name: "Sushi with eel",
        description: "Smoked eel, unagi sauce, sesame",
        price: 4.99,
    },
    {
        id: "m4",
        name: 'Poke Salad with Salmon"',
        description:
            "Rice, salmon, cucumber, chuka, nori, tuna shavings, walnut sauce",
        price: 7.99,
    },
];

export const MealList = function () {

    const mealList = DUMMY_MEALS.map((meal) => <MealItem
        description={meal.description}
        id={meal.id}
        price={meal.price}
        key={meal.id}
        name={meal.name}>{meal.name}</MealItem>);

    return (
        <section className={styles.meals}>
            <Card>
                <ul>{mealList}</ul>
            </Card>
        </section>
    )
}

