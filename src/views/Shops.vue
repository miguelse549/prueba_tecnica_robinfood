<template>
  <div>
    <div class="container">
      <Header />
      <div class="description">
        <h2>Tiendas</h2>
        <p>Escoge tu Pizzería favorita</p>
      </div>

      <div class="cards-container">
        <Card
          v-for="(store, index) of getStores"
          :key="index"
          :name="store.name"
          :location="store.address"
          :id="store.id"
        />
      </div>
    </div>

    <template>
      <Footer />
    </template>
  </div>
</template>


<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getStores"]),
  },
  components: {
    Footer,
    Header,
    Card,
  },
};
</script>

<style>
.container {
  width: 100%;
  padding: 0 5%;
}

.description {
  font-family: "Open Sans", sans-serif;
  margin-bottom: 30px;
}
.cards-container {
  max-height: calc(100vh - 350px);
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

p {
  font-size: 14px;
  color: #adadad;
}
</style>