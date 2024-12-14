import { useRef } from "react";

const Navbar = () => {
  const navContainerRef = useRef(null);
  return (
    <div ref={navContainerRef} className="fixed inset-x-0">
      <div></div>
    </div>
  );
};

export default Navbar;
