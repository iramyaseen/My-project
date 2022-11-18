import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const ComponentsSilder = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h1>Today</h1>
      <div style={{ marginBottom: "40px" }}>
        <Slider {...settings}>
          <div className="slider_bar_card">
            <div>
              <h2>5.3</h2>
              <p>
                Estimated <br />
                time (h)
              </p>
            </div>
            <div>
              <h2>4</h2>
              <p>
                Total tasks <br />
                in project
              </p>
            </div>
          </div>
          <div className="slider_bar_card">
            <div>
              <h2>5.3</h2>
              <p>
                Estimated <br />
                time (h)
              </p>
            </div>
            <div>
              <h2>4</h2>
              <p>
                Total tasks <br />
                in project
              </p>
            </div>
          </div>
          <div className="slider_bar_card">
            <div>
              <h2>5.3</h2>
              <p>
                Estimated <br />
                time (h)
              </p>
            </div>
            <div>
              <h2>4</h2>
              <p>
                Total tasks <br />
                in project
              </p>
            </div>
          </div>
          <div className="slider_bar_card">
            <div>
              <h2>5.3</h2>
              <p>
                Estimated <br />
                time (h)
              </p>
            </div>
            <div>
              <h2>4</h2>
              <p>
                Total tasks <br />
                in project
              </p>
            </div>
          </div>
          <div className="slider_bar_card">
            <div>
              <h2>5.3</h2>
              <p>
                Estimated <br />
                time (h)
              </p>
            </div>
            <div>
              <h2>4</h2>
              <p>
                Total tasks <br />
                in project
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
