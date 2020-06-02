export default {
  name: 'socialLinks',
  type: 'object',
  title: 'Social Media Links',
  fields: [
    {name: 'github', type: 'url', title: 'Github account'},
    {name: 'twitter', type: 'url', title: 'Twitter account'},
    {name: 'telegram', type: 'url', title: 'Telegram account'},
    {name: 'instagram', type: 'url', title: 'Instagram account'},
    {name: 'linkedin', type: 'url', title: 'Linkedin account'},
    {
      name: 'email', type: 'url', title: 'Email', validation: Rule => Rule.uri({
        scheme: ['mailto']
      })
    }
  ]
}
