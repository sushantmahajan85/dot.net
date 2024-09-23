import {defineType} from 'sanity'

export default defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of Blog Article',
      validation: (Rule) => Rule.required().min(10).max(80), // Ensure a title of reasonable length
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of Your Blog Article',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(), // Slug should be required
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
      options: {
        hotspot: true, // Allows for cropping and focal point
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: (Rule) => Rule.required(), // Alt text for accessibility
        },
      ],
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
      validation: (Rule) => Rule.required().max(200), // Limit description length
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(), // Ensure content is required
    },
    {
      name: 'metaTitle',
      type: 'string',
      title: 'Meta Title',
      validation: (Rule) => Rule.max(60), // Useful for SEO
    },
    {
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
      validation: (Rule) => Rule.max(160), // SEO meta description character limit
    },
  ],
})
