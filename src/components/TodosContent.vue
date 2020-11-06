<template>
  <div>
    <v-row justify="start">
      <v-col col="4" xs="12">
        <v-card class="pa-2" outlined tile>
          Today
          <v-col v-for="todo in todosToday" :key="todo.id" cols="12">
            <v-card :color="todo.tag" dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="todo.title"
                  ></v-card-title>

                  <v-card-subtitle
                    v-text="todo.date + ' / ' + todo.time"
                  ></v-card-subtitle>

                  <v-card-actions>
                    <v-btn  class="ml-2 mt-5" outlined rounded small>
                      START RADIO
                    </v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-card>
      </v-col>
      <v-col col="4" xs="12">
        <v-card class="pa-2" outlined tile>
          Tomorow
          <v-col v-for="todo in todosTomorow" :key="todo.id" cols="12">
            <v-card :color="todo.tag" dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="todo.title"
                  ></v-card-title>

                  <v-card-subtitle
                    v-text="todo.date + ' / ' + todo.time"
                  ></v-card-subtitle>

                  <v-card-actions>
                    <v-btn  class="ml-2 mt-5" outlined rounded small>
                      START RADIO
                    </v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-card>
      </v-col>
      <v-col col="4" xs="12">
        <v-card class="pa-2" outlined tile> Others day 
            <v-col v-for="todo in todosOthers" :key="todo.id" cols="12">
            <v-card :color="todo.tag" dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="todo.title"
                  ></v-card-title>

                  <v-card-subtitle
                    v-text="todo.date + ' / ' + todo.time"
                  ></v-card-subtitle>

                  <v-card-actions>
                    <v-btn  class="ml-2 mt-5" outlined rounded small>
                      START RADIO
                    </v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    justify: ["start", "center", "end", "space-around", "space-between"],
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
  computed: {
    todosToday: function () {
      const data = this.$store.state.todos;
    //   console.log(data);
      return data;
    },
    todosTomorow: function () {
      const data = this.$store.state.todos;
    //   console.log(data);
      return data;
    },
    todosOthers: function(){
      const data = this.$store.state.todos;
      return data
    }
  },
  //   methods: {
  //     getTodos() {
  //       const data = this.$store.state.todos;
  //       return data;
  //     },
  //   },
};
</script>

<style>
</style>