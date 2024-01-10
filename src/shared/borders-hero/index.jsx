import "./style.scss";
import { useMediaQuery } from "@react-hook/media-query";

const BordersHero = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <div className="border-hero border-hero__left">
        <div className="border-hero-block"></div>
      </div>

      {!isMobile ? (
        <>
          <div className="border-hero border-hero__left-middle">
            <div className="border-hero-block"></div>
          </div>
          <div className="border-hero border-hero__middle">
            <div className="border-hero-block"></div>
          </div>
          <div className="border-hero border-hero__right-middle">
            <div className="border-hero-block"></div>
          </div>
        </>
      ) : null}

      <div className="border-hero border-hero__right">
        <div className="border-hero-block"></div>
      </div>
    </>
  );
};

export default BordersHero;
