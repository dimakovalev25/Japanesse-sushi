import {Header} from "./components/Layout/Header";
import {Meals} from "./components/Meals/Meals";

export const AppRest = function () {

    return (
        <div>
            <Header/>
            <main>
                <Meals/>
            </main>
        </div>
    )

}