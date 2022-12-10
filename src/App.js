import { ChakraProvider } from "@chakra-ui/react";
import Counter from "./components/Counter";

function App() {
  return (
    <ChakraProvider>
      <Counter />
    </ChakraProvider>
  );
}

export default App;
