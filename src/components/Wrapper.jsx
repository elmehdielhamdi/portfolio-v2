import Sidenav from "./Sidenav";

export default function Wrapper({ children, active }) {
  return (
    <div className="relative" id={active}>
      {active !== "home" && <Sidenav active={active} />}
      {children}
    </div>
  );
}
