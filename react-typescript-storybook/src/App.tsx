import React from "react";
import { Button } from "./components/Button";
import { ButtonGroup } from "./components/ButtonGroup";
import { Modal } from "./components/Modal";

import "./App.scss";

const App: React.FC = () => (
  <div className="title">
    React + Typescript + Webpack + Storybook
    <Modal>
      <ButtonGroup direction="row" rightAlign>
        <Button label="확인"></Button>
        <Button label="취소"></Button>
      </ButtonGroup>
    </Modal>
  </div>
);

export default App;
