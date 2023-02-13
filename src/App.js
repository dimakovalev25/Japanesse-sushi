import "./App.css";
import {AppRest} from "./Japan_restourant/AppRest";
import AppHttpHook from "./useHttpHook/AppHttpHook";

const App = () => {

    return (
        <div className={'app'}>
            <AppRest></AppRest>
            <AppHttpHook/>
        </div>
    );
};

export default App;
