<template>
<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <router-link to="/home" class="navbar-brand">AcademyCode</router-link>
  
        <div>
          <div class="collapse navbar-collapse" id="navbarCollapse"></div>
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link to="/Home" class="nav-link">Home</router-link>
            </li>    
            <li class="nav-item">
              <router-link to="/conta" class="nav-link">Minha conta</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/sobre" class="nav-link">Sobre</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Sair</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>
    
 <script>
export default {
  name: "SairPage"
 }
</script>
    
<style scoped>
    
    
</style>

