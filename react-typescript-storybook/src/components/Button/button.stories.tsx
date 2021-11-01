import React from "react";
import { Button, ButtonProps } from "./index";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "전체 설명",
      },
    },
  },
  argTypes: {
    label: {
      description: "Props에 대한 설명",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  label: "default",
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  label: "small",
  size: "small",
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  label: "medium",
  size: "medium",
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  label: "large",
  size: "large",
};
