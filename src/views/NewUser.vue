<template>


    <div>
      
      
  
      <!-- Formulário de cadastro de novo usuário -->
      <form @submit.prevent="submit" class="row g-3">
        <div class="col-md-6">
          <label for="Name" class="form-label">Nome</label>
          <input v-model="data.Nome" type="text" class="form-control" required />
        </div>
        <div class="col-md-6">
          <label for="Sobrenome" class="form-label">Sobrenome</label>
          <input v-model="data.Sobrenome" type="text" class="form-control" required />
        </div>
        <div class="col-md-6">
          <label for="Phone" class="form-label">Telefone</label>
          <input v-model="data.Telefone" type="tel" class="form-control" required />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input v-model="data.Email" type="email" class="form-control" required />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Cidade</label>
          <input v-model="data.Cidade" type="text" class="form-control" required />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Senha</label>
          <div class="input-group">
            <input 
              v-model="data.Senha" 
              :type="showPassword ? 'text' : 'password'" 
              class="form-control" 
              required 
            />
            <span class="input-group-text" @click="togglePasswordVisibility">
              <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
            </span>
          </div>
        </div>
        <div class="col-md-6">
          <label for="confirmPassword" class="form-label">Confirmação de Senha</label>
          <div class="input-group">
            <input 
              v-model="data.ConfirmarSenha" 
              :type="showConfirmPassword ? 'text' : 'password'" 
              class="form-control" 
              required 
            />
            <span class="input-group-text" @click="toggleConfirmPasswordVisibility">
              <i :class="showConfirmPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
            </span>
          </div>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">Curso</label>
          <select v-model="data.AreaCurso" class="form-select" required>
            <option disabled value="">Escolha...</option>
            <option>Back-end</option>
            <option>Front-end</option>
            <option>Full-stack</option>
            <option>Cloud</option>
          </select>
        </div>
        <!-- Senha Antiga (se necessário) -->
        <div class="col-md-6">
          <label for="inputOldPassword" class="form-label">Senha Antiga</label>
          <input v-model="data.SenhaAntiga" type="password" class="form-control" required />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Cadastrar</button>
        </div>
      </form>
  
      <!-- Mensagem de boas-vindas (condicional) -->
      <div v-if="cadastroRealizado" class="alert alert-success mt-3">
        <h4>Bem-vindo(a), {{ data.Nome }}!</h4>
        <p>Seu cadastro foi realizado com sucesso.</p>
      </div>
  
      <!-- Botão de Voltar -->
      <div class="mt-3">
        <button @click="goBack" class="btn btn-secondary">Voltar</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: "NewUser",
    setup() {
      const data = reactive({
        Nome: '',
        Sobrenome: '',
        Telefone: '',
        Email: '',
        Cidade: '',
        Senha: '',
        ConfirmarSenha: '', // Adicionando confirmação de senha
        AreaCurso: '',
        SenhaAntiga: '', // Adicionando senha antiga
      });
  
      const router = useRouter();
      const cadastroRealizado = ref(false); // Controla a exibição da mensagem de boas-vindas
  
      // Estado para mostrar/ocultar senhas
      const showPassword = ref(false);
      const showConfirmPassword = ref(false);
  
      // Função para alternar a visibilidade da senha
      const togglePasswordVisibility = () => {
        showPassword.value = !showPassword.value;
      };
  
      // Função para alternar a visibilidade da confirmação de senha
      const toggleConfirmPasswordVisibility = () => {
        showConfirmPassword.value = !showConfirmPassword.value;
      };
  
      const submit = async () => {
        // Verificar se a senha e a confirmação de senha coincidem
        if (data.Senha !== data.ConfirmarSenha) {
          alert("As senhas não coincidem. Por favor, verifique.");
          return;
        }
  
        try {
          const response = await fetch('http://localhost:5275/api/Usuario', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
  
          if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
          }
  
          const result = await response.json();
          console.log('Cadastro realizado com sucesso:', result);
  
          // Exibir mensagem de boas-vindas e redirecionar para a página de login
          cadastroRealizado.value = true;
          setTimeout(() => {
            router.push('/login'); // Redireciona para a página de login após o cadastro
          }, 2000);
        } catch (error) {
          console.error('Erro ao enviar dados:', error);
        }
      };
  
      const goBack = () => {
        router.go(-1); // Volta para a página anterior
      };
  
      return {
        data,
        submit,
        cadastroRealizado,
        goBack,
        showPassword,
        showConfirmPassword,
        togglePasswordVisibility,
        toggleConfirmPasswordVisibility
      };
    },
  };
  </script>
  
  <style scoped>
  .form-label {
    font-weight: bold;
  }
  .input-group-text {
    cursor: pointer;
  }
  </style>
  