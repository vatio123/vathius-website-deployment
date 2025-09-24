export const smoothScroll = (targetId) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 64, // Adjust for fixed header height
      behavior: "smooth",
    });
  }
};


