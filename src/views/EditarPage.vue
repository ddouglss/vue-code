<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
            <router-link to="/home" class="navbar-brand">AcademyCode</router-link>
        </div>
    </nav>
    <div class="container">
        <h2 class="text-center">Editar Dados</h2>

        <div v-if="isLoading" class="text-center">
            <p>Carregando dados...</p>
        </div>

        <!-- Formulário de edição -->
        <div v-if="usuario">
            <form @submit.prevent="atualizarUsuario">
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

                <!-- Área de Cursos -->
                <div class="mb-3">
                    <label class="form-label">Cursos:</label>
                    <select v-model="usuario.cursos" class="form-control">
                        <option v-for="curso in cursos" :key="curso.id" :value="curso.id">
                            {{ curso.nome }}
                        </option>
                    </select>
                </div>
                <div class="text-center">
                    <button :disabled="isUpdating" type="button" variant="primary">
                        {{ isUpdating ? 'Salvando...' : 'Salvar Alterações' }}
                    </button>
                </div>
                <hr>
                <div class="text-center">
                    <button type="button" variant="danger">
                        <router-link to="/minhaconta">sair</router-link></button>
                </div>
            </form>

            <div v-if="message" class="alert" :class="messageType">
                {{ message }}
            </div>
        </div>

        <div v-else>
            <p class="text-center">Não foi possível carregar os dados para edição.</p>
        </div>
    </div>
    <footer class="bg-dark text-white py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5>AcademyCode</h5>
                    <p>A AcademyCode é uma plataforma de aprendizado com foco em cursos de tecnologia para impulsionar
                        sua carreira.</p>
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
                        <li><a href="https://www.linkedin.com/in/douglas-souza-silva-600030253/"
                                class="text-white">LinkedIn</a></li>
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


    interface Curso {
        id: string;
        nome: string;
    }

    interface Usuario {
        nome: string;
        sobrenome: string;
        telefone: string;
        email: string;
        cidade: string;
        cursos: string[];
    }

    export default {
        name: "EditarPage",
        setup() {
            const usuario = ref<Usuario | null>(null);
            const isLoading = ref(true);
            const isUpdating = ref(false);
            const message = ref("");
            const messageType = ref("");
            const cursos = ref<Curso[]>([]);

            // Simula os cursos
            onMounted(() => {
                // Dados do usuário fictício
                usuario.value = {
                    nome: "João",
                    sobrenome: "Silva",
                    telefone: "(11) 98765-4321",
                    email: "joao.silva@email.com",
                    cidade: "São Paulo",
                    cursos: ["1"], // Simula um curso já selecionado
                };

                // Dados fictícios de cursos
                cursos.value = [
                    { id: "1", nome: "Curso de Programação" },
                    { id: "2", nome: "Curso de Design" },
                    { id: "3", nome: "Curso de Marketing" },
                ];

                // Simula o carregamento
                setTimeout(() => {
                    isLoading.value = false;
                }, 1000);
            });

            const atualizarUsuario = async () => {
                isUpdating.value = true;

                // Simula a atualização dos dados
                setTimeout(() => {
                    message.value = 'Dados atualizados com sucesso!';
                    messageType.value = 'alert-success';

                    // Simula redirecionamento após 2 segundos
                    setTimeout(() => {
                        // Em vez de redirecionar, apenas mostra uma mensagem de sucesso
                        console.log("Dados atualizados");
                    }, 2000);
                }, 1000);
            };

            return {
                usuario,
                isLoading,
                atualizarUsuario,
                isUpdating,
                message,
                messageType,
                cursos,
            };
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