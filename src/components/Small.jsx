import { useMediaQuery } from "react-responsive";
export const Small = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};
