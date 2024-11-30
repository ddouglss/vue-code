<template>
    <div>
      <h2 class="text-center">Editar Usuário</h2>
  
      <!-- Formulário para digitar o ID do usuário -->
      <div v-if="!usuario">
        <form @submit.prevent="buscarUsuario">
          <div class="mb-3">
            <label for="idUsuario" class="form-label">ID do Usuário</label>
            <input type="number" v-model="idUsuario" class="form-control" id="idUsuario" required />
          </div>
          <button type="submit" class="btn btn-primary">Buscar Usuário</button>
        </form>
      </div>
  
      <!-- Formulário de edição de usuário -->
      <div v-if="usuario">
        <form @submit.prevent="atualizarUsuario">
          <!-- Dados do usuário para editar -->
          <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" v-model="usuario.nome" class="form-control" id="nome" required />
          </div>
          <div class="mb-3">
            <label for="sobrenome" class="form-label">Sobrenome</label>
            <input type="text" v-model="usuario.sobrenome" class="form-control" id="sobrenome" required />
          </div>
          <div class="mb-3">
            <label for="telefone" class="form-label">Telefone</label>
            <input type="text" v-model="usuario.telefone" class="form-control" id="telefone" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" v-model="usuario.email" class="form-control" id="email" required />
          </div>
          <div class="mb-3">
            <label for="cidade" class="form-label">Cidade</label>
            <input type="text" v-model="usuario.cidade" class="form-control" id="cidade" required />
          </div>
          <div class="mb-3">
            <label for="senha" class="form-label">Senha</label>
            <input type="password" v-model="usuario.senha" class="form-control" id="senha" required />
          </div>
          <div class="mb-3">
            <label for="areaCurso" class="form-label">Área do Curso</label>
            <input type="text" v-model="usuario.areaCurso" class="form-control" id="areaCurso" required />
          </div>
  
          <!-- Confirmação antes de salvar -->
          <div>
            <button type="submit" class="btn btn-primary">Salvar Alterações</button>
          </div>
        </form>
      </div>
  
      <!-- Botão para voltar para a página inicial -->
      <div class="mt-3">
        <button @click="voltarHome" class="btn btn-secondary">Voltar</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  // Defina a interface para o usuário
  interface Usuario {
    id: number;
    nome: string;
    sobrenome: string;
    telefone: string;
    email: string;
    cidade: string;
    senha: string;
    areaCurso: string;
  }
  
  export default {
    name: "UserAtualizar",
    setup() {
      const usuario = ref<Usuario | null>(null); // Dados do usuário a serem editados
      const idUsuario = ref<number | null>(null); // ID do usuário a ser editado
      const router = useRouter();
  
      // Função para buscar o usuário pelo ID
      const buscarUsuario = async () => {
        if (!idUsuario.value) {
          alert("Por favor, insira um ID válido.");
          return;
        }
  
        try {
          const response = await fetch(`http://localhost:5275/api/Usuario/${idUsuario.value}`);
          if (!response.ok) throw new Error("Erro ao carregar dados");
          usuario.value = await response.json();
        } catch (error) {
          console.error("Erro ao carregar o usuário:", error);
          alert("Erro ao carregar os dados do usuário.");
        }
      };
  
      // Função para atualizar o usuário
      const atualizarUsuario = async () => {
        if (!confirm("Tem certeza que deseja salvar as alterações?")) return;
  
        try {
          const response = await fetch(`http://localhost:5275/api/Usuario/${idUsuario.value}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario.value),
          });
  
          if (!response.ok) throw new Error("Erro ao atualizar usuário");
  
          alert("Usuário atualizado com sucesso!");
          router.push("/conta");
        } catch (error) {
          console.error("Erro ao atualizar o usuário:", error);
          alert("Erro ao salvar as alterações.");
        }
      };
  
      const voltarHome = () => {
        router.push("/conta"); 
      };
  
      return {
        usuario,
        idUsuario,
        buscarUsuario,
        atualizarUsuario,
        voltarHome,
      };
    },
  };
  </script>
  
  <style scoped>
  .form-label {
    font-weight: bold;
  }
  </style>
  