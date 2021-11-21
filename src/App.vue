<template>
  <div class="main-container">
    <div class="img-container">
      <img
        class="img-logo-principal"
        src="img/Login-Best-Pizza.png"
        alt="img-logo"
      />
      <div class="img-superpuesta" alt="imagen-pizza"></div>
    </div>

    <div class="reactive-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getData"]),
  },
  async mounted() {
    await this.getData();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.main-container {
  display: flex;
  min-height: 100vh;
}

.reactive-content {
  display: flex;
  width: 55%;
  justify-content: center;
  margin: auto 0;
  height: 100%;
}

.img-container {
  background-image: url("../public/img/imagebkg.png");
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 300px;
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  height: auto;
}

.img-superpuesta {
  background-image: url("../public/img/Pizza.png");
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 80%;
  width: 80%;
  animation: zoom-in-zoom-out 2s ease-out infinite;
}

.img-logo-principal {
  position: absolute;
  left: 0;
  top: 0;
  width: 6%;
  margin: 3% 0 0 4%;
}

@media (max-width: 1024px) {
  .img-container {
    display: none;
  }
  .reactive-content {
    width: 100%;
  }
}

@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.1, 1.1);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
