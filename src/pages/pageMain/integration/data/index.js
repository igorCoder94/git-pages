import integration from "../../../../assets/images/main/integration/integration.png";
import { ReactComponent as IconScheme } from "../../../../assets/images/main/integration/scheme-mobile.svg";
import modules from "../../../../assets/icons/pageMain/integration/modules.svg";
import build from "../../../../assets/icons/pageMain/integration/build.svg";
import table from "../../../../assets/icons/pageMain/integration/table.svg";
import settings from "../../../../assets/icons/pageMain/integration/settings.svg";
import analytics from "../../../../assets/icons/pageMain/integration/analytics.svg";
import video from "../../../../assets/icons/pageMain/integration/video.svg";

const listOne = [
  {
    id: 0,
    title: "Подключаемые внешние модули ",
    text: "Расширение функционала дополнительными модулями и сервисами внешних систем",
    icon: modules,
  },
];

const listTwo = [
  {
    id: 0,
    title: "Модуль интеграции 3D BIM моделей",
    icon: build,
  },
  {
    id: 1,
    title: "Построение гибких Бизнес Процессов BPM",
    icon: settings,
  },
  {
    id: 2,
    title: "Модуль статистической аналитики. Прогнозирование событий",
    icon: analytics,
  },
  {
    id: 3,
    title: "Промышленная видеоаналитика CCTV",
    icon: video,
  },
  {
    id: 4,
    title: "Системы электронного документооборота СЭД",
    icon: table,
  },
  {
    id: 5,
    title: "Интеграция с системами электронного документооборота 1:С",
    icon: table,
  },
];

const data = {
  title: "Интеграция",
  image: integration,
  Scheme: IconScheme,
  listOne,
  listTwo,
};

export default data;
