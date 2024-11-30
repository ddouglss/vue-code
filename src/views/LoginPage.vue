<template>
  <b-row @submit.prevent="submit" class="vh-100 vw-100 row-login">
    <b-col sm="5" class="d-flex justify-content-center align-items-center left-login">
      <div class="col-8">
        <h2 class="text-center mb-5 tilte-login">Faça o login</h2>

        <b-form>
          <b-form-group label="E-mail" label-for="email">
            <b-form-input id="email" type="email" placeholder="usuario@email.com" autocomplete="none"
              v-model="data.Email">
            </b-form-input>
          </b-form-group>

          <b-form-group label-for="password">
            <label class="d-flex justify-content-between">
              Senha
              <small><a href="#">Esqueceu sua senha?</a></small> 
            </label>
            <b-form-input id="password" type="password" placeholder="digite sua senha" v-model="data.Senha">
            </b-form-input>
          </b-form-group>

          <b-button 
            type="button"
            variant="primary"
            block
            @click="goHomePage">
            <i class="fas fa-sign-in-alt"></i> Entrar
          </b-button>
          <hr>
          <b-button 
            type="button"
            variant="outline-secondary"
            block
            @click="goCadastroPage">
            <i class="fas fa-user-plus"></i> Não tenho conta
          </b-button>
          <hr>
          <!-- Botão de sair -->
          <b-button 
            type="button"
            variant="outline-danger"
            block
            @click="goIndexPage">
            <i class="fas fa-sign-out-alt"></i> Sair
          </b-button>
        </b-form>
      </div>
    </b-col>
    <b-col sm="7" class="d-flex justify-content-center align-items-center">
      <img src="../assets/image/login.svg" class="img-login">
    </b-col>
  </b-row>
</template>


<script lang="ts">
import { useRouter } from 'vue-router'; // Importando useRouter do Vue Router
import { reactive } from "vue";
import axios from 'axios'; // Importando o Axios

export default {
  name: 'LoginPage',
  setup() {
    const data = reactive({
      Email: "",
      Senha: ""
    });

    const router = useRouter();

    // Função para redirecionar para a página inicial
    const goHomePage = () => {
      router.push("/home");
    };

    // Função para redirecionar para a página de cadastro
    const goCadastroPage = () => {
      router.push("/cadastrar");
    };

    // Função para redirecionar para a página index (logout)
    const goIndexPage = () => {
      router.push("/");
    };

    // Função para enviar o formulário de login
    const submit = async () => {
      try {
        const response = await axios.post('http://localhost:5275/api/Usuario/login', {
          email: data.Email,
          senha: data.Senha
        });

        // Verifica a resposta da API (ajuste conforme a estrutura da sua resposta)
        if (response.data.success) {
          console.log("Login bem-sucedido", response.data);
          goHomePage(); // Redireciona para a página inicial
        } else {
          console.log("Erro no login", response.data.message); // Exibe mensagem de erro
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    return {
      data,
      goHomePage,
      goCadastroPage,
      goIndexPage, // Retorna a função goIndexPage
      submit
    };
  }
}
</script>


<style scoped>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.row-login {
  margin-left: 0;
}

.left-login {
  background-color: #F2F2F2;
}

.tilte-login {
  font-weight: bold;
}

.img-login {
  width: 600px;
  height: 600px;
}
</style>
