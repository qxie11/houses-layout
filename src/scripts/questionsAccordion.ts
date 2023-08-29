export const initquestionsAccordion = () => {
  const accordionContent = document.querySelectorAll(
    ".questions-accordion__accordion-content"
  );

  console.log(accordionContent);

  accordionContent.forEach((item, index) => {
    const header = item.querySelector(".questions-accordion__accordion-header");
    header.addEventListener("click", () => {
      item.classList.toggle("open");

      const description: HTMLDivElement = item.querySelector(
        ".questions-accordion__accordion-desc"
      );

      if (item.classList.contains("open")) {
        description.style.height = `${description.scrollHeight}px`;
      } else {
        description.style.height = "0px";
      }
      removeOpen(index);
    });
  });

  function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
      if (index1 != index2) {
        item2.classList.remove("open");
        const descr: HTMLDivElement = item2.querySelector(
          ".questions-accordion__accordion-desc"
        );
        descr.style.height = "0px";
      }
    });
  }
};
