export const initGuaranteesAccordion = () => {
  const options = document.querySelectorAll(".guarantees__wrapper-option");
  const image: HTMLImageElement = document.querySelector(
    ".guarantees__wrapper-img"
  );

  options.forEach((option) => {
    option.addEventListener("click", async (e) => {
      const { currentTarget } = e;
      options.forEach((option) => option.classList.remove("active"));
      const imgName = (currentTarget as HTMLDivElement).dataset.img;

      console.log((await import(`@images/${imgName}`)).default)

      image.setAttribute("src", (await import(`@images/${imgName}`)).default);

      option.classList.add("active");
    });
  });

  (options[0] as HTMLDivElement).click();
};
