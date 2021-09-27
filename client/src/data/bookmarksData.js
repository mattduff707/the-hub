const data = [
  {
    title: 'MDN Docs',
    baseURL: 'https://developer.mozilla.org/en-US/',
    extensions: [
      { title: 'JS: Array', url: 'docs/Web/JavaScript/Reference/Global_Objects/Array' },
      { title: 'JS: Object', url: 'docs/Web/JavaScript/Reference/Global_Objects/Object' },
      { title: 'JS: Function', url: 'docs/Web/JavaScript/Reference/Global_Objects/Function' },
      { title: 'JS: async', url: 'docs/Web/JavaScript/Reference/Statements/async_function' },
    ],
    search: {
      searchURL: 'https://developer.mozilla.org/en-US/search?q=',
    },
  },
  {
    title: 'Iconify',
    baseURL: 'https://iconify.design/',
    extensions: false,
    search: {
      searchURL: 'https://icon-sets.iconify.design/?query=',
    },
  },
  { title: 'Google Fonts', baseURL: 'https://fonts.google.com/', extensions: false },
  {
    title: 'WAI-ARIA',
    baseURL: 'https://www.w3.org/TR/wai-aria-practices/',
    extensions: false,
  },
];

export default data;
