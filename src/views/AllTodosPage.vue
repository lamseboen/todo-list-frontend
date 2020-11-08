<template>
  <v-app>
    <Header/>
    <AddBar/>
    <!-- <FilterBar/> -->
    <v-main>
      <v-container fluid>
        <AllTodosContent/>
      </v-container>
    </v-main>

    <v-footer app>
    <!-- -->
  </v-footer>
  </v-app>
</template>

<script>
import AllTodosContent from '../components/AllTodosContent'
import Header from '../components/Header'
import AddBar from '../components/AddBar'
// import FilterBar from '../components/FilterBar'
export default {
  components: {
    AllTodosContent,
    Header,
    AddBar,
    // FilterBar,
  },
}
</script>

<style>

</style>