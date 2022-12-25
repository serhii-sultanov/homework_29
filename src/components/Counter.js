import { memo, useCallback } from "react";

import { HStack } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/react";

import useCounter from "../hooks/useCounter";

const Counter = () => {
  const initialValue = 1;
  const { count, increment, decrement, setCount } = useCounter(initialValue);

  const handleChange = useCallback(() => {
    return ({ target: { value } }) => {
      if (value !== "" && value < initialValue) {
        value = count;
      }
      setCount(value);
    };
  }, []);

  return (
    <HStack maxW="320px">
      <IconButton
        onClick={decrement}
        aria-label="Search database"
        icon={<MinusIcon />}
        isDisabled={count <= initialValue}
      />
      <Input onChange={handleChange} value={count} />
      <IconButton
        onClick={increment}
        aria-label="Search database"
        icon={<AddIcon />}
      />
    </HStack>
  );
};

export default memo(Counter);
