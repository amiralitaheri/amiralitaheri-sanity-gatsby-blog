export default {
  name: 'skill',
  type: 'document',
  title: 'Skill',
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
      name: 'priority',
      type: 'number',
      title: 'Priority'
    },
    {
      name: 'subSkills',
      type: 'array',
      title: 'Sub Skills',
      of: [
        {
          type: 'string'
        }
      ]
    }
  ],
  orderings: [
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
