import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider } from "react-redux";
import { store } from "./src/state/store";

import NativeStackNavigation from "./src/Navigation";

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NativeStackNavigation />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
