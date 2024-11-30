<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">AcademyCode</router-link>
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
    <b-row class="text-center my-5">
      <b-col>
        <h1>{{ curso.title }}</h1>
        <p class="lead">{{ curso.description }}</p>
      </b-col>
    </b-row>

    <!-- Vídeo do curso -->
    <b-row class="text-center">
      <b-col>
        <video width="100%" height="500" controls>
          <source :src="curso.src" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "ConteudoPage",
  props: ["id"],
  data() {
    return {
      cursos: [
        {
          id: 1,
          title: "HTML, CSS e JavaScript",
          description: "Aprenda as bases do desenvolvimento front-end com projetos práticos.",
          src: require('@/assets/videos/html.mp4'), 
        },
        {
          id: 2,
          title: "React e Vue.js",
          description: "Domine as ferramentas modernas de front-end.",
          src: require('@/assets/videos/react.mp4'),
        },
        {
          id: 3,
          title: "C# .NET",
          description: "Desenvolva APIs robustas com C# e .NET.",
          src: require('@/assets/videos/net.mp4'),
        },
        {
          id: 4,
          title: "PHP com Laravel",
          description: "Crie aplicações back-end com PHP e Laravel.",
          src: require('@/assets/videos/net.mp4'),
        },
        {
          id: 5,
          title: "MERN Stack",
          description: "Construa aplicações completas usando MongoDB, Express, React e Node.js.",
          src: require('@/assets/videos/net.mp4'),
        },
        {
          id: 6,
          title: "MEVN Stack",
          description: "Explore o desenvolvimento fullstack com Vue.js.",
          src: require('@/assets/videos/net.mp4'),
        },
        {
          id: 7,
          title: "SQL com MySQL",
          description: "Gerencie bancos de dados relacionais com eficiência.",
          src: require('@/assets/videos/net.mp4'),
        },
        {
          id: 8,
          title: "NoSQL com MongoDB",
          description: "Conheça os bancos de dados NoSQL para grandes volumes de dados.",
          src: require('@/assets/videos/net.mp4'),
        },
      ],
    };
  },
  computed: {
    curso() {
      // Encontra o curso correspondente com base no ID passado pela rota
      return this.cursos.find((curso) => curso.id === parseInt(this.id)) || {
        title: "Curso não encontrado",
        description: "O conteúdo solicitado não está disponível.",
        videoUrl: "",
        src: "",
      };
    },
  },
};
</script>
