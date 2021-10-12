import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import {Provider} from "react-redux";
import Root from "./Root";

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)))
function App() {
    return (
        <Provider store={store}>
            <Root/>
        </Provider>
    );
}

export default App;
