import React from "react";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { Modal, ModalProps } from "./index";

import { Story } from "@storybook/react";

export default {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
};

const Template: Story<ModalProps> = (args) => {
  return (
    <Modal {...args}>
      <ButtonGroup direction="row" rightAlign>
        <Button label="확인"></Button>
        <Button label="취소"></Button>
      </ButtonGroup>
    </Modal>
  );
};

export const DefaultModal = Template.bind({});
