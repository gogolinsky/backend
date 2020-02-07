/**
 * contact-map
 */

import Vue from "vue/dist/vue.common";
import axios from "axios";

export default Vue.component("contact-map", {
  data() {
    return {
      ready: false,
      params: {},
      collections: [],
      markers: [],
      map: {}
    };
  },
  methods: {
    init() {
      this.$refs.container.innerHTML = "";

      this.map = new ymaps.Map(
        this.$refs.container,
        {
          center: this.params.center,
          zoom: this.params.zoom,
          controls: []
        },
        {
          searchControlProvider: false
        }
      );

      const zoomControl = new ymaps.control.ZoomControl({
        options: {
          size: "small",
          position: {
            left: "auto",
            right: 20,
            top: 250
          }
        }
      });

      this.map.controls.add(zoomControl);
      this.map.behaviors.disable("scrollZoom");

      this.markers.forEach(marker => {
        this.setMarker(marker.title, marker.coords, marker.image);
      });
    },
    setMarker(title, coords, icon) {
      const marker = new ymaps.Placemark(
        coords,
        {
          hintContent: "Адрес",
          balloonContent: title
        },
        {
          iconImageHref: icon.href || "/img/marker.svg",
          iconLayout: "default#image",
          iconImageSize: icon.size || [65, 54],
          iconImageOffset: icon.offset || [-19, -54]
        }
      );

      this.map.geoObjects.add(marker);
      this.collections.push(marker);
    }
  },
  created() {
    axios.get("//api-maps.yandex.ru/2.1/?lang=ru_RU").then(res => {
      window.eval(res.data);
      // @ts-ignore
      ymaps.ready(() => {
        const params = JSON.parse(this.$refs.container.dataset.initial || "{}");

        this.markers = params.markers || [];
        this.params.center = params.center || [54.765961, 32.033613];
        this.params.zoom = params.zoom || 15;

        this.init();
        this.ready = true;
      });
    });
  }
});
