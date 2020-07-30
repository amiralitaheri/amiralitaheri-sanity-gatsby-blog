export default {
  name: 'work',
  type: 'document',
  title: 'Work',
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
      name: 'description',
      type:'bioPortableText',
      title: 'Description'
    },
    {
      name: 'descriptionFa',
      type:'bioPortableText',
      title: 'Persian Description'
    },
    {
      name:'imageName',
      type: 'string',
      title: 'Image Name'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
