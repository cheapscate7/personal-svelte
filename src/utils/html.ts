import marked from 'marked';
import insane from 'insane';

export const toHTML = (markdown: string) => insane(marked(markdown));