function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    // domelment.setAttribute('href',reactElement.prop.href);
    // domelment.setAttribute('target', reactElement.prop.target);

    for (const key in reactElement.prop) {
        domElement.setAttribute(key, reactElement.prop[key]);
    }

    container.append(domElement);
}

const reactElement = {
    type: 'a',
    prop: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
