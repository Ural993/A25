<template>
  <div>
    <h2 class="title">Заметки</h2>
    <ToDoList v-bind:todos="todos" />
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList";
export default {
  components: {
    ToDoList,
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
  },
};
</script>
<style scoped>
.title {
  margin-top: 40px;
}
</style>
