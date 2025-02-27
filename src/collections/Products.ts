import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nazwa produktu',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      label: 'Cena',
      min: 0,
      admin: {
        step: 0.01,
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Obrazek produktu',
    },
  ],
}
