import React from "react";
import { ButtonGroup, ButtonGroupProp } from "./index";
import { Button } from "../Button";
import { Story } from "@storybook/react";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    direction: {
      options: ["row", "column"],
      control: { type: "radio" },
    },
    gap: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
};

const Template: Story<ButtonGroupProp> = (args) => {
  return (
    <ButtonGroup {...args}>
      <Button label="확인"></Button>
      <Button label="취소"></Button>
    </ButtonGroup>
  );
};

export const DefaultButtonGroup = Template.bind({});
DefaultButtonGroup.args = {
  direction: "row",
  gap: "small",
};
