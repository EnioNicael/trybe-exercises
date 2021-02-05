const getRepos = require('./exercicio-3');

const url = 'https://api.github.com/orgs/tryber/repos';

test('Testa se o repositório sd-01-week4-5-project-todo-list se encontra na lista', async () => {
  await expect(getRepos(url)).resolves.toBe('sd-01-week4-5-project-todo-list');
});