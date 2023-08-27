<template>
  <section class="first-load" :class="{ 'slide-out': slideOut }">
    <div class="lds-ripple" :class="{ shrink }">
      <div></div>
      <div></div>
    </div>
  </section>
</template>
<script>
export default {
  name: "resume",
  data() {
    return {
      slideOut: false,
      shrink: false,
    };
  },
  mounted() {
    this.shrink = true;
    this.slideOut = true;
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 1200);
  },
};
</script>
<style scoped lang="scss">
.lds-ripple {
  display: flex;
  justify-content: center;
  max-width: rem(300);
  width: 100%;
}
.shrink {
  animation: shrink 0.5s ease-in-out forwards;
  animation-delay: 0.3s;
}

.first-load {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #252e30;
  z-index: 9999;
  animation: slide 0.5s ease-in-out forwards;
  animation-delay: 0.75s;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 160px;
  height: 160px;
}
.lds-ripple div {
  position: absolute;
  border: 5px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 72px;
    left: 72px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 72px;
    left: 72px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 72px;
    left: 72px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 144px;
    height: 144px;
    opacity: 0;
  }
}
@keyframes slide {
  100% {
    top: -120%;
  }
}
@keyframes shrink {
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>
