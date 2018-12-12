import React from 'react';

const determineLink = url => {
  switch (url) {
    case 'Al.com':
      return (
        <a href="https://www.al.com/" target="_blank" rel="noopener noreferrer">
          <img
            className="al-icon"
            alt={url}
            src="https://media.al.com/static/bama/static/img/logos/logo_fb.jpg"
          />
        </a>
      );

    case 'Al Jazeera English':
      return (
        <a
          href="https://www.aljazeera.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="al-jazeera-icon"
            alt={url}
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/aj-logo-lg-124_60x70.png"
          />
        </a>
      );

    case 'Bbc.com':
      return (
        <a href="https://www.bbc.com" target="_blank" rel="noopener noreferrer">
          <img
            alt={url}
            className="bbc-icon"
            rel="noopener noreferrer"
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/images_120x40.png"
          />
        </a>
      );

    case 'Business Insider':
      return (
        <a
          href="https://www.businessinsider.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt={url}
            className="business-insider-icon"
            rel="noopener noreferrer"
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download-10_120x40.png"
          />
        </a>
      );

    case 'CBS News':
    case 'Cbssports.com':
      return (
        <a
          href="https://www.cbsnews.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt={url}
            className="cbs-icon"
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/world-cbs-news-logo-png-35_2_190x40.png"
          />
        </a>
      );

    case 'CNN':
      return (
        <a
          href="https://www.cnn.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="cnn-icon"
            alt={url}
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download-1_90x45.png"
          />
        </a>
      );

    case 'Dexerto.com':
      return (
        <a
          href="https://www.dexerto.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt={url}
            className="dexerto-icon"
            rel="noopener noreferrer"
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/0_40x40.png"
          />
        </a>
      );

    case 'Espn.com':
      return (
        <a
          href="http://www.espn.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="espn-icon"
            alt={url}
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download-9_120x45.png"
          />
        </a>
      );

    case 'Fantasypros.com':
      return (
        <a
          href="https://www.fantasypros.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="fantasy-pros-icon"
            alt={url}
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/fantasypros-logo_200x75.png"
          />
        </a>
      );

    case 'Foxbusiness.com':
      return (
        <a
          href="https://www.foxbusiness.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt={url}
            className="fox-business-icon"
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download-1_90x50.jpg"
          />
        </a>
      );

    case 'Fox News':
      return (
        <a
          href="https://www.foxnews.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt={url}
            className="fox-news-icon"
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download-2_1_60x50.png"
          />
        </a>
      );

    case 'The Hill':
      return (
        <a href="https://thehill.com" target="_blank" rel="noopener noreferrer">
          <img
            alt={url}
            className="the-hill-icon"
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download_1_120x70.jpg"
          />
        </a>
      );

    case 'Mmajunkie.com':
      return (
        <a
          href="https://mmajunkie.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mma-junkie-icon"
            alt={url}
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/aj-logo-lg-124_60x70.png"
          />
        </a>
      );

    case 'NBC News':
      return (
        <a
          href="https://www.nbcnews.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="nbc-icon"
            alt={url}
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download_60x50.jpg"
          />
        </a>
      );

    case 'Nesn.com':
      return (
        <a href="https://nesn.com/" target="_blank" rel="noopener noreferrer">
          <img
            className="nesn-icon"
            alt={url}
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download-2_120x80.png"
          />
        </a>
      );

    case 'News9.com':
      return (
        <a
          href="http://www.news9.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="news-9-icon"
            alt={url}
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/220px-News-9-Logo_60x60.png"
          />
        </a>
      );

    case 'Nintendolife.com':
      return (
        <a
          href="http://www.nintendolife.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="nintendo-life-icon"
            alt={url}
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download-8_120x40.png"
          />
        </a>
      );

    case 'Npr.org':
      return (
        <a
          href="https://www.npr.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="npr-icon"
            alt={url}
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/1200px-National_Public_Radio_logo.svg_80x30.png"
          />
        </a>
      );

    case 'Reuters':
      return (
        <a
          href="https://www.reuters.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="reuters-icon"
            alt={url}
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download-7_130x80.png"
          />
        </a>
      );

    case 'TechRadar':
      return (
        <a
          href="https://www.techradar.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="tech-radar-icon"
            alt={url}
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download-3_120x70.png"
          />
        </a>
      );

    case 'USA Today':
      return (
        <a
          href="https://www.usatoday.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="usa-today-icon"
            alt={url}
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download_1_120x40.png"
          />
        </a>
      );

    case 'Vice News':
      return (
        <a
          href="https://news.vice.com/en_us"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="vice-icon"
            alt={url}
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download_200x75.png"
          />
        </a>
      );

    case 'The Wall Street Journal':
      return (
        <a
          href="https://www.wsj.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="wsj-icon"
            alt={url}
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/images-1_190x190.png"
          />
        </a>
      );

    case 'Thewrap.com':
      return (
        <a
          href="https://www.thewrap.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="the-wrap-icon"
            alt={url}
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download-4_90x70.png"
          />
        </a>
      );

    case 'Youtube.com':
      return (
        <a
          href="https://www.youtube.com/watch?v=tlZvgdcIXvI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="youtube-icon"
            alt={url}
            src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download-6_130x120.png"
          />
        </a>
      );

    default:
      return url;
  }
};

export default determineLink;
