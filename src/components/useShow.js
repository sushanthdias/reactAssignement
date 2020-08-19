import { useState } from "react";
const useShow = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle1() {
    setIsShowing(!isShowing);
  }
  return {
    isShowing,
    toggle1,
  };
};

export default useShow;
