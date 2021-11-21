<template>
  <div class="card" @click="openModal">
    <div class="header">
      <img :src="image" alt="" />
    </div>
    <div class="content">
      <h4>{{ name }}</h4>
      <p class="location">{{ location }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    image: {
      default: "https://dummyimage.com/200x200/000/fff",
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    location: {
      required: true,
      type: String,
    },
    id: {
      required: true,
      type: Number,
    },
  },

  methods: {
    openModal() {
      this.$emit('open')
    },
  },
};
</script>

<style scoped>
.card {
  width: 200px;
  height: 240px;
  cursor: pointer;
}

.header {
  margin-bottom: 10px;
}
.content > * {
  margin-bottom: 5px;
  font-family: "Open Sans", sans-serif;
}

.location {
  font-size: 11px;
  color: #adadad;
}

img {
  border: 2px solid #adadad;
  border-radius: 8px;
}
</style>