import { truncateName } from "../utils/function";
import { useMobile768 } from "../hook/useMobile";

function truncateUsername(name) {
  const isMobile = useMobile768();
  
  return isMobile ? truncateName(name) : name;
}

export default truncateUsername;
