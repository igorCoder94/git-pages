import "./style.scss";
import ModuleBlock from "../../../shared/moduleBlock";
import data from "./data";

const Control = () => {
  return (
    <section id="control" className="control__section">
      <ModuleBlock data={data} />
    </section>
  );
};

export default Control;
