<template>
  <div>
    <ul>
      <ToDoItem
        v-for="todo of displayedPosts"
        :key="todo.id"
        v-bind:todo="todo"
      />
    </ul>
    <b-button
      variant="outline-primary"
      v-for="pageNmber in pages"
      :key="pageNmber"
      @click="page = pageNmber"
    >
      {{ pageNmber }}
    </b-button>
  </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem";
export default {
  components: {
    ToDoItem,
  },
  props: ["todos"],
  data() {
    return {
      page: 1,
      perPage: 3,
    };
  },
  methods: {
    paginate(todos) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return todos.slice(from, to);
    },
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.todos);
    },
    pages() {
      return Math.ceil(this.todos.length / this.perPage);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn:nth-child(-n + 3) {
  margin-right: 20px !important;
}
</style>
