<template>
  <div class="login__container">
    <div class="login__container--form">
      <img class="img-logo" src="img/Login-Best-Pizza.png" alt="logo" />

      <h1 class="form-title">Bienvenido</h1>

      <h2 class="form-subtitle">A las mejores pizzas del país</h2>

      <form class="login__container--body">
        <div class="user-input">
          <input placeholder="Usuario" type="text" />
          <img src="img/ic_usuario.png" alt="icon-user" />
        </div>

        <div class="user-password">
          <input placeholder="Contraseña" type="text" />
          <img src="img/ic_contrase§a.png" alt="icon-password" />
        </div>

        <h2 class="password">¿Olvidaste tu contraseña?</h2>

        <button class="button">Iniciar sesión</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

.login__container {
  overflow: hidden;
  width: 600px;
}
.login__container--form > * :not(:last-child) {
  margin-bottom: 35px;
}

.login__container--form {
  text-align: center;
  padding: 20px;
}

.login__container--body {
  display: flex;
  flex-direction: column;
}

.img-logo {
  width: 40%;
}

input {
  font-size: 26px;
  outline: none;
  border: hidden;
  padding: 0px 20px;
  margin: 0 !important;
  width: 100%;
}

.user-input,
.user-password {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  border: 2px solid #999999;
  border-radius: 5px;
  padding-right: 20px;
}

input::placeholder {
  color: #adadad;
  font-size: 18px;
  font-family: 16px;
  font-family: "Open Sans", sans-serif;
}

button {
  background-color: #f9c444;
  border-radius: 5px;
  border: none;
  box-shadow: 5px 10px 18px rgba(4, 70, 70, 0.2);
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 700;
  height: 85px;
}

h1,
h2 {
  margin-bottom: 20px;
}

.form-title {
  font-weight: 600;
  font-size: 50px;
  font-family: "Open Sans", sans-serif;
}
.form-subtitle {
  text-align: center;
  font-weight: 500;
  font-family: "Open Sans", sans-serif;
  color: #828282;
}
.password {
  font-size: 20px;
  font-family: "Poppins", sans-serif;
}
</style>
