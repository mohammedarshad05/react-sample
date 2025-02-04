import { Children, ReactNode } from "react";

interface Props {
  //   children: ReactNode;
  children: string;
}
function Greeting(props: Props) {
  return <h2>{props.children}</h2>;
}
export default Greeting;


