import { Provider } from "react-redux";
import Index from "./layout/shop";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Index />
      </Provider>
    </>
  );
}

export default App;
