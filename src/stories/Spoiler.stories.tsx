import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spoiler from "../index";

export default {
  title: "Spoiler",
  component: Spoiler,
} as ComponentMeta<typeof Spoiler>;

const Template: ComponentStory<typeof Spoiler> = (args) => (
  <Spoiler {...args}>
    <p>HELLO, WORLD!</p>
    <p>IT'S A BIG HIDDEN TEXT YOUUUUUUUUUU</p>
  </Spoiler>
);

export const Primary = Template.bind({});
