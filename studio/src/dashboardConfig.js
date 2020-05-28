export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ecf7321ff23bedab4e26f74',
                  title: 'Sanity Studio',
                  name: 'amiralitaheri-sanity-gatsby-blog-studio',
                  apiId: '76f9354d-4251-4eac-b715-23e66b386ea8'
                },
                {
                  buildHookId: '5ecf73213dbc29c66db4495d',
                  title: 'Blog Website',
                  name: 'amiralitaheri-sanity-gatsby-blog',
                  apiId: '882d3236-97a5-440c-a002-54d3ab6aad0c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amiralitaheri/amiralitaheri-sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://amiralitaheri-sanity-gatsby-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
