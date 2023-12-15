import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISFotokiosk2ИнфоФотоLForm from './forms/i-i-s-fotokiosk2-инфо-фото-l';
import IISFotokiosk2КлиентLForm from './forms/i-i-s-fotokiosk2-клиент-l';
import IISFotokiosk2ОплатаLForm from './forms/i-i-s-fotokiosk2-оплата-l';
import IISFotokiosk2ОтправНаПочтуLForm from './forms/i-i-s-fotokiosk2-отправ-на-почту-l';
import IISFotokiosk2ПечатьФотоLForm from './forms/i-i-s-fotokiosk2-печать-фото-l';
import IISFotokiosk2СделатьФотоLForm from './forms/i-i-s-fotokiosk2-сделать-фото-l';
import IISFotokiosk2ИнфоФотоEForm from './forms/i-i-s-fotokiosk2-инфо-фото-e';
import IISFotokiosk2КлиентEForm from './forms/i-i-s-fotokiosk2-клиент-e';
import IISFotokiosk2ОплатаEForm from './forms/i-i-s-fotokiosk2-оплата-e';
import IISFotokiosk2ОтправНаПочтуEForm from './forms/i-i-s-fotokiosk2-отправ-на-почту-e';
import IISFotokiosk2ПечатьФотоEForm from './forms/i-i-s-fotokiosk2-печать-фото-e';
import IISFotokiosk2СделатьФотоEForm from './forms/i-i-s-fotokiosk2-сделать-фото-e';
import IISFotokiosk2ДопНастройкиModel from './models/i-i-s-fotokiosk2-доп-настройки';
import IISFotokiosk2ИнфоФотоModel from './models/i-i-s-fotokiosk2-инфо-фото';
import IISFotokiosk2КлиентModel from './models/i-i-s-fotokiosk2-клиент';
import IISFotokiosk2ОплатаModel from './models/i-i-s-fotokiosk2-оплата';
import IISFotokiosk2ОтправНаПочтуModel from './models/i-i-s-fotokiosk2-отправ-на-почту';
import IISFotokiosk2ПечатьФотоModel from './models/i-i-s-fotokiosk2-печать-фото';
import IISFotokiosk2СделатьФотоModel from './models/i-i-s-fotokiosk2-сделать-фото';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-fotokiosk2-доп-настройки': IISFotokiosk2ДопНастройкиModel,
    'i-i-s-fotokiosk2-инфо-фото': IISFotokiosk2ИнфоФотоModel,
    'i-i-s-fotokiosk2-клиент': IISFotokiosk2КлиентModel,
    'i-i-s-fotokiosk2-оплата': IISFotokiosk2ОплатаModel,
    'i-i-s-fotokiosk2-отправ-на-почту': IISFotokiosk2ОтправНаПочтуModel,
    'i-i-s-fotokiosk2-печать-фото': IISFotokiosk2ПечатьФотоModel,
    'i-i-s-fotokiosk2-сделать-фото': IISFotokiosk2СделатьФотоModel
  },

  'application-name': 'Fotokiosk2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Fotokiosk2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fotokiosk2',
          title: 'Fotokiosk2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        fotokiosk2: {
          caption: 'Fotokiosk2',
          title: 'Fotokiosk2',
          'i-i-s-fotokiosk2-отправ-на-почту-l': {
            caption: 'Отправ на почту',
            title: ''
          },
          'i-i-s-fotokiosk2-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-fotokiosk2-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-fotokiosk2-сделать-фото-l': {
            caption: 'Сделать фото',
            title: ''
          },
          'i-i-s-fotokiosk2-печать-фото-l': {
            caption: 'Печать фото',
            title: ''
          },
          'i-i-s-fotokiosk2-инфо-фото-l': {
            caption: 'Инфо фото',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-fotokiosk2-инфо-фото-l': IISFotokiosk2ИнфоФотоLForm,
    'i-i-s-fotokiosk2-клиент-l': IISFotokiosk2КлиентLForm,
    'i-i-s-fotokiosk2-оплата-l': IISFotokiosk2ОплатаLForm,
    'i-i-s-fotokiosk2-отправ-на-почту-l': IISFotokiosk2ОтправНаПочтуLForm,
    'i-i-s-fotokiosk2-печать-фото-l': IISFotokiosk2ПечатьФотоLForm,
    'i-i-s-fotokiosk2-сделать-фото-l': IISFotokiosk2СделатьФотоLForm,
    'i-i-s-fotokiosk2-инфо-фото-e': IISFotokiosk2ИнфоФотоEForm,
    'i-i-s-fotokiosk2-клиент-e': IISFotokiosk2КлиентEForm,
    'i-i-s-fotokiosk2-оплата-e': IISFotokiosk2ОплатаEForm,
    'i-i-s-fotokiosk2-отправ-на-почту-e': IISFotokiosk2ОтправНаПочтуEForm,
    'i-i-s-fotokiosk2-печать-фото-e': IISFotokiosk2ПечатьФотоEForm,
    'i-i-s-fotokiosk2-сделать-фото-e': IISFotokiosk2СделатьФотоEForm
  },

});

export default translations;
