<template>
  <div>
    <v-row>
      <v-col v-for="todo in todos" :key="todo.id" cols="4">
        <v-card
          class="mx-auto"
          max-width="344"
          outlined
          tile
          :color="todo.tag"
          dark
        >
          <div>
            <v-btn
              color="secondary"
              fab
              x-small
              absolute
              top
              right
              @click="delTodo(todo.id)"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">OVERLINE</div>
              <v-list-item-title class="headline mb-1">
                {{ todo.title }}
              </v-list-item-title>
              <v-list-item-subtitle>{{
                todo.date + " / " + todo.time
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-row justify="end">
            <v-col col="12" md="12">
              <v-card-actions>
                <!-- <v-spacer></v-spacer> -->
                <v-btn
                  class="ml-2 mt-5 mb-4"
                  outlined
                  rounded
                  small
                  absolute
                  right
                  @click.stop="editDialog(todo.id)"
                >
                  <v-icon>mdi-lead-pencil</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <form class="pa-3">
          <div class="pt-3">
            <v-text-field
              label="Title"
              hide-details="auto"
              v-model="todoTitleEdit"
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
                  v-model="todoDateEdit"
                  label="Date"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="todoDateEdit"
                @input="dateInput = false"
              ></v-date-picker>
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
                  v-model="todoTimeEdit"
                  label="Time"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="timeInput"
                v-model="todoTimeEdit"
                format="24hr"
                full-width
                @click:minute="$refs.menu.save(todoTimeEdit)"
              ></v-time-picker>
            </v-menu>
          </div>

          <div class="pt-3">
            <v-select
              v-model="todoTagEdit"
              :items="colors"
              append-outer-icon="mdi-checkbox-blank-circle"
              menu-props="auto"
              label="Tag"
              single-line
              required
              :color="todoTagEdit"
              :background-color="todoTagEdit"
            ></v-select>
          </div>
          <div class="pt-3">
            <v-btn width="100%" depressed color="primary" @click="updateTodo">
              Add New Todo List
            </v-btn>
          </div>
        </form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    justify: ["start", "center", "end", "space-around", "space-between"],
    colors: ["green", "blue", "brown"],
    dialog: false,
    dateInput: false,
    timeInput: false,
    todoTitleEdit: "",
    todoDateEdit: "",
    todoTimeEdit: "",
    todoTagEdit: "",
    id: "",
  }),
  computed: {
    todos: function () {
      let data = this.$store.state.todos;
      return data;
    },
  },
  methods: {
    delTodo(id) {
      this.$store.dispatch("delTodo", id);
    },
    editDialog(id) {
      const dataEdit = this.$store.state.todos.filter((el) => {
        return el.id == id;
      });
      console.log(dataEdit);
      this.todoTitleEdit = dataEdit[0].title;
      this.todoDateEdit = dataEdit[0].date;
      this.todoTimeEdit = dataEdit[0].time;
      this.todoTagEdit = dataEdit[0].tag;
      this.id = id;
      this.dialog = true;
    },
    updateTodo() {
      const payload = {
        id: this.id,
        title: this.todoTitleEdit,
        tag: this.todoTagEdit,
        time: this.todoTimeEdit,
        date: this.todoDateEdit,
        status: false,
      };
      this.$store.dispatch("updateTodo", payload);
      this.dialog = false;
    },
  },
};
</script>

<style>
</style>