import { PropsWithChildren } from "react";

function Text({ children }: PropsWithChildren) {
  return <p>{children}</p>;
}

export default Text;
