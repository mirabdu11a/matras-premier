import { useEffect, useRef } from "react";
import ico from '../assets/images/map.png'
export default function YandexMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.ymaps) return;

    window.ymaps.ready(() => {
      const map = new window.ymaps.Map(mapRef.current, {
        center: [41.231470, 69.171607], // Tashkent
        zoom: 16,
      });

      // Custom marker (icon bilan)
      const placemark = new window.ymaps.Placemark(
        [41.231470, 69.171607],
        {
          hintContent: "Matras Premier",
        },
        {
          iconLayout: "default#image",
          iconImageHref: ico, // o'zingni icon
          iconImageSize: [60, 60],
          iconImageOffset: [-30, -60],
        }
      );

      map.geoObjects.add(placemark);
    });
  }, []);

  return (
    <div
      className="YandexMap"
      ref={mapRef}
      style={{ width: "100%", height: "100%",  borderRadius: "20px"}}
    />
  );
}