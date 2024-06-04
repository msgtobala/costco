import React from 'react';

import Slider from 'react-slick';

export interface ReactSliderProps {
  className?: string;
  children: React.ReactNode;
  slidesToShow?: number;
  slidesToScroll?: number;
  responsive?: Responsive[];
}

export interface Responsive {
  breakpoint: number;
  settings: Settings;
}

export interface Settings {
  slidesToShow: number;
  slidesToScroll: number;
  infinite?: boolean;
  dots?: boolean;
  initialSlide?: number;
}

const ReactSlider: React.FC<ReactSliderProps> = (props): JSX.Element => {
  const { slidesToScroll, slidesToShow, responsive, className, children } =
    props;
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: slidesToShow || 1,
    slidesToScroll: slidesToScroll || 1,
    initialSlide: 0,
    responsive: responsive,
  };

  return (
    <Slider {...settings} className={className}>
      {children}
    </Slider>
  );
};

export default ReactSlider;
