<template>
  <v-app>
    <Header/>
    <AddBar/>
    <!-- <FilterBar/> -->
    <v-main>
      <v-container fluid>
        <TodosContent/>
      </v-container>
    </v-main>

    <v-footer app>
    <!-- -->
  </v-footer>
  </v-app>
</template>

<script>
import TodosContent from '../components/TodosContent'
import Header from '../components/Header'
import AddBar from '../components/AddBar'
// import FilterBar from '../components/FilterBar'
export default {
  components: {
    TodosContent,
    Header,
    AddBar,
    // FilterBar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>

</style>