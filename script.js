const revealItems = document.querySelectorAll(
  ".hero-copy, .hero-art, .section-title, .benefit-card, .product-card, .routine-image, .routine-copy, .contact-panel"
);

revealItems.forEach((item, index) => {
  item.classList.add("reveal");
  item.style.animationDelay = `${Math.min(index * 35, 210)}ms`;
});

document.querySelectorAll(".tilt").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * 8;
    const rotateX = (0.5 - y / rect.height) * 8;

    card.style.transform =
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

document.querySelectorAll(".links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".links a").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
