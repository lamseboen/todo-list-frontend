<template>
  <v-navigation-drawer permanent fixed app>
    <v-list-item link to="/">
      <v-list-item-content>
        <v-list-item-title class="title" > Simple Todo List </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <form class="pa-3">
      <div class="pt-3">
        <v-text-field
          label="Title"
          hide-details="auto"
          v-model="todoTitle"
          required
        ></v-text-field>
      </div>

      <div class="pt-3">
        <v-menu
          v-model="dateInput"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="todoDate"
              label="Date"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="todoDate" @input="dateInput = false"></v-date-picker>
        </v-menu>
      </div>
      <div class="pt-3">
        <v-menu
          ref="menu"
          v-model="timeInput"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field 
              required
              v-model="todoTime"
              label="Time"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="timeInput"
            v-model="todoTime"
            format="24hr"
            full-width
            @click:minute="$refs.menu.save(todoTime)"
          ></v-time-picker>
        </v-menu>
      </div>

      <div class="pt-3">
        <v-select
          v-model="todoTag"
          :items="colors"
          append-outer-icon="mdi-checkbox-blank-circle"
          menu-props="auto"
          label="Tag"
          single-line
          required
          :background-color="todoTag"
        ></v-select>
      </div>
      <div class="pt-3">
        <v-btn width="100%" depressed color="primary" @click="addTodoList">
          Add New Todo List
        </v-btn>
      </div>

      <!-- <v-btn class="mr-4" @click="submit"> submit </v-btn> -->
    </form>
  </v-navigation-drawer>
</template>

<script>
// CSS
export default {
  data: () => ({
    colors: [ "green", "blue", "brown"],
    rules: [(value) => !!value || "Required."],
    dateInput: false,
    timeInput: false,
    todoTitle: null,
    todoDate: new Date().toISOString().substr(0, 10),
    todoTime: null,
    todoTag: null,
  }),
  methods:{
    addTodoList(){
      const payload = {
        title: this.todoTitle,
        tag: this.todoTag,
        time: this.todoTime,
        date: this.todoDate,
        status: false
      }
      this.$store.dispatch('addTodo',payload)
      this.todoTitle = null
      this.todoTag = null
      this.todoTime = null
      this.todoDate = new Date().toISOString().substr(0, 10)
    }
  }
};
</script>

<style>
</style>