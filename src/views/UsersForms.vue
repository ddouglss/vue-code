<template>
  
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4" v-if="isLoggedIn">
    <div class="container-fluid">
      <router-link to="/home" class="navbar-brand">AcademyCode</router-link>
    </div>
  </nav>

  <div v-if="isLoggedIn">
    <h2 class="text-center">Lista de Usuários</h2>

    <!-- Botão para adicionar um novo usuário -->
    <div class="mb-3 text-end">
      <router-link to="/user">
        <button class="btn btn-primary">Novo Usuário</button>
      </router-link>
    </div>
    <div class="mb-3 text-end">
      <router-link to="/editar">
        <button class="btn btn-primary">Atualizar</button>
      </router-link>
    </div>

    <!-- Tabela -->
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>Telefone</th>
          <th>Email</th>
          <th>Cidade</th>
          <th>Senha</th>
          <th>Área do Curso</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{ usuario.id }}</td>
          <td>{{ usuario.nome }}</td>
          <td>{{ usuario.sobrenome }}</td>
          <td>{{ usuario.telefone }}</td>
          <td>{{ usuario.email }}</td>
          <td>{{ usuario.cidade }}</td>
          <td>{{ usuario.senha }}</td>
          <td>{{ usuario.areaCurso }}</td>
          <td>
            <button
              @click="excluirUsuario(usuario.id)"
              class="btn btn-sm btn-danger"
            >
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";


// Define a interface para o tipo de usuário
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
  name: "ListaUsuarios",
  setup() {
    // Estados e referências
    const usuarios = ref<Usuario[]>([]);
    const isLoggedIn = ref(true); // Assume que o usuário está logado diretamente


    // Função para carregar usuários (GET)
    const carregarUsuarios = async () => {
      try {
        const response = await fetch("http://localhost:5275/api/Usuario");
        if (!response.ok) throw new Error("Erro ao carregar dados");
        const data: Usuario[] = await response.json();
        usuarios.value = data;
      } catch (error) {
        console.error("Erro ao carregar usuários:", error);
        alert("Erro ao carregar a lista de usuários.");
      }
    };

    // Função para excluir usuário (DELETE)
    const excluirUsuario = async (id: number) => {
      const confirmacao = prompt("Digite o ID para confirmar a exclusão:");
      if (confirmacao != id.toString()) {
        alert("ID não corresponde. A exclusão foi cancelada.");
        return;
      }

      if (!confirm("Tem certeza que deseja excluir este usuário?")) return;

      try {
        const response = await fetch(`http://localhost:5275/api/Usuario/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("Erro ao excluir usuário");

        alert("Usuário excluído com sucesso!");
        carregarUsuarios();
      } catch (error) {
        console.error("Erro ao excluir usuário:", error);
        alert("Erro ao excluir o usuário.");
      }
    };

    onMounted(() => {
      if (isLoggedIn.value) {
        carregarUsuarios();
      }
    });

    return {
      isLoggedIn,
      usuarios,
      carregarUsuarios,
      excluirUsuario,
    };
  },
};
</script>


<style scoped>
.table {
  margin-top: 20px;
}
</style>
