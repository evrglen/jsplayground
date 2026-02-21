document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();
});
const btn = document.querySelector('[data-js="t1-btn"]');
const hex1 = document.querySelector('[data-js="t1-hex"]');

btn.addEventListener('click', () => {
  const r = Math.floor(Math.random() * 255);
  const y = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

const hex = `#${r.toString(16)}${y.toString(16)}${b.toString(16)}`;

  btn.style.backgroundColor = hex;
  hex1.textContent = hex;
});

const input = document.querySelector('[data-js="t2-input"]');
const count = document.querySelector('[data-js="t2-count"]');

input.addEventListener('input', () => {
  count.textContent = input.value.length;
});

const input2 = document.querySelector('[data-js="t3-input"]');
const btn2 = document.querySelector('[data-js="t3-add"]');
const list = document.querySelector('[data-js="t3-list"]');

btn2.addEventListener('click', () => {
  const text = input2.value;
  if (!text) return;

  const li = document.createElement('li');
  li.textContent = text;
  list.append(li);

  input2.value = '';
});

const plus = document.querySelector('[data-js="t4-plus"]')
const reset = document.querySelector('[data-js="t4-reset"]')
const minus = document.querySelector('[data-js="t4-minus"]')
const out = document.querySelector('[data-js="t4-out"]')

let count1 = 0
plus.onclick = function() {
    count1 = count1 + 1;
    out.textContent = count1;
  };

  minus.onclick = function() {
    count1 = count1 - 1;
    out.textContent = count1;
  };

  reset.onclick = function() {
    count1 = 0;
    out.textContent = count1;
  };

  let btn5=document.querySelector("[data-js='t5-open']")
  btn5.addEventListener('click',()=>{
    let hide = document.querySelector("[data-js='t5-modal']")
    hide.hidden=false;
    let close=document.querySelector("[data-js='t5-close']")
    close.addEventListener('click',()=>{
      hide.hidden=true
    })
  });
  
let taba = document.querySelector("[data-tab='a']")
let tabb = document.querySelector("[data-tab='b']")
let tabc = document.querySelector("[data-tab='c']")

let panea = document.querySelector("[data-pane='a']")
let paneb = document.querySelector("[data-pane='b']")
let panec = document.querySelector("[data-pane='c']")

taba.addEventListener('click', () => {
  taba.classList.add("is-active")
  tabb.classList.remove("is-active")
  tabc.classList.remove("is-active")

  panea.classList.add("is-active")
  paneb.classList.remove("is-active")
  panec.classList.remove("is-active")
})

tabb.addEventListener('click', () => {
  taba.classList.remove("is-active")
  tabb.classList.add("is-active")
  tabc.classList.remove("is-active")

  panea.classList.remove("is-active")
  paneb.classList.add("is-active")
  panec.classList.remove("is-active")
})

tabc.addEventListener('click', () => {
  taba.classList.remove("is-active")
  tabb.classList.remove("is-active")
  tabc.classList.add("is-active")

  panea.classList.remove("is-active")
  paneb.classList.remove("is-active")
  panec.classList.add("is-active")
})
  let btn7=document.querySelector("[data-js='t7-run']")
  btn7.addEventListener('click',()=>{
    let text=document.querySelector("[data-js='t7-input']").value
    let reversed=text.split('').reverse().join('');
    let out=document.querySelector("[data-js='t7-out']")
    out.textContent=reversed
  })

  //8
  let inpA = document.querySelector('[data-js="t8-a"]')
  let inpB = document.querySelector('[data-js="t8-b"]')
  let btnAdd = document.querySelector('[data-js="t8-add"]')
  let btnMultip = document.querySelector('[data-js="t8-mul"]')
  let output = document.querySelector('[data-js="t8-out"]')
  btnAdd.addEventListener('click', () => {
    let a = parseFloat(inpA.value)
    let b = parseFloat(inpB.value)
    let result = a + b
    if (isNaN(result)) {
      output.textContent = 'NaN'
    } else {
      output.textContent = result
    }
  })
  btnMultip.addEventListener('click', () => {
    let a = parseFloat(inpA.value)
    let b = parseFloat(inpB.value)
    let result = a * b
  
    if (isNaN(result)) {
      output.textContent = 'NaN'
    } else {
      output.textContent = result
    }
  })

  //9
  let btn9=document.querySelector("[data-js='t9-toggle']")
  btn9.addEventListener('click',()=>{
    let t9=document.querySelector("[data-js='t9-text']")
    if(t9.hidden){
      t9.hidden = false;
      btn9.textContent = 'Скрыть';
    }
    else {
    t9.hidden = true;
    btn9.textContent = 'Показать';
    }
  })
  //10
  let btn10=document.querySelector('[data-js="t10-range"]')
  btn10.addEventListener('input',()=>{
    const size=btn10.value
    document.querySelector('[data-js="t10-box"]').style.width = size + 'px';
    document.querySelector('[data-js="t10-box"]').style.height = size + 'px';
    document.querySelector('[data-js="t10-out"]').textContent = size + 'px';

  })
  //11
  let inter=0
  let remainingTime = 0;
  document.querySelector('[data-js="t11-start"]').addEventListener('click',()=>{
    clearInterval(inter)
    let remainingTime=parseInt(document.querySelector('[data-js="t11-seconds"]').value)
    let outp = document.querySelector('[data-js="t11-out"]');
    let updateTimer = () => {
          outp.textContent = remainingTime;
          if (remainingTime <= 0) {
              clearInterval(inter);
              return;
          }
          remainingTime--;
      };
      updateTimer();
      inter = setInterval(updateTimer, 1000); 
  })
  document.querySelector('[data-js="t11-stop"]').addEventListener('click',()=>{
    clearInterval(inter);
  })
   // 12
const t12Bar = document.querySelector('[data-js="t12-bar"]');
const t12Label = document.querySelector('[data-js="t12-label"]');
const t12plus = document.querySelector('[data-js="t12-plus"]');

let t12Progress = 0;

t12plus.addEventListener('click', () => {
  t12Progress = Math.min(100, t12Progress + 10);
  t12Bar.style.width = `${t12Progress}%`;
  t12Label.textContent = `${t12Progress}%`;
});

 //13
let inp=document.querySelector('[data-js="t13-input"]')
let ou=document.querySelector('[data-js="t13-out"]')

document.addEventListener('keydown',function(event){

  if(event.ctrlKey && event.key === 'k'){
    event.preventDefault();
    inp.value = '';
    ou.textContent = 'Поле очищено';
    inp.focus();
  }

  if(event.key === 'Enter'){
    ou.textContent = inp.value || 'Пусто';
  }

  if(event.key === 'Escape'){
    ou.textContent = 'Выход очищен';
  }

})
  //14
  let t14=document.querySelector('[data-js="t14-next"]')
  t14.addEventListener('click',()=>{
    const quotes=['фраза 1','фраза 2','фраза 3','фраза 4']
    const randomIndex = Math.floor(Math.random() * quotes.length)
    let outt=document.querySelector('[data-js="t14-out"]')
    outt.textContent=quotes[randomIndex]
  })
  //15
  const item = document.querySelector('[data-js="t15-item"]');
const coords = document.querySelector('[data-js="t15-coords"]');
const area15 = document.querySelector('[data-js="t15-area"]');

let drag = false;
let shiftX = 0;
let shiftY = 0;

item.addEventListener('mousedown', (e) => {
  drag = true;

  const r = item.getBoundingClientRect();
  shiftX = e.clientX - r.left;
  shiftY = e.clientY - r.top;

  e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
  if (!drag) return;

  const ar = area15.getBoundingClientRect();

  let x = e.clientX - ar.left - shiftX;
  let y = e.clientY - ar.top - shiftY;

  const maxX = area15.clientWidth - item.offsetWidth;
  const maxY = area15.clientHeight - item.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  item.style.left = x + 'px';
  item.style.top = y + 'px';

  coords.textContent = `x: ${Math.round(x)}, y: ${Math.round(y)}`;
});

document.addEventListener('mouseup', () => {
  drag = false;

});
  //16
  let btn16=document.querySelector('[data-js="t16-animate"]')
  let animatedBox = document.querySelector('[data-js="t16-box"]'); 
  btn16.addEventListener('click',()=>{
   animatedBox.classList.toggle('is-bouncing');
  })

//17
let block = 100;
let area = document.querySelector("[data-js='t17-area']")
let interval_ms_spawn = 1000
function spawnBlock(x, y) {
  let div = document.createElement("div")
  div.className = "target-div";
  div.style.left = `${x}px`
  div.style.top = `${y}px`
  area.append(div)
}
function task17(){
 setInterval(() => {
  let maxX = Math.max(0, area.clientWidth - 100)
  let maxY = Math.max(0, area.clientHeight - 100)
  let xRandom = Math.floor(Math.random() * maxX)
  let yRandom = Math.floor(Math.random() * maxY)
  spawnBlock(xRandom, yRandom);
 }, interval_ms_spawn);
 function spawnBlock(x, y) {
  let div = document.createElement("div");

  div.style.position = "absolute";
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.background = "#111";

  div.style.left = `${x}px`;
  div.style.top = `${y}px`;

  area.append(div);
}
}
task17()


//18
let area2 = document.querySelector("[data-js='t18-area']")
let rect2 = area2.getBoundingClientRect()
let width2 = rect2.width

function spawnBlock2(){
  let div2 = document.createElement("div")
  div2.className = "target-div2"
  area2.append(div2)
  div2.style.left = `${width2}px`
  div2.style.left = area2.clientWidth + "px"
  div2.style.top = "0px"
  requestAnimationFrame(() => moveBlock2(div2))
}

function moveBlock2(div2){
  let left2 = parseInt(div2.style.left)
  let newLeft2 = left2 - 1
  div2.style.left = `${newLeft2}px`

  if (newLeft2 + div2.offsetWidth <= 0){
    div2.remove()
    return
  }

  requestAnimationFrame(() => moveBlock2(div2))
}
setInterval(spawnBlock2, 5000)

//19
let area3 = document.querySelector("[data-js='t19-area']")

function spawnBlock3(){
  let div3 = document.createElement("div")
  div3.className = "target-div3"
  area3.append(div3)

  let x3 = area3.clientWidth
  let maxY3 = Math.max(0, area3.clientHeight - 100)
  let y3 = Math.floor(Math.random() * (maxY3 + 1))

  div3.style.left = x3 + "px"
  div3.style.top = y3 + "px"

  requestAnimationFrame(() => moveBlock3(div3))
}

function moveBlock3(div3){
  let x3 = parseInt(div3.style.left) || 0
  x3 = x3 - 1
  div3.style.left = x3 + "px"

  if (x3 + div3.offsetWidth <= 0){
    div3.remove()
    return
  }

  requestAnimationFrame(() => moveBlock3(div3))
}

setInterval(spawnBlock3, 2500)
//20
let area20 = document.querySelector("[data-js='t20-area']")
let scoreOut20 = document.querySelector("[data-js='t20-score']")

let score20 = 0
let interval20 = 1000

function spawnBlock20(x, y){
  let div20 = document.createElement("div")
  div20.className = "target-div20"

  div20.style.left = x + "px"
  div20.style.top = y + "px"

  div20.addEventListener("click", function(){
    score20 = score20 + 1
    scoreOut20.textContent = score20
    div20.remove()
  })

  area20.append(div20)
}

function task20(){
  setInterval(function(){
    let maxX20 = Math.max(0, area20.clientWidth - 100)
    let maxY20 = Math.max(0, area20.clientHeight - 100)

    let x20 = Math.floor(Math.random() * maxX20)
    let y20 = Math.floor(Math.random() * maxY20)

    spawnBlock20(x20, y20)
  }, interval20)
}

task20()

/*
function task31(){
    let spinBtn=document.querySelector('[data-js="t31-spin"]')
    let resultEl=document.querySelector('[data-js="t31-result"]')
    let track=document.querySelector('[data-js="t31-track"]')
    let viewport=document.querySelector('[data-js="t31-viewport"]')
    let historyElement=document.querySelector('[data-js="t31-history"]')
    if (!spinBtn  !resultEl !track){
    console.log("Чтот потерялось")
    return;
  }
  const items=[
    {id:'',name:'da sun',color:'#5e0808ff',emoji: '🌞'},
    {id:'',name:'de air',color:'rgba(133, 155, 210, 1)',emoji: '🌪️'},
    {id:'',name:'nothi',color:'rgba(0, 0, 0, 1)',emoji: '🌫️'}
  ]
  const itemWidth=140
  const repeatCount=180
  const baseSpeed=100
  const slotCount=items.length
  const CycleWidth=slotCount*itemWidth
  let offset=-CycleWidth/2
  let speed=baseSpeed
  let lastTime=0
  let animationFrameID=null
  let isSpinning=false
  let history=[]
  function normalizeOffset(value){
    let normalized=value
    while(normalized>=0){
      normalized-=CycleWidth
    }
    while(normalized< -CycleWidth){
      normalized+=CycleWidth
    }
    return normalized
  }
  function renderTrack(){
    let html=""
    for (let i = 0; i < repeatCount; i++) {
      for(const item of items){
        html+=`
        <div class="roulette__item" style="background-color:${item.color}">
          <div class="roulette__item-emoji">${item.emoji}</div>
          <div class="roulette__item-name">${item.emoji}</div>
        </div>
        `
      }
    }
    track.innerHTML=html
  }
  renderTrack()
  }
  
  task31()
  function renderTrack() {
    <div class= "roulette__item-emoji">${item.emoji}</div>
     <div class= "roulette__item-name">${item.name}</div>   
     </div>
     ;
  }
  track.innerHTML = html;
  track.style.transform = `translateX(${offset})`;
function tick(time) {
  if (!lastTime) (
    lastTime = time
  )
}
offset = normalizeOffset(offset + speed);
track.style.transform = `translateX(${offset}px)`;
renderTrack();
tick();
task31()

  animationFrameID =  requestAnimationFrame(tick);

 `translateX(${offset}px)`;

 let cardDatabase = {
    categories: {
      major: [
        { name: "", pathToImage: "", description: "", author: "" },
        { name: "", pathToImage: "", description: "", author: "" },
      ],
      minor: {
        cups: [
          { name: "", pathToImage: "", description: "", author: "" },
          { name: "", pathToImage: "", description: "", author: "" },
        ],
        wands: [
          { name: "", pathToImage: "", description: "", author: "" },
          { name: "", pathToImage: "", description: "", author: "" },
        ],
        swords: [
          { name: "", pathToImage: "", description: "", author: "" },
          { name: "", pathToImage: "", description: "", author: "" },
        ],
        pentacles: [
          { name: "", pathToImage: "", description: "", author: "" },
          { name: "", pathToImage: "", description: "", author: "" },
        ],
      },
    },
  }
*/
  //32 function task32()