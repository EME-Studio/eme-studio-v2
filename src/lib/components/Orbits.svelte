<div class="circles-wrapper center">
  <div class="circle xxlarge center" />
  <div class="circle xlarge center" />
  <div class="circle large center" />
  <div class="circle medium center" />
  <div class="circle small center" />
  <div class="circle xsmall center" />
  <div class="circle xxsmall center" />
</div>

<style lang="scss">
  .circles-wrapper {
    position: relative;
    top: -500px;
    margin-bottom: -1000px;
    height: 1000px;
    width: 100%;
    overflow: hidden;
  }

  .circle {
    position: absolute;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(255, 255, 255);
    border-radius: 50%;
    z-index: -1;
  }

  .circle.xxsmall {
    width: 100px;
    height: 100px;
    opacity: 35%;
    animation-name: orbit-move-2;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .circle.xsmall {
    width: 200px;
    height: 200px;
    opacity: 30%;
    animation-name: orbit-move;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .circle.small {
    width: 300px;
    height: 300px;
    opacity: 25%;
    animation-name: orbit-move-3;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .circle.medium {
    opacity: 15%;
    width: 450px;
    height: 450px;

    animation-name: orbit-move;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  .circle.large {
    opacity: 5%;
    width: 600px;
    height: 600px;
    animation-name: orbit-move-2;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  .circle.xlarge {
    width: 750px;
    height: 750px;
    opacity: 3%;
  }

  .circle.xxlarge {
    box-sizing: border-box;
    width: 900px;
    height: 900px;
    opacity: 2%;
  }

  .center {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  @keyframes orbit-move {
    0% {
      transform: translateX(0px) translateY(0px) scale(1);
    }
    30% {
      transform: translateX(2px) translateY(-2px) scale(1);
    }
    60% {
      transform: translateX(-1px) translateY(3px) scale(1);
    }
    100% {
      transform: translateX(0px) translateY(0px) scale(1);
    }
  }

  @keyframes orbit-move-2 {
    0% {
      transform: translateX(0px) translateY(0px) scale(1);
    }
    30% {
      transform: translateX(1px) translateY(-1px) scale(1);
    }
    60% {
      transform: translateX(0px) translateY(3px) scale(1);
    }
    100% {
      transform: translateX(0px) translateY(0px) scale(1);
    }
  }

  @keyframes orbit-move-3 {
    0% {
      transform: translateX(0px) translateY(0px) scale(1);
    }
    30% {
      transform: translateX(2px) translateY(-2px) scale(1);
    }
    60% {
      transform: translateX(3px) translateY(-3px) scale(1);
    }
    100% {
      transform: translateX(0px) translateY(0px) scale(1);
    }
  }
</style>
