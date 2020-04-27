<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
      <router-view/>
    </q-page-container>
    <q-footer elevated class="bg-grey-1 text-grey-8">
      <q-tabs
        narrow-indicator
        dense
        active-color="blue"
        align="justify"
      >
        <q-route-tab  to="/" icon="mdi-washing-machine" label="洗衣" />
        <q-route-tab  to="/my" icon="mdi-account" label="我的" />

      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
  export default {
    name: 'MyLayout',

    data() {
      return {
        tab: 'mails',
        leftDrawerOpen: false,
      };
    },
  };
</script>
