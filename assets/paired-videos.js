// Each experiment pairs the supplied real footage and RViz clip.
// The standard video controls remain usable without JavaScript.
const pairs = [];

document.querySelectorAll('[data-video-pair]').forEach(section => {
  const videos = [...section.querySelectorAll('video')];
  const controls = section.querySelector('.video-pair-controls');
  const toggle = section.querySelector('[data-pair-toggle]');
  const restart = section.querySelector('[data-pair-restart]');
  const status = section.querySelector('[data-pair-status]');
  const pairLabel = toggle.getAttribute('aria-label').replace(/^Play both /, '');
  let pendingPlay = false;
  let playRequest = 0;

  const pause = () => {
    playRequest += 1;
    pendingPlay = false;
    videos.forEach(video => video.pause());
    update();
  };

  const update = () => {
    const playing = videos.some(video => !video.paused && !video.ended);
    toggle.textContent = pendingPlay ? 'Loading…' : playing ? 'Pause both' : 'Play both';
    toggle.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} both ${pairLabel}`);
    toggle.setAttribute('aria-pressed', String(playing));
    if (pendingPlay) status.textContent = 'Loading the pair…';
    else if (videos.every(video => video.ended)) status.textContent = 'Finished · play again or restart';
    else status.textContent = playing ? 'Playing both views' : 'Paused · use Play both to compare';
  };

  const play = async () => {
    pairs.forEach(pair => { if (pair.section !== section) pair.pause(); });
    const ended = videos.some(video => video.ended);
    const time = ended ? 0 : Math.min(...videos.map(video => video.currentTime));
    videos.forEach(video => { video.currentTime = time; });
    const request = ++playRequest;
    pendingPlay = true;
    update();
    const results = await Promise.allSettled(videos.map(video => video.play()));
    if (request !== playRequest) return;
    pendingPlay = false;
    if (results.some(result => result.status === 'rejected')) {
      pause();
      status.textContent = 'Use the individual video play controls to load this pair.';
      return;
    }
    update();
  };

  toggle.addEventListener('click', () => {
    if (pendingPlay || videos.some(video => !video.paused && !video.ended)) pause();
    else void play();
  });

  restart.addEventListener('click', () => {
    pause();
    videos.forEach(video => { video.currentTime = 0; });
    status.textContent = 'Restarted · ready to play';
  });

  videos.forEach((video, index) => {
    video.addEventListener('play', () => {
      if (!pendingPlay) {
        pairs.forEach(pair => { if (pair.section !== section) pair.pause(); });
        const other = videos[1 - index];
        if (Math.abs(other.currentTime - video.currentTime) > 0.15) other.currentTime = video.currentTime;
        if (other.paused && !other.ended) void other.play().catch(() => {
          status.textContent = 'Use Play both to start both views.';
        });
      }
      update();
    });
    video.addEventListener('pause', () => {
      if (!pendingPlay && !video.ended) videos[1 - index].pause();
      update();
    });
    video.addEventListener('seeking', () => {
      const other = videos[1 - index];
      if (Math.abs(other.currentTime - video.currentTime) > 0.15) other.currentTime = video.currentTime;
    });
    video.addEventListener('ratechange', () => {
      const other = videos[1 - index];
      if (other.playbackRate !== video.playbackRate) other.playbackRate = video.playbackRate;
    });
    video.addEventListener('ended', update);
    video.addEventListener('error', () => {
      pause();
      status.textContent = 'This video could not load. Try reloading the page.';
    });
  });

  videos[0].addEventListener('timeupdate', () => {
    if (videos.every(video => !video.paused && !video.seeking && !video.ended)) {
      const drift = videos[1].currentTime - videos[0].currentTime;
      if (Math.abs(drift) > 0.3) videos[1].currentTime = videos[0].currentTime;
    }
  });

  pairs.push({ section, pause });
  toggle.setAttribute('aria-pressed', 'false');
  controls.hidden = false;
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) pairs.forEach(pair => pair.pause());
});
