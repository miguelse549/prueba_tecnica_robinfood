<template>
  <header>
    <div class="container-logout">
      <div class="logout" @click="logout">
        <img class="icon-lock" src="padlock.png" alt="icon-logout" />
        <span>Salir</span>
      </div>
    </div>
    <div class="tabs">
      <div class="item-tab"><p>Pizzerías</p></div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("isAutenticated");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
header {
  position: absolute;
  right: 0;
  top: 0;
  width: 55%;
  padding: 0 3%;
}
.container-logout {
  display: flex;
  justify-content: flex-end;
}
.logout {
  width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-right: 20px;
  cursor: pointer;
}
.icon-lock {
  width: 30px;
}

.tabs {
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
}
span,
p {
  color: #828282;
}

p {
  padding: 0 15px;
  font-size: 18px;
}

.item-tab {
  border-bottom: 4px solid #f9c444;
  cursor: pointer;
}

@media (max-width: 1024px) {
  header {
    width: 100%;
  }
}
</style>