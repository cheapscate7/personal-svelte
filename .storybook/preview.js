import '../public/global.css'
import ThemeDecorator from '../src/stories/ThemeDecorator.svelte'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(storyFn) => {
  const story = storyFn();

  return {
    Component: ThemeDecorator,
    props: {
      child: story.Component,
      props: story.props
    }
  }
}]