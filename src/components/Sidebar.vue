<template>
  <div>
    <sidebar-menu :menu="menu" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        // {
        //   header: true,
        //   title: 'Now Playing',
        //   hiddenOnCollapse: true
        // },
        {
          href: '/',
          title: 'Now Playing'
        },
        {
          href: '/cooming-soon',
          title: 'Cooming Soon'
        },
        {
          href: '/theatre',
          title: 'Theatre'
        },
        {
          href: '/promotion',
          title: 'Promotion'
        },
        {
          href: '/informations',
          title: 'Informations'
        }
      ]
    }
  }
}
</script>
