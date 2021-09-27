import { Button, ButtonProps } from "./index";
import { Story } from "@storybook/react";
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    bgColor: {
      options: ["white", "black", "red"],
      control: { type: "select" },
    },
  },
};

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
