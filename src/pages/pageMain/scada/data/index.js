import scada from "../../../../assets/images/main/scada/scada.png";
import hub from "../../../../assets/icons/pageMain/scada/hub.svg";
import ai from "../../../../assets/icons/pageMain/scada/ai.svg";
import smart from "../../../../assets/icons/pageMain/scada/smart.svg";
import report from "../../../../assets/icons/pageMain/scada/report.svg";
import { ReactComponent as IconScheme } from "../../../../assets/images/main/scada/scheme-mobile.svg";

const listOne = [
  {
    id: 0,
    title: "Диспетчеризация SCADA/IoT",
    text: "Универсальный интегратор SCADA систем (MB RTU, TCP, S7, Profinet и др.)",
    icon: hub,
  },
  {
    id: 1,
    title: "Мониторинг",
    text: "Панель мониторинга и оповещений. Представление данных в едином виде",
    icon: smart,
  },
  {
    id: 2,
    title: "Аналитика данных",
    text: "Графическая интерпретация событий",
    icon: report,
  },
  {
    id: 3,
    title: "Интерактивные карты",
    text: "2D планы расположения устройств на объекте",
    icon: ai,
  },
];

const listTwo = [];

const data = {
  title: "Диспетчеризация SCADA/IoT",
  image: scada,
  Scheme: IconScheme,
  listOne,
  listTwo,
};

export default data;
