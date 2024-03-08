const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "25px",
    }
  );
  obs.observe(header);