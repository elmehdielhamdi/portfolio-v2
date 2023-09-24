import { Sidenav } from "./sidenav";

export const Wrapper = ({ children, active }) => {
  return (
    <div className="relative" id={active}>
      {active !== "home" && <Sidenav active={active} />}
      {children}
    </div>
  );
};
