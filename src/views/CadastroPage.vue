<template>
  <b-row @submit.prevent="submit" class="vh-100 vw-100 row-cadastro">
    <b-col sm="7" class="d-flex justify-content-center align-items-center">
      <img src="../assets/image/create.svg" class="img-create">
    </b-col>
    <b-col sm="5" class="d-flex justify-content-center align-items-center left-cadastro">
      <div class="col-8">
        <h2 class="text-center mb-3 tilte-cadastro">Cadastro de Usuário</h2>

       

        <b-form >
          <b-form-group label="Nome" label-for="nome">
            <b-form-input id="nome" type="text" placeholder="Digite seu nome" v-model="data.Nome" required>
            </b-form-input>
          </b-form-group>

          <b-form-group label="Sobrenome" label-for="sobrenome">
            <b-form-input id="sobrenome" type="text" placeholder="Digite seu sobrenome" v-model="data.Sobrenome" required>
            </b-form-input>
          </b-form-group>

          <b-form-group label="Telefone" label-for="telefone">
            <b-form-input id="telefone" type="tel" placeholder="(99) 99999-9999" v-model="data.Telefone" required>
            </b-form-input>
          </b-form-group>

          <b-form-group label="Email" label-for="email">
            <b-form-input id="email" type="email" placeholder="email@exemplo.com" v-model="data.Email" required>
            </b-form-input>
          </b-form-group>

          <b-form-group label="Cidade" label-for="cidade">
            <b-form-input id="cidade" type="text" placeholder="Digite sua cidade" v-model="data.Cidade" required>
            </b-form-input>
          </b-form-group>

          <b-form-group label="Senha" label-for="senha">
            <b-form-input id="senha" type="password" placeholder="Digite sua senha" v-model="data.Senha" required>
            </b-form-input>
          </b-form-group>

          <b-form-group label="Curso" label-for="curso">
            <b-form-select id="curso" v-model="data.AreaCurso" required>
              <option value="" disabled>Escolha...</option>
              <option>Back-end</option>
              <option>Front-end</option>
              <option>Full-stack</option>
              <option>Cloud</option>
            </b-form-select>
          </b-form-group>

          <b-button 
            type="submit"
            variant="primary"
            block
            :disabled="loading">
            <span v-if="loading">Cadastrando...</span>
            <span v-else>Cadastrar</span>
          </b-button>
          <hr>
           <!-- Botão Voltar -->
        <b-button variant="secondary" block @click="goBack">
          Voltar para Login
        </b-button>
        </b-form>
      </div>
    </b-col>
  </b-row>
</template>


<script lang="ts">
import { useRouter } from 'vue-router'; // Importando useRouter do Vue Router
import { reactive, ref } from "vue";
import axios from 'axios'; // Importando o Axios

export default {
  name: 'CadastroPage',
  setup() {
    const data = reactive({
      Nome: "",
      Sobrenome: "",
      Telefone: "",
      Email: "",
      Cidade: "",
      Senha: "",
      AreaCurso: "",
    });

    const loading = ref(false); // Estado de carregamento
    const router = useRouter();

    const submit = async () => {
      loading.value = true;

      try {
        const response = await axios.post('http://localhost:5275/api/Usuario', data);
        
        if (response.data.success) {
          console.log("Cadastro bem-sucedido", response.data);
          router.push("/login"); // Redireciona para a página de login após cadastro
        } else {
          console.log("Erro no cadastro", response.data.message);
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      } finally {
        loading.value = false;
      }
    };

   
    const goBack = () => {
      router.push("/login");
    };

    return {
      data,
      submit,
      loading,
      goBack
    };
  }
};
</script>


<style >
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.row-cadastro {
  margin-left: 0;
}

.left-cadastro {
  background-color: #F2F2F2;
  padding: 1rem; 
}

.tilte-cadastro {
  font-size: 1.5rem; 
  font-weight: bold;
}

.img-create {
  width: 450px; 
  height: auto; 
}

.left-cadastro .col-8 {
  max-width: 400px; 
  padding: 1rem; 
}

.b-button {
  margin-top: 1rem; 
}


</style>

