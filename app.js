const SECTIONS = [
  "Introducción",
  "Flexbox: Contenedor y Ejes",
  "Flexbox: Items y Usos",
  "Grid: Conceptos y Contenedor",
  "Grid: Posiciones y Usos",
  "Taller Interactivo"
];

const mainContent = document.getElementById("main-content");
const prevBtn = document.getElementById("prev-section");
const nextBtn = document.getElementById("next-section");
const indicator = document.getElementById("section-indicator");
const timerDisplay = document.getElementById("timer");
const navBtns = document.querySelectorAll(".tab-btn");

let section = 0;
let timer = 1800; // 30min+15min = 45min en segundos

function formatTime(s) {
  const min = Math.floor(s/60);
  const sec = s % 60;
  return `${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}

function updateNavBar() {
  navBtns.forEach((btn,i) => {
    btn.classList.toggle('active', i === section);
  });
}

function renderSection() {
  indicator.textContent = SECTIONS[section];
  updateNavBar();
  prevBtn.disabled = section === 0;
  nextBtn.disabled = section === SECTIONS.length-1;

  switch(section) {
    case 0: // Introducción
      mainContent.innerHTML = `
        <h2>Bienvenida a Layouts Modernos</h2>
        <p>Hoy aprenderemos cómo construir <b>layouts modernos</b> en la web usando <b>Flexbox</b> y <b>Grid</b>. Estas dos herramientas de CSS permiten crear páginas responsivas, flexibles y visualmente atractivas.</p>
        <ul>
          <li><strong>Flexbox</strong>: Distribuye elementos en fila o columna, ideal para layouts lineales.</li>
          <li><strong>Grid</strong>: Permite estructurar en filas y columnas, ideal para layouts complejos bidimensionales.</li>
        </ul>
        <p>¡Veamos cómo funcionan y cómo puedes usarlos en tus proyectos modernos!</p>
       <img src="https://commons.wikimedia.org/wiki/Special:FilePath/CSS_flex_flex-direction_row_justify-content_right.svg" alt="Flexbox: Main Axis y Cross Axis" style="max-width:400px;border-radius:10px;display:block;margin:1rem auto;">
      `;
      break;

    case 1: // Flexbox Contenedor y ejes
      mainContent.innerHTML = `
        <h2>Flexbox: Contenedor y Ejes</h2>
        <p><strong>Flexbox</strong> distribuye elementos en el contenedor usando el <b>eje principal</b> y el <b>eje secundario</b>.</p>
        <pre><code>.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}</code></pre>
        <div class="live-preview" id="flex-demo"></div>
        <div style="margin: 0.7rem 0;">
          <label>flex-direction:
            <select id="flexDirection">
              <option value="row">row</option>
              <option value="column">column</option>
              <option value="row-reverse">row-reverse</option>
              <option value="column-reverse">column-reverse</option>
            </select>
          </label>
          <label>justify-content:
            <select id="justifyContent">
              <option value="flex-start">flex-start</option>
              <option value="center">center</option>
              <option value="flex-end">flex-end</option>
              <option value="space-between">space-between</option>
              <option value="space-around">space-around</option>
            </select>
          </label>
          <label>align-items:
            <select id="alignItems">
              <option value="stretch">stretch</option>
              <option value="center">center</option>
              <option value="flex-start">flex-start</option>
              <option value="flex-end">flex-end</option>
            </select>
          </label>
        </div>
      `;
      setTimeout(() => renderFlexDemo(), 80);
      break;

    case 2: // Flexbox Items y usos
      mainContent.innerHTML = `
        <h2>Flexbox: Items y Usos Comunes</h2>
        <p>Propiedades clave de los <b>ítems flex</b>:</p>
        <pre><code>.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  order: 2;
}</code></pre>
        <div class="live-preview" id="flex-items-demo"></div>
        <div style="margin: 0.7rem 0;">
          <label>flex-grow (rojo):
            <input type="range" min="0" max="5" value="1" id="growRed">
          </label>
          <label>flex-grow (azul):
            <input type="range" min="0" max="5" value="1" id="growBlue">
          </label>
          <label>order (azul):
            <input type="range" min="1" max="3" value="2" id="orderBlue">
          </label>
        </div>
        <p><em>Casos prácticos: Navbars, tarjetas, centrar elementos.</em></p>
      `;
      setTimeout(() => renderFlexItemsDemo(), 80);
      break;

    case 3: // Grid Conceptos y contenedor
      mainContent.innerHTML = `
        <h2>Grid: Conceptos y Contenedor</h2>
        <p><b>CSS Grid</b> define filas y columnas explícitas y ofrece gran control bidimensional.</p>
        <pre><code>.grid {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 12px;
}</code></pre>
        <div class="live-preview" id="grid-demo"></div>
        <div style="margin: 0.7rem 0;">
          <label>Columnas:
            <input type="text" id="gridCols" value="150px 2fr 1fr" style="width:180px;">
          </label>
          <label>Filas:
            <input type="text" id="gridRows" value="auto 1fr" style="width:120px;">
          </label>
          <label>Gap:
            <input type="number" id="gridGap" value="12" style="width:60px;"> px
          </label>
        </div>
      `;
      setTimeout(() => renderGridDemo(), 80);
      break;

    case 4: // Grid posiciones y usos
      mainContent.innerHTML = `
        <h2>Grid: Posiciones y Usos</h2>
        <p>Con Grid podemos definir áreas y posicionar elementos con <strong>grid-template-areas</strong>, <strong>grid-column</strong> y <strong>grid-row</strong>.</p>
        <pre><code>.grid {
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }</code></pre>
        <div class="live-preview" id="grid-area-demo"></div>
      `;
      setTimeout(() => renderGridAreaDemo(), 80);
      break;

    case 5: // TALLER interactivo
      mainContent.innerHTML = `
        <h2>Taller: ¡Ahora te toca a ti!</h2>
        <p>Resuelve los siguientes desafíos. Escribe tu código CSS y observa el cambio en tiempo real:</p>
        <div id="workshop-challenges">
          <div class="editor-section" id="challenge1"></div>
          <div class="editor-section" id="challenge2"></div>
          <div class="editor-section" id="challenge3"></div>
        </div>
      `;
      renderWorkshop();
      break;
  }
}

// navbar botones
navBtns.forEach((btn,i) =>
  btn.onclick = () => { section = i; renderSection(); }
);
prevBtn.onclick = () => { if(section>0) section--; renderSection(); };
nextBtn.onclick = () => { if(section < SECTIONS.length-1) section++; renderSection(); };

function startTimer() {
  timerDisplay.textContent = formatTime(timer);
  setInterval(() => {
    if (timer > 0) {
      timer--;
      timerDisplay.textContent = formatTime(timer);
    }
  }, 1000);
}

// ---- DEMOS ----
function renderFlexDemo() {
  const container = document.getElementById('flex-demo');
  container.innerHTML = `
    <div id="flexboxExample" style="display:flex; gap:18px; flex-direction:row; justify-content:center; align-items:center; height:90px;">
      <div style="width:60px; height:60px; background:tomato; color:#fff; display:flex;align-items:center;justify-content:center;border-radius:10px;">A</div>
      <div style="width:60px; height:60px; background:#2762e3;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:10px;">B</div>
      <div style="width:60px; height:60px; background:#24c686;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:10px;">C</div>
    </div>
  `;
  function update() {
    let dir = document.getElementById('flexDirection').value;
    let jc = document.getElementById('justifyContent').value;
    let ai = document.getElementById('alignItems').value;
    let el = document.getElementById('flexboxExample');
    el.style.flexDirection = dir;
    el.style.justifyContent = jc;
    el.style.alignItems = ai;
  }
  ['flexDirection','justifyContent','alignItems'].forEach(id =>
    document.getElementById(id).onchange = update
  );
}

function renderFlexItemsDemo() {
  const container = document.getElementById('flex-items-demo');
  container.innerHTML = `
    <div style="display:flex; gap:10px; height:65px;">
      <div id="flexRed" style="background:tomato;color:#fff;width:80px;display:flex;align-items:center;justify-content:center;border-radius:10px;">Red</div>
      <div id="flexBlue" style="background:#2762e3;color:#fff;width:80px;display:flex;align-items:center;justify-content:center;border-radius:10px;">Blue</div>
      <div style="background:#24c686;color:#fff;width:80px;display:flex;align-items:center;justify-content:center;border-radius:10px;">Green</div>
    </div>
  `;
  function update() {
    document.getElementById('flexRed').style.flexGrow =
      document.getElementById('growRed').value;
    document.getElementById('flexBlue').style.flexGrow =
      document.getElementById('growBlue').value;
    document.getElementById('flexBlue').style.order =
      document.getElementById('orderBlue').value;
  }
  ['growRed','growBlue','orderBlue'].forEach(id =>
    document.getElementById(id).oninput = update
  );
}

function renderGridDemo() {
  const container = document.getElementById('grid-demo');
  container.innerHTML = `
    <div id="gridExample" style="display:grid; grid-template-columns:150px 2fr 1fr; grid-template-rows:auto 1fr; gap:12px;">
      <div style="background:#2762e3;color:#fff;padding:10px;border-radius:7px;">1</div>
      <div style="background:#915dfa;color:#fff;padding:10px;border-radius:7px;">2</div>
      <div style="background:#24c686;color:#fff;padding:10px;border-radius:7px;">3</div>
      <div style="background:#f7b200;color:#fff;padding:10px;border-radius:7px;">4</div>
    </div>
  `;
  function update() {
    let cols = document.getElementById("gridCols").value;
    let rows = document.getElementById("gridRows").value;
    let gap = document.getElementById("gridGap").value;
    let el = document.getElementById("gridExample");
    el.style.gridTemplateColumns = cols;
    el.style.gridTemplateRows = rows;
    el.style.gap = gap + 'px';
  }
  ["gridCols","gridRows","gridGap"].forEach(id =>
    document.getElementById(id).oninput = update
  );
}

function renderGridAreaDemo() {
  const container = document.getElementById('grid-area-demo');
  container.innerHTML = `
    <div style="display:grid; grid-template-columns:200px 1fr; grid-template-rows:auto 1fr auto;
      grid-template-areas:'header header' 'sidebar main' 'footer footer';
      gap:9px; min-height:200px;">
      <div style="grid-area:header;background:#2762e3;color:#fff;padding:8px;border-radius:7px;">Header</div>
      <div style="grid-area:sidebar;background:#24c686;color:#fff;padding:8px;border-radius:7px;">Sidebar</div>
      <div style="grid-area:main;background:#fff;color:#2762e3;padding:8px;border-radius:7px;">Main</div>
      <div style="grid-area:footer;background:#915dfa;color:#fff;padding:8px;border-radius:7px;">Footer</div>
    </div>
  `;
}

function renderWorkshop() {
  renderEditorChallenge(
    "challenge1",
    "Desafío 1: Navbar con Flexbox",
    `<nav class="navbar">
      <div class="logo">Logo</div>
      <div class="nav-links">
        <a href="#">Inicio</a>
        <a href="#">Acerca de</a>
        <a href="#">Contacto</a>
      </div>
    </nav>`,
    `.navbar {\n  /* Añade aquí tu código */\n}\n\n.logo {\n  /* Estilo para logo */\n}\n\n.nav-links {\n  /* Añade aquí tu código */\n}\n\n.nav-links a {\n  /* Estilo para enlaces */\n}`,
    `.navbar {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background-color: #333;
      padding: 1rem 2rem;
      gap: 1rem;
    }
    .logo {
      color: white;
      font-weight: bold;
      font-size: 1.5rem;
    }
    .nav-links {
      display: flex;
      gap: 1.5rem;
    }
    .nav-links a {
      color: white;
      text-decoration: none;
      transition: color 0.3s;
    }
    .nav-links a:hover {
      color: #00bfff;
    }`
  );

  renderEditorChallenge(
    "challenge2",
    "Desafío 2: Galería de Tarjetas con Flexbox",
    `<div class="gallery">
      <div class="card">
        <div class="card-image">Imagen 1</div>
        <div class="card-content">
          <h3>Tarjeta 1</h3>
          <p>Descripción de la tarjeta</p>
        </div>
      </div>
      <div class="card">
        <div class="card-image">Imagen 2</div>
        <div class="card-content">
          <h3>Tarjeta 2</h3>
          <p>Descripción de la tarjeta</p>
        </div>
      </div>
      <div class="card">
        <div class="card-image">Imagen 3</div>
        <div class="card-content">
          <h3>Tarjeta 3</h3>
          <p>Descripción de la tarjeta</p>
        </div>
      </div>
    </div>`,
    `.gallery {\n  /* Añade aquí tu código */\n}\n\n.card {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.card-image {\n  background-color: #e0e0e0;\n  height: 150px;\n}\n\n.card-content {\n  padding: 1rem;\n}`,
    `.gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
      padding: 2rem;
    }
    .card {
      flex: 0 1 250px;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .card-image {
      background-color: #e0e0e0;
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card-content {
      padding: 1rem;
    }
    .card-content h3 {
      margin: 0 0 0.5rem 0;
    }
    .card-content p {
      margin: 0;
      color: #666;
    }`
  );

  renderEditorChallenge(
    "challenge3",
    "Desafío 3: Layout de Página con Grid",
    `<div class="page">
      <header class="header">Header</header>
      <aside class="sidebar">Sidebar</aside>
      <main class="main">Main Content</main>
      <footer class="footer">Footer</footer>
    </div>`,
    `.page {\n  /* Añade aquí tu código */\n}\n\n.header {\n  background-color: #333;\n  color: white;\n  padding: 1rem;\n}\n\n.sidebar {\n  background-color: #f0f0f0;\n  padding: 1rem;\n}\n\n.main {\n  padding: 1rem;\n  background-color: #fff;\n}\n\n.footer {\n  background-color: #333;\n  color: white;\n  padding: 1rem;\n  text-align: center;\n}`,
    `.page {
      display: grid;
      grid-template-columns: 250px 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
      min-height: 100vh;
      gap: 1rem;
    }
    .header {
      grid-area: header;
      background-color: #333;
      color: white;
      padding: 1rem;
    }
    .sidebar {
      grid-area: sidebar;
      background-color: #f0f0f0;
      padding: 1rem;
    }
    .main {
      grid-area: main;
      padding: 1rem;
      background-color: #fff;
    }
    .footer {
      grid-area: footer;
      background-color: #333;
      color: white;
      padding: 1rem;
      text-align: center;
    }`
  );
}

// --- MINI LIVE EDITOR ---
function renderEditorChallenge(id, title, html, initialCss, solutionCss) {
  const cont = document.getElementById(id);
  cont.innerHTML = `
    <h3>${title}</h3>
    <div>
      <label>HTML (solo visualización):</label>
      <pre style="background:#f5f5fa;padding:0.6rem;border-radius:7px;">${html.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</pre>
    </div>
    <div>
      <label>CSS (edita aquí el estilo):</label>
      <textarea>${initialCss}</textarea>
      <button class="solution-btn">Mostrar Solución</button>
    </div>
    <div class="live-preview"></div>
    <div class="success hidden">¡Ejercicio resuelto correctamente!</div>
  `;
  const textarea = cont.querySelector('textarea');
  const preview = cont.querySelector('.live-preview');
  const successDiv = cont.querySelector('.success');
  const showSolBtn = cont.querySelector('.solution-btn');
  let solved = false;
  function updatePreview(css) {
    preview.innerHTML = `
      <iframe style="width:99%;height:170px;border:1px solid #bbb;background:#fff;border-radius:7px;" srcdoc='<style>${css}</style>${html}'></iframe>
    `;
    if(css.replace(/\s/g,'').includes('display:flex') || css.replace(/\s/g,'').includes('display:grid')) {
      successDiv.style.display = 'block';
    } else {
      successDiv.style.display = 'none';
    }
  }
  textarea.oninput = () => updatePreview(textarea.value);
  showSolBtn.onclick = () => {
    textarea.value = solutionCss;
    updatePreview(solutionCss);
  };
  updatePreview(textarea.value);
}

// ---- INICIO ----
renderSection();
startTimer();


