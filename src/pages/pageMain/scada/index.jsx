import "./style.scss";
import ModuleBlock from "../../../shared/moduleBlock";
import data from "./data";

const Scada = () => {
  return (
    <section id="scada" className="scada__section">
      <ModuleBlock data={data} />
    </section>
  );
};

export default Scada;
