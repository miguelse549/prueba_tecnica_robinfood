<template>
  <header>
    <div class="logout">
      <img class="icon-lock" src="padlock.png" alt="" />
      <span>Salir</span>
    </div>
    <div class="tabs">
      <div class="item-tab"><p>Pizzerías</p></div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  position: absolute;
  right: 0;
  top: 0;
  width: 55%;
  padding: 0 3%;
}
.logout {
  cursor: pointer;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
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
</style>