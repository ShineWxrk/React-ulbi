import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        styles: ['app/styles/index.scss'],
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
