const $ = s => document.querySelector(s),
    bg = $("#bg"),
    mn = $("#mn");
function tog(o) {
    mn.classList.toggle("open", o);
    bg.setAttribute("aria-expanded", o);
    bg.setAttribute("aria-label", o ? "Cerrar menú" : "Abrir menú");
    bg.querySelectorAll("i").forEach(i => (i.style.background = o ? "#0D3E27" : ""));
}
bg.onclick = () => tog(!mn.classList.contains("open"));
mn.querySelectorAll("a").forEach(a => (a.onclick = () => tog(false)));
addEventListener("keydown", e => {
    if (e.key === "Escape") tog(false);
});
for (const s of document.querySelectorAll(".stars")) {
    for (let i = 0; i < 50; i++) {
        const e = document.createElement("i");
        e.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 60}%;opacity:${0.3 + Math.random() * 0.7}`;
        s.appendChild(e);
    }
}
const sn = document.querySelector(".snow");
for (let i = 0; i < 40; i++) {
    const e = document.createElement("i");
    e.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;opacity:${0.3 + Math.random() * 0.6};width:${3 + Math.random() * 5}px;height:${3 + Math.random() * 5}px`;
    sn.appendChild(e);
}
if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
        const sc = (tr, s = "top bottom", e = "bottom top") => ({ trigger: tr, start: s, end: e, scrub: 1 });
        // HERO: vuelo de Santa (dentro de su franja, sin cruzar el texto)
        gsap.fromTo(
            "#sl",
            { xPercent: -4, yPercent: 6, rotate: 1.5, scale: 0.96 },
            {
                xPercent: 16,
                yPercent: -14,
                rotate: -3,
                scale: 1.04,
                ease: "none",
                scrollTrigger: sc("#inicio", "top top", "bottom top"),
            },
        );
        gsap.to("#inicio .stars", {
            yPercent: 25,
            ease: "none",
            scrollTrigger: sc("#inicio", "top top", "bottom top"),
        });

        gsap.fromTo(
            "#ail",
            { scale: 0.7, rotate: -6, opacity: 0, y: 60 },
            {
                scale: 1,
                rotate: 0,
                opacity: 1,
                y: 0,
                ease: "none",
                scrollTrigger: sc("#ilusion", "top 85%", "center 55%"),
            },
        );
        // FAMILIA: aparece, sube y escala
        gsap.fromTo(
            "#fam",
            { y: 90, scale: 0.86, opacity: 0 },
            { y: 0, scale: 1, opacity: 1, ease: "none", scrollTrigger: sc("#une", "top 85%", "center 55%") },
        );
        gsap.to("#fam", { yPercent: -6, ease: "none", scrollTrigger: sc("#une", "center center", "bottom top") });
        // ESCENARIO: se revela como un telón que sube
        gsap.fromTo(
            ".frame",
            { clipPath: "inset(0 50% 0 50%)" },
            { clipPath: "inset(0 0% 0 0%)", ease: "none", scrollTrigger: sc("#escenario", "top 40%", "center 40%") },
        );
        gsap.fromTo(
            "#teatro",
            { scale: 1.18 },
            { scale: 1, ease: "none", scrollTrigger: sc("#escenario", "top 40%", "bottom 60%") },
        );
        // ADELANTO: acercamiento cinematográfico a la bailarina
        gsap.fromTo(
            "#zm",
            { scale: 1 },
            { scale: 1.9, ease: "none", scrollTrigger: sc("#adelanto", "top 80%", "bottom 30%") },
        );
        // CAPÍTULOS: cada uno con su propia entrada
        gsap.fromTo(
            "#a1",
            { xPercent: -40, yPercent: 20, rotate: -12, opacity: 0 },
            {
                xPercent: 0,
                yPercent: 0,
                rotate: 0,
                opacity: 1,
                ease: "none",
                scrollTrigger: sc("#c1", "top 85%", "center 55%"),
            },
        );
        gsap.to("#a1", { y: -18, repeat: -1, yoyo: true, duration: 1.8, ease: "sine.inOut" });
        gsap.fromTo(
            "#a2",
            { xPercent: -30, yPercent: 14, scale: 0.9 },
            { xPercent: 8, yPercent: -10, scale: 1.04, ease: "none", scrollTrigger: sc("#c2") },
        );
        gsap.to("#c2 .snow", { yPercent: 45, ease: "none", scrollTrigger: sc("#c2") });
        gsap.fromTo(
            "#a3",
            { clipPath: "inset(100% 0 0 0)", scale: 1.2 },
            { clipPath: "inset(0% 0 0 0)", scale: 1, ease: "none", scrollTrigger: sc("#c3", "top 85%", "center 50%") },
        );
        gsap.fromTo(
            "#a4",
            { scale: 1.45, transformOrigin: "38% 52%", opacity: 0.2 },
            { scale: 1, opacity: 1, ease: "none", scrollTrigger: sc("#c4", "top 85%", "center 45%") },
        );
        gsap.fromTo(
            "#a5",
            { y: 60, scale: 0.9, opacity: 0 },
            {
                y: 0,
                scale: 1,
                opacity: 1,
                ease: "power1.out",
                scrollTrigger: { trigger: "#c5", start: "top 70%", end: "center 55%", scrub: 2 },
            },
        );
        gsap.fromTo(
            "#c5 .glow",
            { opacity: 0.2, scale: 0.7 },
            { opacity: 1, scale: 1.3, repeat: -1, yoyo: true, duration: 2.4, ease: "sine.inOut" },
        );
        gsap.fromTo(
            "#a6",
            { xPercent: 25, opacity: 0 },
            { xPercent: 0, opacity: 1, ease: "none", scrollTrigger: sc("#c6", "top 85%", "center 55%") },
        );
        gsap.utils
            .toArray("section h2,.lead,.chap p.d")
            .forEach(e =>
                gsap.from(e, {
                    y: 36,
                    opacity: 0,
                    scrollTrigger: { trigger: e, start: "top 92%", end: "top 65%", scrub: 0.6 },
                }),
            );
    });
}
$("#dl").onclick = () => {
    const W = 1080,
        H = 1350,
        c = document.createElement("canvas");
    c.width = W;
    c.height = H;
    const x = c.getContext("2d");
    let g = x.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#173A64");
    g.addColorStop(1, "#0D3E27");
    x.fillStyle = g;
    x.fillRect(0, 0, W, H);
    x.strokeStyle = "#DBC09A";
    x.lineWidth = 6;
    x.strokeRect(40, 40, W - 80, H - 80);
    x.fillStyle = "#fff";
    for (let i = 0; i < 70; i++) {
        x.globalAlpha = 0.3 + Math.random() * 0.6;
        x.fillRect(Math.random() * W, 60 + Math.random() * 500, 3, 3);
    }
    x.globalAlpha = 1;
    x.textAlign = "center";
    const T = (t, y, s, col, w = "700", f = "Georgia,serif") => {
        x.fillStyle = col;
        x.font = `${w} ${s}px ${f}`;
        x.fillText(t, W / 2, y);
    };
    T("COPPHU · VELADA NAVIDEÑA 2026", 150, 30, "#DBC09A", "600", "system-ui,sans-serif");
    T("EL VUELO", 420, 150, "#F7F1E8");
    T("DE LA NAVIDAD", 570, 110, "#D61F2D");
    T("Lunes 14 de diciembre de 2026", 720, 48, "#fff");
    T("9:00 a. m.", 790, 48, "#DBC09A");
    T("Auditorio Horacio Álvarez Saviñón", 900, 40, "#fff", "400");
    T("Edificio 5, UNPHU · Santo Domingo", 955, 34, "#F7F1E8", "400");
    T("Aporte: RD$300 por familia", 1100, 42, "#DBC09A");
    T("Fecha límite: viernes 4 de diciembre de 2026", 1160, 30, "#F7F1E8", "400", "system-ui,sans-serif");
    c.toBlob(b => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(b);
        a.download = "invitacion-el-vuelo-de-la-navidad.png";
        document.body.appendChild(a);
        a.click();
        a.remove();
    }, "image/png");
};

// Música de fondo (archivo MP3 del colegio). Solo suena al pulsar el botón.
(() => {
    const b = document.getElementById("mus");
    let au,
        on = false,
        fade;
    function vol(to) {
        clearInterval(fade);
        fade = setInterval(() => {
            const d = to - au.volume;
            if (Math.abs(d) < 0.04) {
                au.volume = to;
                clearInterval(fade);
                if (!to) au.pause();
            } else au.volume = Math.max(0, Math.min(1, au.volume + Math.sign(d) * 0.04));
        }, 60);
    }
    function go() {
        if (!au) {
            au = new Audio("assets/musica.mp3");
            au.loop = true;
            au.volume = 0;
        }
        au.play()
            .then(() => {
                on = true;
                b.setAttribute("aria-pressed", "true");
                vol(0.45);
            })
            .catch(() => {});
    }
    function stop() {
        on = false;
        b.setAttribute("aria-pressed", "false");
        if (au) vol(0);
    }
    b.onclick = () => (on ? stop() : go());
    document.addEventListener("visibilitychange", () => {
        if (document.hidden && on) stop();
    });
})();
