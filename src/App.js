import "./App.css";
import AppHttpHook from "./useHttpHook/AppHttpHook";
import SomeInput from "./Input/SomeInput";

const App = () => {

    return (
        <div className={'app'}>
            {/*<AppHttpHook></AppHttpHook>*/}
            <SomeInput/>
        </div>
    );
};

export default App;
