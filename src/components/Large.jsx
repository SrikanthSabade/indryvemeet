import { useMediaQuery } from "react-responsive";

export const Large = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
