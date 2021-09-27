import React from "react";
import cn from "classnames";
import "./buttonGroup.scss";

export interface ButtonGroupProp {
  direction: string;
  gap?: "small" | "medium" | "large";
  rightAlign?: boolean;
  children: React.ReactNode;
}

/** 
버튼을 감싸는 투명 컨테이너 입니다.
 */
export const ButtonGroup: React.FC<ButtonGroupProp> = ({
  direction = "row",
  gap = "small",
  rightAlign = false,
  children,
}) => {
  return (
    <div
      className={cn("buttonGroup", direction, gap, rightAlign && "rightAlign")}
    >
      {children}
    </div>
  );
};
