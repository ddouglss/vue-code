<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div class="container-fluid">
    <router-link to="/home" class="navbar-brand">AcademyCode</router-link>
  </div>
</nav>
  <div class="container">
    <h2 class="text-center">Minha Conta</h2>

    <!-- Exibe mensagem de carregamento enquanto os dados não são carregados -->
    <div v-if="isLoading" class="text-center">
      <p>Carregando dados...</p>
    </div>

    <!-- Exibe dados do usuário -->
    <div v-if="usuario">
      <div class="mb-3">
        <label class="form-label">Nome:</label>
        <p>{{ usuario.nome }}</p>
      </div>

      <div class="mb-3">
        <label class="form-label">Sobrenome:</label>
        <p>{{ usuario.sobrenome }}</p>
      </div>

      <div class="mb-3">
        <label class="form-label">Telefone:</label>
        <p>{{ usuario.telefone }}</p>
      </div>

      <div class="mb-3">
        <label class="form-label">Email:</label>
        <p>{{ usuario.email }}</p>
      </div>

      <div class="mb-3">
        <label class="form-label">Cidade:</label>
        <p>{{ usuario.cidade }}</p>
      </div>

      <!-- Área de Cursos -->
      <div class="mb-3">
        <label class="form-label">Cursos:</label>
        <ul>
          <li v-for="curso in usuario.cursos" :key="curso">{{ curso }}</li>
        </ul>
      </div>

      <div class="text-center">
        <router-link to="/edit" class="btn btn-primary">Editar Dados</router-link>
      </div>
      <hr>
      <div class="text-center">
        <router-link to="/home" class="btn btn-danger">sair</router-link>
      </div>
    </div>

    <!-- Mensagem quando não houver dados de usuário -->
    <div v-else>
      <p class="text-center">Não foi possível carregar os dados do usuário.</p>
    </div>
  </div>
  <footer class="bg-dark text-white py-4">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>AcademyCode</h5>
          <p>A AcademyCode é uma plataforma de aprendizado com foco em cursos de tecnologia para impulsionar sua carreira.</p>
        </div>       
        <div class="col-md-4">
          <h5>Links Rápidos</h5>
          <ul class="list-unstyled">
            <li><a href="/" class="text-white">Início</a></li>
            <li><a href="/sobre" class="text-white">Sobre nós</a></li>
            <li><a href="/" class="text-white">Cursos</a></li>
            <li><a href="/sobre" class="text-white">Contato</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>Redes Sociais</h5>
          <ul class="list-unstyled">
            <li><a href="https://mail.google.com/mail/u/1/" class="text-white">E-mail</a></li>
            <li><a href="https://www.linkedin.com/in/douglas-souza-silva-600030253/" class="text-white">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/ddouglss/" class="text-white">Instagram</a></li>
          </ul>
        </div>
      </div>
      <hr class="my-4">
      <div class="text-center">
        <p>&copy; 2024 AcademyCode - Todos os direitos reservados á Douglas Souza Silva</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';

interface Usuario {
  nome: string;
  sobrenome: string;
  telefone: string;
  email: string;
  cidade: string;
  cursos: string[]; // Lista de cursos
}

export default {
  name: "MyAccount",
  setup() {
    const isLoading = ref(true);
    const usuario = ref<Usuario | null>(null);

    onMounted(() => {
      usuario.value = {
        nome: "João",
        sobrenome: "Silva",
        telefone: "(11) 98765-4321",
        email: "joao.silva@email.com",
        cidade: "São Paulo",
        cursos: ["Curso de Programação"] 
      };
  
      setTimeout(() => {
        isLoading.value = false;
      }, 1000);
    });

    return { usuario, isLoading };
  }
};
</script>

<style scoped>

.alert {
  padding: 15px;
  margin-top: 20px;
  border-radius: 5px;
  font-weight: bold;
}
</style>
