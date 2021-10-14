import React from "react";

import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <main className="notfound">
      <div className="notfound__wrap">

        <div className="notfound__img">
          <picture className="notfound__picture">
            <source srcSet="
              /media/images/sections/notfound/not-found@2x.png 2x, 
              /media/images/sections/notfound/not-found@1x.png 1x"
              type="image/png"
              media="(min-width: 480px)"
            />

            <source srcSet="
              /media/images/sections/notfound/not-found-mob@2x.png 2x, 
              /media/images/sections/notfound/not-found-mob@1x.png 1x"
              type="image/png"
              media="(max-width: 479px)"
            />

            <img src="/media/images/sections/notfound/not-found@1x.png" alt="Dolyna Ozer Image"/>
          </picture>

          <img src="" alt="Dolyna Ozer Image" />
        </div>

        <h2 className="notfound__title">Упс!</h2>

        <p className="notfound__text">Страница не найдена</p>

      </div>
    </main>
  );
};

export default NotFoundPage;
