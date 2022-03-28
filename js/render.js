let obj = {
  tag: 'div',
  attrs: {
    id: 'app'
  },
  children: [
    {
      tag: 'span',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'span',
      children: [
        { tag: 'a', children: [] },
        { tag: 'a', children: [] }
      ]
    }, {
      tag: 'a',
      children: 'sss'
    }
  ]
}

function render(obj) {
  let el = document.createElement(obj.tag);

  if (obj.attrs) {
    Object.keys(obj.attrs).forEach((key) => {
      el.setAttribute(key, obj['attrs'][key])
    })
  }

  if (typeof obj.children === 'string') {
    el.appendChild(document.createTextNode(obj.children));
  }

  if (Array.isArray(obj.children)) {
    obj.children.forEach((child) => {
      el.appendChild(render(child))
    })
  }
  return el;
}

console.log(render(obj))