<template>
  <footer>
    <div class="social-buttons">
      <a href="https://www.facebook.com/robinfood.Col">
        <i class="fab fa-facebook-square"></i>
      </a>

      <a href="https://www.instagram.com/robinfoodcol/">
        <i class="fab fa-instagram"></i>
      </a>
    </div>

    <img class="img" src="img/Best Pizza.png" alt="logo" />
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  display: flex;
  position: absolute;
  height: 100px;
  bottom: 0;
  right: 0;
  width: 55%;
  background-color: #1f1f1f;
  display: flex;
  align-items: center;
  padding: 0 60px;
  justify-content: space-between;
}

.img {
  height: 60%;
}

.social-buttons > i:not(:last-child) {
  margin-right: 10px;
}

i {
  color: #ffffff;
  font-size: 35px;
}
@media (max-width: 1024px) {
  footer {
    width: 100%;
    padding: 0 20px;
  }
}
</style>
