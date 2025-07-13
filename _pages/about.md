---
layout: about
title: about
permalink: /
subtitle: Distributed Systems Engineer at <a href='https://www.cohesity.com/'>Cohesity</a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>sshindesiddesh@gmail.com</p>
    <p>Sunnyvale, CA</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I'm a **Distributed Systems Engineer** passionate about solving real-world problems at scale, with expertise in performance optimizations and resilient architectures. Currently working at [Cohesity](https://www.cohesity.com/) on the Data Platform team, where I focus on building scalable distributed systems for data management and protection.

With over **6 years of experience** in software engineering, I've worked across the full spectrum of systems development - from embedded systems and mobile platforms to large-scale distributed architectures. My journey has taken me through companies like Qualcomm, Marvell Technology, and now Cohesity, where I've contributed to everything from mobile security features to IoT wireless communication systems.

I hold a **Master's in Computer Science** from Stony Brook University, where I was part of the [File Systems and Storage Lab (FSL)](http://www.fsl.cs.stonybrook.edu/) under [Prof. Erez Zadok](http://www3.cs.stonybrook.edu/~ezk/). My technical interests span distributed systems, performance optimization, storage systems, and scalable architectures.

When I'm not building systems, you can find me writing about technology on [Medium](https://medium.com/@sshindesiddesh), exploring the latest tech trends, or enjoying the outdoors through hiking and traveling.

---

<div class="text-center mt-4">
  <p class="text-muted mb-3">Discover my educational journey and professional experience</p>
  <a href="/experience/" class="btn btn-primary btn-lg discover-btn">
    <i class="fa-solid fa-magnifying-glass zoom-icon"></i>&nbsp;&nbsp;&nbsp;My Background
  </a>
</div>

<style>
.discover-btn {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.discover-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.zoom-icon {
  transition: all 0.3s ease;
  animation: zoomPulse 2s ease-in-out infinite;
  margin-right: 12px !important;
}

.discover-btn:hover .zoom-icon {
  transform: scale(1.3) rotate(15deg);
  animation-duration: 0.5s;
}

@keyframes zoomPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .discover-btn {
    padding: 0.7rem 1.5rem;
    font-size: 0.95rem;
  }
}
</style>
