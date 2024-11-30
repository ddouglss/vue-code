<template>
   <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link to="/home" class="navbar-brand">AcademyCode</router-link>
      <div>
        <div class="collapse navbar-collapse" id="navbarCollapse"></div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/minhaconta" class="nav-link">Minha conta</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Sair</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <b-container>
    <!-- Cabeçalho -->
    <b-row class="text-center my-5">
      <b-col>
        <h1>AcademyCode - Cursos</h1>
        <p class="lead">Escolha um tema e comece sua jornada de aprendizado!</p>
      </b-col>
    </b-row>

    <!-- Abas de Temas -->
    <b-tabs card>
      <!-- Aba Front-end -->
      <b-tab title="Front-end" active>
        <b-row class="text-center">
          <b-col sm="6" md="4" lg="3" v-for="curso in frontEndCursos" :key="curso.id" class="mb-4 animate__animated animate__fadeIn">
            <b-card :title="curso.title" :img-src="curso.image" :img-alt="`Imagem do curso: ${curso.title}`" img-top>
              <p class="mt-2">{{ curso.description }}</p>
              <b-button :disabled="loading" variant="primary" @click="goToConteudoPage(curso)">
                {{ loading ? 'Carregando...' : 'Acessar Conteúdo' }}
              </b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>

      <!-- Aba Back-end -->
      <b-tab title="Back-end">
        <b-row class="text-center">
          <b-col sm="6" md="4" lg="3" v-for="curso in backEndCursos" :key="curso.id" class="mb-4 animate__animated animate__fadeIn">
            <b-card :title="curso.title" :img-src="curso.image" :img-alt="`Imagem do curso: ${curso.title}`" img-top>
              <p class="mt-2">{{ curso.description }}</p>
              <b-button :disabled="loading" variant="primary" @click="goToConteudoPage(curso)">
                {{ loading ? 'Carregando...' : 'Acessar Conteúdo' }}
              </b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>

      <!-- Aba Fullstack -->
      <b-tab title="Fullstack">
        <b-row class="text-center">
          <b-col sm="6" md="4" lg="3" v-for="curso in fullstackCursos" :key="curso.id" class="mb-4 animate__animated animate__fadeIn">
            <b-card :title="curso.title" :img-src="curso.image" :img-alt="`Imagem do curso: ${curso.title}`" img-top>
              <p class="mt-2">{{ curso.description }}</p>
              <b-button :disabled="loading" variant="primary" @click="goToConteudoPage(curso)">
                {{ loading ? 'Carregando...' : 'Acessar Conteúdo' }}
              </b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>

      <!-- Aba Banco de Dados -->
      <b-tab title="Banco de Dados">
        <b-row class="text-center">
          <b-col sm="6" md="4" lg="3" v-for="curso in bancoDeDadosCursos" :key="curso.id" class="mb-4 animate__animated animate__fadeIn">
            <b-card :title="curso.title" :img-src="curso.image" :img-alt="`Imagem do curso: ${curso.title}`" img-top>
              <p class="mt-2">{{ curso.description }}</p>
              <b-button :disabled="loading" variant="primary" @click="goToConteudoPage(curso)">
                {{ loading ? 'Carregando...' : 'Acessar Conteúdo' }}
              </b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </b-container>

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

<script>

export default {
  name: "HomePage",
  data() {
    return {
      loading: false,
      frontEndCursos: [
        { id: 1, title: "HTML, CSS e JavaScript", image: require('@/assets/image/html.jpg'), description: "Domine o trio essencial do Front-end." },
        { id: 2, title: "React.js", image: require('@/assets/image/rec.jpg'), description: "Construa interfaces modernas e dinâmicas." },
      ],
      backEndCursos: [
        { id: 3, title: "C# .NET", image: require('@/assets/image/c.jpg'), description: "Desenvolva APIs robustas e escaláveis." },
        { id: 4, title: "PHP com Laravel", image: require('@/assets/image/php.jpg'), description: "Crie aplicações back-end com facilidade." },
      ],
      fullstackCursos: [
        { id: 5, title: "MERN Stack", image: require('@/assets/image/mer.jpg'), description: "Crie aplicações completas com MongoDB, Express, React e Node.js." },
        { id: 6, title: "MEVN Stack", image: require('@/assets/image/mev.jpg'), description: "Combine MongoDB, Express, Vue e Node.js." },
      ],
      bancoDeDadosCursos: [
        { id: 7, title: "SQL com MySQL", image: require('@/assets/image/my.jpg'), description: "Aprenda a gerenciar bancos de dados relacionais." },
        { id: 8, title: "NoSQL com MongoDB", image: require('@/assets/image/no.jpg'), description: "Explore o mundo dos bancos de dados não relacionais." },
      ],
    };
  },
  methods: {
    goToConteudoPage(conteudo) {
      if (!conteudo || !conteudo.id || !conteudo.title) {
        console.error("Conteúdo inválido:", conteudo);
        return;
      }
      this.loading = true;
      try {
        this.$router.push({
          name: "ConteudoPage",
          params: { id: conteudo.id, title: conteudo.title },
        });
      } finally {
        this.loading = false;
      }
    },
  },
};

</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

h1 {
  color: #000000;
  font-size: 2.5rem;
}

.nav-tabs .nav-link {
  text-align: center;
  font-weight: bold;
}
</style>
