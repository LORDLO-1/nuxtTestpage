<template>
  <div class="container">
    <div class="frame">
      <h1 class="title">
        Вводная задача
      </h1>
      <div class="box">
        <div class="links">
          <a
            href="/testpage/0"
            class="animated-button">
         
            Вперёд >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.frame {
  text-align: center;
  border: 6px solid #203f2f;
  border-style: dashed;
  padding: 20px;
}

.title {
  font-size: 70px;
  font-weight: 500;
  color: #1e4b2f;
  border-right: 3px solid #000; 
  animation: cursor 1s infinite step-end, typing 13s infinite steps(30);
  white-space: nowrap;
  overflow: hidden;
}

@keyframes typing{
  0%{ width: 0ch}
  30%{ width: 14ch;} 
  80%{ width: 14ch;} 
  90%{ width: 0ch;} 
  100%{ width: 0ch;} 
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