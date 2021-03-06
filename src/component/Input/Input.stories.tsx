import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./Input";

export default {
    title: 'Component/Input',
    component: Input,
    argTypes: {
        backgroundColor:{
            control: 'color'
        },
        label: {
          control: 'text'
        }
    }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {}



