// ===================================
// Usuarios, equipo y contraseña
// ===================================

const usuarios = {
  "carlos.arellano@ultimateleisureclub.com": { equipo: "MC", password: "Lima482" },
  "deivis.godoy@ultimateleisureclub.com": { equipo: "MC", password: "Roca739" },
  "pamela.brown@ultimateleisureclub.com": { equipo: "MC", password: "Nova615" },
  "rodolfo.sanchez@ultimateleisureclub.com": { equipo: "MC", password: "Atlas204" },
  "tatyana.garcia@ultimateleisureclub.com": { equipo: "MC", password: "Bruma918" },
  "yazmin.iglesias@ultimateleisureclub.com": { equipo: "MC", password: "Solido356" },

  "ariadne.salvatierra@ultimateleisureclub.com": { equipo: "TS", password: "Cima742" },
  "celeste.gonzalez@ultimateleisureclub.com": { equipo: "TS", password: "Faro589" },
  "gianni.fenoglio@ultimateleisureclub.com": { equipo: "TS", password: "Trama267" },
  "isidro.velasquez@ultimateleisureclub.com": { equipo: "TS", password: "Nexo431" },
  "julio.olivo@ultimateleisureclub.com": { equipo: "TS", password: "Pulso804" },
  "neel.patel@ultimateleisureclub.com": { equipo: "TS", password: "Orion593" },
  "rosio.ubarte@ultimateleisureclub.com": { equipo: "TS", password: "Delta126" }
};

// ===================================
// Login
// ===================================

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailInput = document.querySelector("input[type='email']");
    const passInput  = document.querySelector("input[type='password']");

    const email = emailInput.value.trim().toLowerCase();
    const password = passInput.value.trim();

    // Validaciones básicas
    if (!email || !password) {
      alert("Por favor ingresa correo y contraseña");
      return;
    }

    if (!usuarios[email]) {
      alert("Usuario no autorizado");
      return;
    }

    // ✅ VALIDACIÓN REAL DE CONTRASEÑA
    if (usuarios[email].password !== password) {
      alert("Contraseña incorrecta");
      return; // ⛔ aquí se detiene
    }

    // ✅ Limpiar SOLO la sesión (no los datos)
    localStorage.removeItem("usuario");
    localStorage.removeItem("equipo");

    // ✅ Guardar sesión correctamente
    localStorage.setItem("usuario", email);
    localStorage.setItem("equipo", usuarios[email].equipo);

    // ✅ Redirigir
    window.location.href = "dashboard.html";
  });
});
