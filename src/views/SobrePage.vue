<template>
  <b-container>
    <!-- Cabeçalho -->
    <b-row class="text-center my-5">
      <b-col>
        <h1>Sobre a AcademyCode&lt;&gt;</h1>
        <p class="lead">"Transformando carreiras através da tecnologia e do aprendizado contínuo."</p>
      </b-col>
    </b-row>

    <!-- Abas para navegação -->
    <b-tabs card>
      <!-- Aba Missão -->
      <b-tab title="Missão" active>
        <b-row class="text-center my-4">
          <b-col>
            <h2>Nossa Missão</h2>
            <p>
              Ajudar estudantes e profissionais a alcançarem seus objetivos por meio de uma educação acessível,
              prática e de qualidade, focada nas demandas reais do mercado de tecnologia.
            </p>
          </b-col>
        </b-row>
      </b-tab>

      <!-- Aba Valores -->
      <b-tab title="Valores">
        <b-row class="text-center my-4">
          <b-col>
            <h2>Nossos Valores</h2>
            <ul class="text-left">
              <li><strong>Acessibilidade:</strong> Tornar o aprendizado disponível para todos.</li>
              <li><strong>Inovação:</strong> Atualizar continuamente os conteúdos e ferramentas.</li>
              <li><strong>Comunidade:</strong> Criar um espaço onde alunos e mentores crescem juntos.</li>
              <li><strong>Praticidade:</strong> Ensinar de forma direta e aplicável, com exemplos reais.</li>
            </ul>
          </b-col>
        </b-row>
      </b-tab>

      <!-- Aba O que oferecemos -->
      <b-tab title="O que oferecemos">
        <b-row class="text-center my-4">
          <b-col>
            <h2>O que oferecemos</h2>
            <p>
              Cursos em áreas como Front-end, Back-end e Administração de Banco de Dados. Nossos conteúdos incluem
              vídeo-aulas, exercícios práticos e materiais de apoio para garantir uma experiência completa de aprendizado.
            </p>
            <b-button variant="outline-primary" @click="goCursosPage">Ver Cursos</b-button>
          </b-col>
        </b-row>
      </b-tab>

      <!-- Aba Por que escolher -->
      <b-tab title="Por que escolher">
        <b-row class="text-center my-4">
          <b-col>
            <h2>Por que escolher a AcademyCode&lt;&gt;?</h2>
            <ul class="text-left">
              <li><strong>Especialização:</strong> Cursos criados por profissionais experientes do mercado.</li>
              <li><strong>Flexibilidade:</strong> Aprenda no seu ritmo e em qualquer lugar.</li>
              <li><strong>Crescimento Contínuo:</strong> Atualize constantemente suas habilidades com novos cursos.</li>
              <li><strong>Foco no Futuro:</strong> Prepare-se para as demandas do mercado de trabalho e conquiste suas metas.</li>
            </ul>
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
  name: "SobrePage",
  methods: {
    goCursosPage() {
      this.$router.push("/conteudo");
    },
  },
};
</script>

<style scoped>
h1 {
  color: #007bff;
  font-size: 2.5rem;
}

.b-tabs-card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
  font-size: 1.1rem;
}

ul li strong {
  color: #007bff;
}

/* Rodapé */
footer {
  background-color: #333;
  color: #fff;
}
</style>
