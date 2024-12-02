<template>
  <v-app>
    <v-main>
      <core-app-bar />
      <core-view />
      <core-footer author="wan" />
    </v-main>
  </v-app>
</template>

<script>
import CoreAppBar from '@/components/core/AppBar';
import CoreView from '@/components/core/MyView';
import CoreFooter from '@/components/core/MyFooter';

export default {
  name: 'App',

  components: {
    CoreAppBar,
    CoreView,
    CoreFooter
  },

  data: () => ({
    //
  }),
};
</script>
