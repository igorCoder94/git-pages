import toir from "../../../../assets/images/main/toir/toir.png";
import { ReactComponent as IconScheme } from "../../../../assets/images/main/toir/scheme.svg";
import form from "../../../../assets/icons/pageMain/toir/form.svg";
import ai from "../../../../assets/icons/pageMain/toir/ai.svg";
import map from "../../../../assets/icons/pageMain/toir/map.svg";
import folder from "../../../../assets/icons/pageMain/toir/folder.svg";

const listOne = [
  {
    id: 0,
    title: "Менеджер бизнес-процессов",
    text: "Индивидуальная настройка Объектов / Устройств / Пользователей",
    icon: form,
  },
  {
    id: 1,
    title: "Менеджер исполнителей",
    text: "Автоматическое формирование и ведение плановых работ",
    icon: ai,
  },
  {
    id: 2,
    title: "Интерактивные карты",
    text: "2D планы расположения устройств на объекте",
    icon: map,
  },
  {
    id: 3,
    title: "Формирование электронной отчетности",
    text: "Приведение документов к единому стандарту",
    icon: folder,
  },
];

const listTwo = [];

const data = {
  title: "Тех. Обслуживание и Ремонт",
  image: toir,
  Scheme: IconScheme,
  listOne,
  listTwo,
};

export default data;
