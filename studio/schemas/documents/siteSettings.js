export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{type: 'author'}]
    },
    {
      title: 'Social Media Links',
      name: 'socials',
      type: 'document',
      fields: [
        {name: 'github', type: 'url', title: 'Github account'},
        {name: 'twitter', type: 'url', title: 'Twitter account'},
        {name: 'telegram', type: 'url', title: 'Telegram account'},
        {name: 'instagram', type: 'url', title: 'Instagram account'},
        {name: 'linkedin', type: 'url', title: 'Linkedin account'},
        {
          name: 'email', type: 'url', title: 'Email', validation: Rule => Rule.uri({
            scheme: ['http', 'https', 'mailto', 'tel']
          })
        }
      ]
    }
  ]
}
