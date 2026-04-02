/* ═══════════════════════════════════════════════════════
   AIP-1 GitHub Pages — Scripts
   ═══════════════════════════════════════════════════════ */

/* ── Navbar scroll effect ──────────────────────────────── */
(function () {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
})();

/* ── Mobile nav toggle ─────────────────────────────────── */
(function () {
  const toggle = document.getElementById('navToggle');
  const links  = document.querySelector('.nav-links');
  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', links.classList.contains('open'));
  });
  // Close on link click
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { links.classList.remove('open'); });
  });
})();

/* ── Copy buttons ──────────────────────────────────────── */
(function () {
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;
      const text = target.textContent;
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      }).catch(function () {
        btn.textContent = 'Error';
        setTimeout(function () { btn.textContent = 'Copy'; }, 2000);
      });
    });
  });
})();

/* ── Badge tabs ────────────────────────────────────────── */
(function () {
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabPanels.forEach(function (p) { p.classList.remove('active'); });
      btn.classList.add('active');
      const panel = document.getElementById('tab-' + btn.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });
})();

/* ── Particle canvas animation ─────────────────────────── */
(function () {
  const container = document.getElementById('particles');
  if (!container) return;

  const canvas  = document.createElement('canvas');
  const ctx     = canvas.getContext('2d');
  container.appendChild(canvas);

  var canvasWidth, canvasHeight, dots;
  var MIN_PARTICLE_RADIUS    = 0.4;
  var MAX_PARTICLE_RADIUS    = 1.4;
  var MAX_CONNECTION_DISTANCE = 110;

  function resize() {
    canvasWidth  = canvas.width  = container.offsetWidth;
    canvasHeight = canvas.height = container.offsetHeight;
  }

  function randomDot() {
    return {
      x:  Math.random() * canvasWidth,
      y:  Math.random() * canvasHeight,
      r:  Math.random() * MAX_PARTICLE_RADIUS + MIN_PARTICLE_RADIUS,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a:  Math.random() * 0.5 + 0.15
    };
  }

  function init() {
    resize();
    dots = [];
    var particleCount = Math.min(80, Math.floor((canvasWidth * canvasHeight) / 14000));
    for (var i = 0; i < particleCount; i++) dots.push(randomDot());
  }

  function draw() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    dots.forEach(function (d) {
      // Move
      d.x += d.vx;
      d.y += d.vy;
      if (d.x < 0) d.x = canvasWidth;
      if (d.x > canvasWidth)  d.x = 0;
      if (d.y < 0) d.y = canvasHeight;
      if (d.y > canvasHeight) d.y = 0;

      // Draw dot
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(99,102,241,' + d.a + ')';
      ctx.fill();
    });

    // Draw connections
    for (var i = 0; i < dots.length; i++) {
      for (var j = i + 1; j < dots.length; j++) {
        var dx   = dots[i].x - dots[j].x;
        var dy   = dots[i].y - dots[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_CONNECTION_DISTANCE) {
          var alpha = (1 - dist / MAX_CONNECTION_DISTANCE) * 0.12;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = 'rgba(99,102,241,' + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', init, { passive: true });
})();

/* ── Scroll-in animation ───────────────────────────────── */
(function () {
  var style = document.createElement('style');
  style.textContent = [
    '.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }',
    '.reveal.visible { opacity: 1; transform: none; }'
  ].join('');
  document.head.appendChild(style);

  var targets = document.querySelectorAll(
    '.card, .layer, .step, .stat, .dir-table, .badge-showcase, .section-title, .section-subtitle'
  );

  targets.forEach(function (el) { el.classList.add('reveal'); });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(function (el) { observer.observe(el); });
})();
