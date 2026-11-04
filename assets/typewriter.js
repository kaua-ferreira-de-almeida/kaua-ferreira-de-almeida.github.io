const roleText = document.querySelector('[data-typewriter]');

if (roleText) {
  const heading = document.querySelector('[data-role-heading]');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const roles = ['Mechanical Engineer', 'Robotics Engineer'];
  let roleIndex = 0;
  let length = 0;
  let deleting = false;
  let timer;

  const tick = () => {
    if (document.hidden || motionPreference.matches) return;
    const role = roles[roleIndex];
    length += deleting ? -1 : 1;
    roleText.textContent = role.slice(0, length);

    if (!deleting && length === role.length) {
      deleting = true;
      timer = window.setTimeout(tick, 1700);
    } else if (deleting && length === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      timer = window.setTimeout(tick, 300);
    } else {
      timer = window.setTimeout(tick, deleting ? 40 : 65);
    }
  };

  const start = () => {
    window.clearTimeout(timer);
    heading.classList.toggle('is-reduced', motionPreference.matches);
    if (motionPreference.matches) {
      roleText.textContent = roles.join(' · ');
      return;
    }
    roleIndex = 0;
    length = 0;
    deleting = false;
    roleText.textContent = '';
    if (!document.hidden) timer = window.setTimeout(tick, 200);
  };

  document.addEventListener('visibilitychange', () => {
    window.clearTimeout(timer);
    if (!document.hidden && !motionPreference.matches) timer = window.setTimeout(tick, 200);
  });
  motionPreference.addEventListener('change', start);
  window.addEventListener('pagehide', () => window.clearTimeout(timer));
  window.addEventListener('pageshow', event => { if (event.persisted) start(); });
  start();
}
