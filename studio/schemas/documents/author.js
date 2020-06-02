export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    }, {
      name: 'nameFa',
      type: 'string',
      title: 'Persian Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'imageURL',
      type: 'url',
      title: 'Image URL'
    },
    {
      name: 'bio',
      type: 'bioPortableText',
      title: 'Biography'
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
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
