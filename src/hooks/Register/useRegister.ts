import { useState } from "react";

const useRegister = () => {
  const [focus, setFocus] = useState<string>("");
  return {
    focus,
    setFocus,
  };
};

export default useRegister;
