import Layout from '@/layout/index.vue';

export default {
  path: '/nested',
  name: 'Nested',
  component: Layout,
  redirect: '/nested/example1',
  meta: { title: '嵌套页面', icon: 'file-copy' },
  children: [
    {
      path: 'example1',
      name: 'Example1',
      component: () =>
        import(
          /* webpackChunkName: 'group-nested' */ '@/views/nested/example-1.vue'
        ),
      meta: { title: '嵌套页面一' },
    },
    {
      path: 'example2',
      name: 'Example2',
      component: () =>
        import(
          /* webpackChunkName: 'group-nested' */ '@/views/nested/example-2.vue'
        ),
      meta: { title: '嵌套页面二' },
    },
  ],
};
