import { initquestionsAccordion } from "./questionsAccordion";
import { initGuaranteesAccordion } from "./guaranteesAccordion";
import { initMenu } from "./initMenu";

const controllerList = [
  {
    selector: ".guarantees__wrapper",
    callback: initGuaranteesAccordion,
  },
  {
    selector: ".questions-accordion__accordion",
    callback: initquestionsAccordion,
  },

  {
    selector: ".header",
    callback: initMenu,
  },
];

const controllerChecker = () => {
  controllerList.forEach((controller) => {
    if (document.querySelector(controller.selector)) controller.callback();
  });
};

export default controllerChecker;
