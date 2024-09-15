module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/index.tsx',
        templateFile: 'templates/component/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/component/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/component/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'templates/component/spec.tsx.hbs'
      }
    ]
  });
};
