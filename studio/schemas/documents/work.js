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
    },
    {
      name:'date',
      type:'string',
      title:'Date'
    },
    {
      name: 'priority',
      type: 'number',
      title: 'Priority'
    }
  ],
  orderings: [
    {
      name: 'dateAsc',
      title: 'Date new–>old',
      by: [
        {
          field: 'date',
          direction: 'asc'
        },
        {
          field: 'priority',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'dateDesc',
      title: 'Date old–>new',
      by: [
        {
          field: 'date',
          direction: 'desc'
        },
        {
          field: 'priority',
          direction: 'desc'
        }
      ]
    },
    {
      name: 'priorityDesc',
      title: 'Priority',
      by: [
        {
          field: 'priority',
          direction: 'desc'
        }
      ]
    },
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
