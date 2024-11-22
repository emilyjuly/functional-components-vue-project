import { h } from 'vue';

const TextContent = (props, context) => {
  if (props.type === 'a' && Array.isArray(props.content)) {
    const [text, url] = props.content;
    return h(
      props.type,
      { href: url, class: 'text-content-link', target: '_blank' },
      [text],
    );
  }

  if (props.type === 'ul') {
    return h(
      'ul',
      { class: 'text-content' },
      props.content.map((item) => h('li', item)),
    );
  }
  return h(props.type, { class: 'text-content' }, props.content);
};

export default TextContent;
