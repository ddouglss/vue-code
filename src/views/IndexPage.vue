
<template>
    <b-container>
      <!-- Seção de boas-vindas -->
      <b-row class="text-center my-5">
        <b-col>
          <h1>Bem-vindo à AcademyCode!</h1>
          <p class="lead">Transforme sua carreira e aprenda com os melhores cursos de programação.</p>
          <p>"Não importa onde você está agora, importa onde você quer chegar. Comece a sua jornada de aprendizado
            na AcademyCode!"</p>
          <b-button variant="primary" @click="goCadastroPage">Junte-se a nós agora!</b-button>
        </b-col>
      </b-row>
  
      <!-- Carrossel -->
      <b-row class="text-center my-5">
        <b-col>
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <!-- Slide 1 -->
              <div class="carousel-item active">
                <img src="../assets/image/car1.jpg" class="d-block w-100" alt="Curso de Web Development">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Desenvolvimento Web</h5>
                  <p>Aprenda a construir sites responsivos e dinâmicos com as tecnologias mais recentes.</p>
                </div>
              </div>
              <!-- Slide 2 -->
              <div class="carousel-item">
                <img src="../assets/image/car2.jpg" class="d-block w-100" alt="Curso de Desenvolvimento Mobile">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Desenvolvimento Mobile</h5>
                  <p>Crie aplicativos móveis para Android e iOS usando tecnologias como React Native e Flutter.</p>
                </div>
              </div>
              <!-- Slide 3 -->
              <div class="carousel-item">
                <img src="../assets/image/car3.jpg" class="d-block w-100" alt="Curso de Backend com Node.js">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Backend com Node.js</h5>
                  <p>Construa APIs robustas e escaláveis usando Node.js e MongoDB.</p>
                </div>
              </div>
            </div>
            <!-- Controles do Carrossel -->
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </b-col>
      </b-row>
  
      <!-- Seção de cursos -->
      <b-row class="text-center my-5">
        <b-col>
          <h2>Cursos que vão mudar sua carreira</h2>
          <p>Na AcademyCode, você tem acesso a cursos de alta qualidade, criados por especialistas da indústria de tecnologia.</p>
          <b-button variant="outline-primary" @click="goCursosPage">Ver cursos</b-button>
        </b-col>
      </b-row>
  
      <!-- Cards de cursos -->
      <b-row class="text-center">
        <b-col sm="3" v-for="curso in cursos" :key="curso.id">
          <b-card :title="curso.title" :img-src="curso.image" img-alt="Curso">
            <p>{{ curso.description }}</p>
            <b-button variant="primary" @click="goCursoDetails(cadastrar)">Ver mais</b-button>
          </b-card>
        </b-col>
      </b-row>
  
      <!-- Seção de benefícios -->
      <b-row class="text-center my-5">
        <h2>Por que escolher a AcademyCode?</h2>
      </b-row>
      <b-row class="text-left my-5">
        <b-col>
          <ul>
            <li>Acesso ilimitado aos cursos</li>
            <br>
            <li>Métodos de ensino inovadores</li>
            <br>
            <li>Suporte dedicado</li>
            <br>
            <li>Certificação profissional</li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="text-center my-5">
        <small><b-button variant="outline-success" @click="goCadastroPage">Comece agora!</b-button></small>
      </b-row>
    </b-container>
    <footer class="bg-dark text-white py-4">
    <div class="container">
      <div class="row">
        <!-- Coluna 1: Informações -->
        <div class="col-md-4">
          <h5>AcademyCode</h5>
          <p>A AcademyCode é uma plataforma de aprendizado com foco em cursos de tecnologia para impulsionar sua carreira.</p>
        </div>
        <!-- Coluna 2: Links rápidos -->
        <div class="col-md-4">
          <h5>Links Rápidos</h5>
          <ul class="list-unstyled">
            <li><a href="/" class="text-white">Início</a></li>
            <li><a href="/sobre" class="text-white">Sobre nós</a></li>
            <li><a href="/" class="text-white">Cursos</a></li>
            <li><a href="/sobre" class="text-white">Contato</a></li>
          </ul>
        </div>
        <!-- Coluna 3: Redes sociais -->
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
      name: 'IndexPage',
      data() {
        return {
          cursos: [
            {  title: "HTML, CSS e JavaScript", image: require('@/assets/image/html.jpg'), description: "Domine o trio essencial do Front-end." },
            {  title: "React.js", image: require('@/assets/image/rec.jpg'), description: "Construa interfaces modernas e dinâmicas." },
            {  title: "C# .NET", image: require('@/assets/image/c.jpg'), description: "Desenvolva APIs robustas e escaláveis." },
            {  title: "MEVN Stack", image: require('@/assets/image/mev.jpg'), description: "Combine MongoDB, Express, Vue e Node.js." }
          ]
        };
      },
      methods: {
        goCadastroPage() {
          this.$router.push('/cadastrar');
        },
        goCursosPage() {
          this.$router.push('/conteudo');
        },
        goCursoDetails() {
          this.$router.push(`/cadastrar`);
        }
      }
    };
  </script>
  
  <style scoped>
    .carousel-item img {
      object-fit: cover;
      height: 500px; 
    }
  </style>
  