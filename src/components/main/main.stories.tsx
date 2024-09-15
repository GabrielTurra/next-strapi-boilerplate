import type { Meta, StoryObj } from '@storybook/react';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    title: 'Storybook Heading Example',
    description: 'This is a storybook heading example'
  }
} as Meta;

export const Default: StoryObj = {};
