export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec0121058e8789f0a4bb53f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y6wvcqmp',
                  apiId: '2dfaa310-f635-413b-9947-067f8e5500f2'
                },
                {
                  buildHookId: '5ec01210ff6458d72c1956f3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8sh8ixqf',
                  apiId: '6ccf2b04-1ebd-464a-a09d-f8c75dc2b919'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/greenlin/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8sh8ixqf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
