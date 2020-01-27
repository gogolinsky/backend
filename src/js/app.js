import '@babel/polyfill';
import Vue from 'vue/dist/vue.common';

Vue.config.productionTip = false;

import VeeValidate, { Validator } from 'vee-validate';
import ru from './lib/validator/ru';
import rules from './lib/validator/rules';

Vue.use(VeeValidate, {
  locale: 'ru',
  dictionary: { ru }
});

Validator.extend('phone', rules.phone);

import Page from '../components/page/page';

import svg from './lib/svg';
import hello from './lib/hello';
import objectFit from './lib/objectFit';
import focus from './lib/focus';
import lightbox from './lib/lightbox';

import headerNav from '../components/header-nav/header-nav';
import mainSlider from '../components/main-slider/main-slider';
import accordionItem from '../components/accordion-item/accordion-item';
import pageModal from '../components/page-modal/page-modal';
import imageGallery from '../components/image-gallery/image-gallery';
import exampleShowcase from '../components/example-showcase/example-showcase';
import pageTabs from '../components/page-tabs/page-tabs';
import companyHistory from '../components/company-history/company-history';
import contactMap from '../components/contact-map/contact-map';
import feedbackForm from '../components/feedback-form/feedback-form';
import questionForm from '../components/question-form/question-form';
import callbackForm from '../components/callback-form/callback-form';

new Vue({
  el: '#root',
  components: {
    mainSlider,
    headerNav,
    accordionItem,
    pageModal,
    imageGallery,
    exampleShowcase,
    companyHistory,
    contactMap,
    pageTabs,
    feedbackForm,
    questionForm,
    callbackForm
  },
  mounted() {
    Page.init();
    focus.init();
    objectFit.init();
    lightbox.init();
    svg.init();
  }
});

hello('%cdancecolor.ru 📞 +7(4812)560-576');
