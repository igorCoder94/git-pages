import control from "../../../../assets/images/main/control/control.png";
import { ReactComponent as IconScheme } from "../../../../assets/images/main/control/scheme-mobile.svg";
import map from "../../../../assets/icons/pageMain/control/map.svg";
import pc from "../../../../assets/icons/pageMain/control/pc.svg";
import form from "../../../../assets/icons/pageMain/control/form.svg";

const listOne = [
  {
    id: 0,
    title: "Автоматизированные мобильные рабочие места исполнителей",
    icon: pc,
  },
  {
    id: 1,
    title: "Модуль навигации на объекте",
    icon: map,
  },
  {
    id: 2,
    title: "Автоматизированный контроль выполнения работ",
    icon: form,
  },
];

const listTwo = [];

const data = {
  title: "Контроль исполнения",
  image: control,
  Scheme: IconScheme,
  listOne,
  listTwo,
};

export default data;
