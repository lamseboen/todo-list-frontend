<template>
  <div>
    <v-row justify="start">
      <v-col col="4" xs="12" v-if="todosToday.length">
        <v-card class="pa-2" outlined tile>
          Today
          <v-col v-for="todo in todosToday" :key="todo.id" cols="12">
            <v-card :color="todo.tag" dark>
              <div>
                <v-btn
                  color="secondary"
                  fab
                  x-small
                  absolute
                  top
                  right
                  @click="showAlert(todo.id)"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </div>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="todo.title"
                  ></v-card-title>

                  <v-card-subtitle
                    v-text="todo.date + ' / ' + todo.time"
                  ></v-card-subtitle>

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
                </div>
              </div>
            </v-card>
          </v-col>
        </v-card>
      </v-col>
      <v-col col="4" xs="12" v-if="todosTomorow.length">
        <v-card class="pa-2" outlined tile>
          Tomorow
          <v-col v-for="todo in todosTomorow" :key="todo.id" cols="12">
            <v-card :color="todo.tag" dark>
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
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="todo.title"
                  ></v-card-title>

                  <v-card-subtitle
                    v-text="todo.date + ' / ' + todo.time"
                  ></v-card-subtitle>

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
                </div>
              </div>
            </v-card>
          </v-col>
        </v-card>
      </v-col>
      <v-col col="4" xs="12">
        <v-card class="pa-2" outlined tile>
          Others day
          <v-col v-for="todo in todosOthers" :key="todo.id" cols="12">
            <v-card :color="todo.tag" dark>
              <div class="d-flex flex-no-wrap justify-space-between">
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
                <div>
                  <v-card-title
                    class="headline"
                    v-text="todo.title"
                  ></v-card-title>

                  <v-card-subtitle
                    v-text="todo.date + ' / ' + todo.time"
                  ></v-card-subtitle>

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
                </div>
              </div>
            </v-card>
          </v-col>
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
    todosToday: function () {
      let data = this.$store.state.todos;
      data = data.filter(
        (el) => el.date == new Date().toISOString().substr(0, 10)
      );
      return data;
    },
    todosTomorow: function () {
      let data = this.$store.state.todos;
      let tomorrow = new Date();
      tomorrow.setDate(new Date().getDate() + 1);
      let dateTomorrow = tomorrow.toISOString().substr(0, 10);
      data = data.filter((el) => el.date == dateTomorrow);
      return data;
    },
    todosOthers: function () {
      let data = this.$store.state.todos;
      let tomorrow = new Date();
      tomorrow.setDate(new Date().getDate() + 1);
      let dateTomorrow = tomorrow.toISOString().substr(0, 10);
      data = data.filter((el) => el.date > dateTomorrow);
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
    showAlert() {
      // Use sweetalert2
      // const options = {
      //   confirmButtonColor: "#41b882",
      //   cancelButtonColor: "#ff7674",
      // };
      // this.$swal("Hello Vue world!!!", options);
      this.$swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Save`,
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.$swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          this.$swal.fire("Changes are not saved", "", "info");
        }
      });
    },
  },
};
</script>

<style>
</style>