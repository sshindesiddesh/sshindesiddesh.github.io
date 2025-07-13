// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-resume",
          title: "resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-experience",
          title: "Experience",
          description: "Educational background and professional work experience in distributed systems and software engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Open-source projects and repositories showcasing distributed systems, algorithms, and software engineering expertise.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-thread-pool-implementation",
        
          title: 'Thread Pool implementation <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sshindesiddesh/thread-pool-implementation-fd217901118c?source=rss-c27709e1fd23------2", "_blank");
          
        },
      },{id: "post-leetcode-pattern-monotonic-stack",
        
          title: 'Leetcode Pattern: Monotonic Stack <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sshindesiddesh/leetcode-pattern-monotonic-stack-88f1fc3f4455?source=rss-c27709e1fd23------2", "_blank");
          
        },
      },{id: "post-leetcode-pattern-parentheses",
        
          title: 'Leetcode Pattern: Parentheses <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sshindesiddesh/leetcode-pattern-parentheses-f0cbc8447b04?source=rss-c27709e1fd23------2", "_blank");
          
        },
      },{id: "post-in-memory-database-optimisations",
        
          title: 'In Memory Database Optimisations <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sshindesiddesh/research-paper-umbra-4c8c11cf34b2?source=rss-c27709e1fd23------2", "_blank");
          
        },
      },{id: "post-paxos-consensus-algorithm",
        
          title: 'Paxos Consensus Algorithm <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sshindesiddesh/paxos-consensus-algorithm-eb32ec165826?source=rss-c27709e1fd23------2", "_blank");
          
        },
      },{id: "post-paxos-consensus-algorithm",
        
          title: 'Paxos Consensus Algorithm <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Understanding the Paxos consensus algorithm and its role in building fault-tolerant distributed systems",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sshindesiddesh/paxos-consensus-algorithm-eb32ec165826", "_blank");
          
        },
      },{id: "post-thread-pool-implementation",
        
          title: 'Thread Pool Implementation <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Deep dive into implementing a high-performance thread pool in C++ for concurrent programming",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sshindesiddesh/thread-pool-implementation-fd217901118c", "_blank");
          
        },
      },{id: "post-what-is-a-solid-state-drive-ssd",
        
          title: 'What is a Solid State Drive (SSD)? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sshindesiddesh/what-is-a-solid-state-drive-ssd-c618cfa4dc62?source=rss-c27709e1fd23------2", "_blank");
          
        },
      },{id: "post-how-does-hard-disk-drive-hdd-work",
        
          title: 'How does Hard Disk Drive (HDD) work? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sshindesiddesh/what-is-a-hard-disk-drive-hdd-exactly-7ad6b9bfea63?source=rss-c27709e1fd23------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-data-platform-optimization",
          title: 'Data Platform Optimization',
          description: "Performance improvements and scalability enhancements for Cohesity&#39;s data management platform",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_cohesity_data_platform/";
            },},{id: "projects-sbunix-64-bit-operating-system-kernel",
          title: 'SBUnix - 64-bit Operating System Kernel',
          description: "A complete 64-bit Unix-like operating system kernel built from scratch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_sbunix_kernel/";
            },},{id: "projects-mobile-security-framework",
          title: 'Mobile Security Framework',
          description: "Advanced security features for Android mobile platforms at Qualcomm",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_qualcomm_mobile_security/";
            },},{id: "projects-jetson-opencv-optimization",
          title: 'Jetson OpenCV Optimization',
          description: "High-performance computer vision applications on NVIDIA Jetson platforms",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_jetson_opencv/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sshindesiddesh", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sshindesiddesh", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
