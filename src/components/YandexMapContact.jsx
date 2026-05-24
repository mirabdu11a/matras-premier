import { useEffect, useRef } from "react";
import ico from "../assets/images/map.png";

export default function YandexMapContact() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!window.ymaps || mapInstance.current) return;

    window.ymaps.ready(() => {
      if (mapInstance.current) return;

      mapInstance.current = new window.ymaps.Map(mapRef.current, {
        center: [41.23147, 69.171607],
        zoom: 16,
      });

      const placemark = new window.ymaps.Placemark(
        [41.23147, 69.171607],
        {
          hintContent: "Matras Premier",
        },
        {
          iconLayout: "default#image",
          iconImageHref: ico,
          iconImageSize: [60, 60],
          iconImageOffset: [-30, -60],
        }
      );

      mapInstance.current.geoObjects.add(placemark);
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      className="YandexMap"
      ref={mapRef}
      style={{
        width: "100%",
        height: "40vh",
        borderRadius: "20px",
        overflow: "hidden",
        marginBottom: "6px",
      }}
    />
  );
}