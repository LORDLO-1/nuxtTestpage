<template>
  <section class="container">
    <div class="frame">
      <h1 class="title">
          <p>{{ Message }}</p>
      </h1>
      <h2 class="info">
          <p>{{ outputId }}</p> 
      </h2>
      <a href="/" class="animated-button">
        Назад
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
      return {
          outputId: null,
          Message: ""
      };
  },
  async created() {
     let a = await this.asyncData(); 
     this.outputId = a.id;
     this.Message = a.Message;
  },
  methods: {
      async asyncData () {
          let id = this.$route.params.id;
          let b = await this.$http.$get('/server/testpage/' + id);
          return b;
      },
  },   
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.frame {
  text-align: center;
  border: 6px solid #255e3b;
  border-style: dashed;
  padding: 20px;
}

.title {
  font-size: 30px;
  font-weight: 400;
  color: #255e3b;
}

.info {
  text-align: center;
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 20px;
}

.animated-button {
  text-decoration: none;
  display: inline-block;
  margin: 10px 20px;
  padding: 15px 30px;
  overflow: hidden;
  border: 2px solid;
  border-bottom-width: 4px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 3px;
  font-weight: 600;
  color: #255e3b;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
  transition: .3s;
}
.animated-button:hover {
  background: #1c7350;
  box-shadow: 0 15px 20px 1c7350;
  color: white;
  transform: translateY(-5px);
}
</style>