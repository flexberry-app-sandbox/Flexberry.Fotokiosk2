import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.fotokiosk2.caption'),
          title: i18n.t('forms.application.sitemap.fotokiosk2.title'),
          children: [{
            link: 'i-i-s-fotokiosk2-отправ-на-почту-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk2.i-i-s-fotokiosk2-отправ-на-почту-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk2.i-i-s-fotokiosk2-отправ-на-почту-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-fotokiosk2-клиент-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk2.i-i-s-fotokiosk2-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk2.i-i-s-fotokiosk2-клиент-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-fotokiosk2-оплата-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk2.i-i-s-fotokiosk2-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk2.i-i-s-fotokiosk2-оплата-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-fotokiosk2-сделать-фото-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk2.i-i-s-fotokiosk2-сделать-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk2.i-i-s-fotokiosk2-сделать-фото-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-fotokiosk2-печать-фото-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk2.i-i-s-fotokiosk2-печать-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk2.i-i-s-fotokiosk2-печать-фото-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-fotokiosk2-инфо-фото-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk2.i-i-s-fotokiosk2-инфо-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk2.i-i-s-fotokiosk2-инфо-фото-l.title'),
            icon: 'chart line',
            children: null
          }]
        }
      ]
    };
  }),
})