# HTML

<section>

  <div class="box box_one">
    <img src="https://purepng.com/public/uploads/large/purepng.com-bicycle-helmetbicycle-helmetshelmethead-wearesafety-1701528099146xid0r.png" alt="helmet">
    <p class="text__one">HELMET PROOF R301 DESMO FLASH-NOIR</p>
    <h1 class="text__two">240$</h1>
  </div>
  <div class="box box_two">
    MESSENGER
  </div>
  <div class="box box_three">
    <p>At home in 24H Order before 9 39 18</p>
    <p>Free delivery and returns</p>
  </div>
  <div class="box box_four">
    <p class="text__one">HEADPHONES R032 DESMO RAM</p>
    <p class="text__two">800$</p>
  </div>
  <div class="box box_five">
    <p>Lightness</p>
    <input id="range" type="range" min="1" max="100" value="50">
    <div class="labels">
      <label for="range">Very Heavy</label>
      <label for="range">Feather Weight</label>
    </div>
  </div>
  <div class="box box_six">
    <p>Available Colors</p>
    <div class="colors color_one"></div>
    <div class="colors color_two"></div>
    <div class="colors color_three"></div>
  </div>
  <div class="box box_seven">
    <h3>Main Features</h3>
    <div>
      <p class="text__one">talk time</p>
      <p class="text__two">upto 10hrs talk time when connected to cell phone</p>
    </div>
    <div>
      <p class="text__one">music</p>
      <p class="text__two">control cellphone music through AVRCP . Forward,backward,play,pause</p>
    </div>
  </div>
  <div class="box box_eight">
    <h3>Description</h3>
    <p>Water proof</p>
    <div class="circle"></div>
  </div>

</section>

# CSS

*,
*::after,
*::before {
  margin: 0;
  box-sizing: border-box;
  font-family: "Alegreya Sans SC", sans-serif;
}

body {
  background: linear-gradient(30deg, #bdbbbb, #c1cedc);
}

section {
  column-count: 3;
  column-width: 200px;
  margin: 30px auto;
  max-width:900px;
}

.box {
  display: inline-block;
  margin: 15px 0px;
  padding: 30px;
  width: 100%;
  border-radius: 15px;
}

.box_one {
  color: #fff;
  position: relative;
  height: 210px;
  background: #2e2939;

  img {
    height: 100px;
    position: absolute;
    top: -30px;
    right: 10px;
  }

  .text__one {
    font-weight: bold;
    font-size: 15px;
    margin: 45px 0px 30px;
  }

  .text__two {
    font-weight: bold;
    font-size: 30px;
  }
}

.box_two {
  color: #fff;
  font-weight: bold;
  background: #2e2939;
}

.box_three {
  background: #fff;
  color: #2e2939;
  p {
    margin: 10px 0px;
    margin-left: 20px;
    position: relative;

    &::before {
      content: "";
      height: 10px;
      width: 10px;
      background: #f88e2d;
      position: absolute;
      border-radius: 50%;
      left: -25px;
      top: 4px;
      box-shadow: 0px 0px 0px 3px #fff, 0px 0px 0px 5px #f88e2d;
    }
  }
}

.box_four {
  background: #fff;
  color: #2e2939;
  font-weight: bold;
  height: 180px;
  .text__one {
    font-weight: bold;
    font-size: 25px;
    margin: 0px 0px 10px;
  }

  .text__two {
    font-weight: bold;
    font-size: 30px;
  }
}

.box_five {
  background: #fff;
  color: #2e2939;
  font-weight: bold;

  p {
    font-size: 20px;
  }
  #range {
    margin-top: 15px;
    -webkit-appearance: none;
    width: 100%;
    height: 18px;
    border-radius: 20px;
    background: #f3f3f3;
    outline: none;
  }

  #range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    background: #f88e2d;
    cursor: pointer;
    border-radius: 50%;
  }

  .labels {
    display:flex;
    justify-content:space-between;
    font-size: 10px;
    margin-top:10px;
  }
}

.box_six{
  background:#fff;
  
    p{
      font-weight:bold;
      font-size:18px;
      margin:10px 0px;
    }
    .colors{
      height:30px;
      width:30px;
      border-radius:50%;
      display:inline-block;
      margin:0px 20px;
    }
  
  .color_one{
    background:#05cc05;
  }
  
  .color_two{
    background:#3F51B5;
  }
  
  .color_three{
    background:#E91E63;
  }
}

.box_seven{
  color: #fff;
  background: #2e2939;
  height:200px;
  h3{
    font-weight:bold;
    margin-bottom:10px;
  }
  div{
    margin:10px 0px;
    .text__one{
      margin:10px;
      font-weight:bold;
    }
    
    .text__two{
      font-size:10px;
      margin:10px;
    }
    
  }
  
}

.box_eight{
  background: #fff;
  color: #2e2939;
  font-weight: bold;
  font-size:30px;
  overflow:hidden;
  position:relative;
  height:250px;
  p{
    font-size:15px;
  }
  .circle{
    height:70px;
    width:70px;
    margin:50px 0px 10px;
    background:#fff;
    border-radius:50%;
    box-shadow:
      0px 0px 0px 25px #f88e2d,
      0px 0px 15px 26px #f88e2d;
    position:absolute;
    left:0px
  }
  
}