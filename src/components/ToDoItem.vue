<template>
  <div>
    <li>
      <div class="block">
        <div>{{ todo.title }}</div>
        <div class="data">{{ todo.data }}</div>
      </div>

      <b-button
        variant="primary"
        :to="{ name: 'edit', params: { id: todo.id } }"
        >Редактировать</b-button
      >
    </li>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
.btn {
  height: 80%;
}
</style>
