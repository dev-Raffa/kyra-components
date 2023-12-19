##A Kyra Components 
fornece uma variedade de componentes que podem ser utilizados em qualquer estrutura front-end, seja em aplicações React, Angular, Vue ou em aplicações HTML.

---

Você pode utiliar nossos componentes instalando a nossa lib em seu projeto:

```bash
    npm install kyra-components
```


Após a instalação, utilize o componente através da tag HTML correspondente, por exemplo:

```html
    <cw-card>
        ...
    </cw-card>
```

Para projetos que utilizam React, sugerimos o uso da variante da biblioteca dedicada a essa estrutura:
```bash
    npm install kyra-components-react
```

Após a instalação, chame o método defineComponents no arquivo app.js:
```js
    import { defineComponents } from 'kyra-components-react';

    defineComponents();
```

E, por fim, importe o componente no arquivo desejado:
```js
    import KyraComponent from 'kyra-components-react';
    <CwCard>
        ...
    </CwCard>
```

######Acesse nosso [storybook](https://6571a24150c8ea87b816c198-lwdutxlwuz.chromatic.com/?path=/story/card--example) e explore nossos componentes:/
