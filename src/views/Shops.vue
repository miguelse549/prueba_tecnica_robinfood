<template>
  <div>
    <modal :width="480" :height="600" name="modalInfo" :adaptive="true">
      <div class="modal">
        <div
          class="modal-header"
          :style="{ 'background-image': 'url(' + image + ')' }"
        ></div>

        <div class="modal-body">
          <div class="description-modal">
            <h3>
              <i class="fas fa-store"></i>
              {{ dataModal.name }}
            </h3>
            <p>
              <i class="fas fa-file-alt"></i>
              {{ dataModal.description }}
            </p>
            <h4>
              <i class="fas fa-map-marker-alt"></i>
              {{ dataModal.address }}
            </h4>
          </div>

          <div class="product-container">
            <div
              class="product-item"
              v-for="(product, index) of dataModal.products"
              :key="index"
            >
              <i class="fas fa-pizza-slice"></i>{{ product.name }}
            </div>
          </div>
        </div>
        <div style="text-align: center">
          <button @click="$modal.hide('modalInfo')" class="btn-close">
            Cerrar
          </button>
        </div>
      </div>
    </modal>

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
          @open="showInfo(store)"
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
  data() {
    return {
      dataModal: {},
      resizeModal: {},
      image: "'https://dummyimage.com/600x400/000/fff'",
    };
  },

  computed: {
    ...mapGetters(["getStores"]),
  },
  components: {
    Footer,
    Header,
    Card,
  },
  methods: {
    showInfo(store) {
      this.dataModal = store;
      this.$modal.show("modalInfo");
    },
  },
  created() {
    if (!localStorage.getItem("isAutenticated"))
      this.$router.push({ name: "Login" });
  },
};
</script>

<style>
.container {
  width: 100%;
  padding: 0 5%;
}

.modal-body {
  padding: 20px;
  font-family: "Open Sans", sans-serif;
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
i {
  font-size: 20px;
  color: black;
  margin-right: 5px;
}

.modal-header {
  width: 100%;
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 200px;
}

.product-item {
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 40px;
  border-radius: 5px;
  box-shadow: -1px 5px 9px 0px rgba(153, 153, 153, 0.75) inset;
  margin-right: 10px;
}

.product-container {
  height: 200px;
  overflow-y: scroll;
  margin-top: 20px;
}

::-webkit-scrollbar {
  width: 5px;
  background: #999999;
}
.product-container > * {
  margin-bottom: 8px;
}

.description-modal > * {
  margin-bottom: 10px;
}

.btn-close {
  background-color: #f9c444;
  font-size: 20px;
  border-radius: 5px;
  padding: 10px 15px;
}

button {
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
}

@media (max-width: 600px) {
  .cards-container {
    justify-content: center;
  }
}

@media (max-height: 480px) {
  .modal {
    height: 480px;
    overflow-y: scroll;
  }
}
</style>