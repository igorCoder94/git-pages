import Borders from "../../../shared/borders";
import "./style.scss";
import { useEffect } from "react";

const demoList = [
  "Единообразное отображение и анализ данных SCADA систем предприятия",
  "Гибкий автоматизированный бизнес - процесс техобслуживания и ремонта",
  "Оперативная постановка задач и контроль выполнения работ Исполнителями в реальном времени",
  "Непрерывный обмен документами и информацией с основными системами предприятия",
];

const News = () => {
  return (
    <section id="news" className="news__section">
      <div className="news__container container">
        <h2 className="news__title">Новости</h2>
        <div className="news__demo">
          <div className="news__content">
            <h3 className="news__subtitle">Внедрение в систему ГМЦ</h3>
            <div className="news__description">
              <div className="news__text">
                Интеграционная платформа UNIOS предназначена для комплексного
                мониторинга и обслуживания различных автоматизированных систем и
                устройств предприятия. Платформа решает следующие задачи:
              </div>
              <ul>
                {demoList.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="thumb-wrap">
            <iframe
              id="iframe"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/eSE6hXl4IxQ?si=oeMaDK39pcOA1HoC"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <Borders />
      </div>
    </section>
  );
};

export default News;
