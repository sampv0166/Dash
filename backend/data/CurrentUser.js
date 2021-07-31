const currentUser = {
  success: {
    message: 'Login successfull',
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzA0OTEwMmVlZWZlMjVkY2M0ZDFmZjM3ZGE5MmU0ZTI3OTI4NDJkNjBmZjFhYjVlYWQ0ODk0ZDQxNDU0NzA4MjhkNTQ0MmM2MjZkNTVhOTAiLCJpYXQiOjE2Mjc2NzA2NTksIm5iZiI6MTYyNzY3MDY1OSwiZXhwIjoxNjU5MjA2NjU5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.eOMRH0ouxGSr3QG_0P2oRBbJPvOV1XNxq3aD-kq0qCF7ZUEfFjRi_TPazUb44VvBGng-E7Me9_yNBQaWLk0R6A9JOhiJKmpy2mI8o8KG3rz9AliK9JQPDN5jdGFclc2PBo41wF8SfCEKEkIFs-FzDjeoEM2cGeMUwNENMUPx_bCCkpwI_PoUOd3aNPCCH1cuWsYqtXY1JGQHNzb3TWpCWC1c5UvqQze4C9Scn1tyKRFhFDxLpzd-N9H4mFRzoEuTmuOXjMDNOZvKrESQehfXffJoWo9CZbLqyvTj1pDerLfcXed_45lD0odCVaww799K-N4f-QzIi6ZA8Lyk5fTkjrrUanR0Mz1JYpfCfl0RF5I6OBzVXT64WAtv4PU1F-iuIXn5_EPpAOlXmK6_-7_O5hvT2LC8cf3BRpxm9Q2mxa2ut8MKc-Ja9LqnpwfEgxJ_7vtJJ5UwJOjKKbY2Jwabhvj92iKsF_xQO66u4zmF0VqC-h4X7FaF8_OMUAA5vo4FWGF0rX2nAYGiJiZPLE-fvBAx73UrGS8Ay41So9shpooOr6mUtd0XphooA0QTD_RNcsUgXF5OpKki_BNGYqcI6fMRGrZPg1BRdI1V_D0gpH96kD6sjEoZ3hCtXHIVlJPMLHfuXkrOQ87sZkNYNoCrGUGtxiVqEZa5Z27p-1ScEBg',
  },
  user: {
    id: 1,
    name: 'admin',
    email: 'noreply@kmz.ae',
    photo:
      'https://www.khaymatapi.mvp-apps.ae/storage/cdn/A8wB6tvVp4sNMMP6Va6VTKRIgvY8FnLoVx9Vm6KZ.png',
    typeofuser: 'S',
    email_verified_at: '2021-07-11 18:25:54',
    shop_id: null,
    permissions:
      'subcategory.add|product.add|product.delete|product.update|category.add|category.update|category.delete|variation.add|variation.update|variation.delete',
    permissionslist: {
      subcategory: ['add'],
      product: ['add', 'delete', 'update'],
      category: ['add', 'update', 'delete'],
      variation: ['add', 'update', 'delete'],
    },
  },
  status_code: 1,
};

export default currentUser;
