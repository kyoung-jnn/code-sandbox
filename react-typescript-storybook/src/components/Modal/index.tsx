import React, { Fragment } from "react";

import "./modal.scss";

export interface ModalProps {
  children: React.ReactNode;
}

/**모달창 */
export const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <Fragment>
      <div className="fullScreen darkLayer"></div>
      <div className="fullScreen whiteBoxWrapper">
        <div className="whiteBox">
          <h3>포스트 삭제</h3>
          <p>포스트를 정말로 삭제하시겠습니까?</p>
          {children}
        </div>
      </div>
    </Fragment>
  );
};
