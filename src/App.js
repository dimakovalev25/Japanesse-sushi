import "./App.css";
import {AppRest} from "./Japan_restourant/AppRest";
import AppReactInside from "./React_inside/AppReactInside";
import AppHttp from "./Http/AppHttp";

const App = () => {

    return (
        <div className={'app'}>
            {/*<AppRest/>*/}
            {/*<AppReactInside/>*/}
            <AppHttp></AppHttp>
        </div>
    );
};

export default App;
