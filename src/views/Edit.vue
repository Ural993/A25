<template>
  <div class="about">
    <h2 class="title">Редактирование заметки</h2>
    <EditItem v-bind:todos="todos" />
  </div>
</template>
<script>
import EditItem from "@/components/EditItem";
export default {
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
  },
  components: {
    EditItem,
  },
};
</script>
<style scoped>
.title {
  margin-top: 40px;
}
</style>