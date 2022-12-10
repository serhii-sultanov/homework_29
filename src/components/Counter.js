import { memo, useMemo } from "react";

import { HStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement, setCount } = useCounter(1);

  const handleChange = useMemo(() => {
    return ({ target: { value } }) => {
      if (value < 1) {
        value = count;
      }
      setCount(value);
    };
  }, []);

  return (
    <HStack maxW="320px">
      <Button onClick={decrement} isDisabled={count === 1 ? true : false}>
        -
      </Button>
      <Input onChange={handleChange} value={count} />
      <Button onClick={increment}>+</Button>
    </HStack>
  );
};

export default memo(Counter);
