import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Fotokiosk2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fotokiosk2',
          title: 'Фотокиоск'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
