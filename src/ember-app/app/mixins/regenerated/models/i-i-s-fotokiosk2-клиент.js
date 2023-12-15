import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  оплата: DS.belongsTo('i-i-s-fotokiosk2-оплата', { inverse: null, async: false }),
  отправНаПочту: DS.belongsTo('i-i-s-fotokiosk2-отправ-на-почту', { inverse: null, async: false })
});

export let ValidationRules = {
  оплата: {
    descriptionKey: 'models.i-i-s-fotokiosk2-клиент.validations.оплата.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отправНаПочту: {
    descriptionKey: 'models.i-i-s-fotokiosk2-клиент.validations.отправНаПочту.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-fotokiosk2-клиент', {
    отправНаПочту: belongsTo('i-i-s-fotokiosk2-отправ-на-почту', 'ФИО', {
      фИО: attr('ФИО', { index: 0, hidden: true })
    }, { index: -1, hidden: true }),
    оплата: belongsTo('i-i-s-fotokiosk2-оплата', 'Способ оплаты', {
      способОпл: attr('Способ оплаты', { index: 1 }),
      сделатьФото: belongsTo('i-i-s-fotokiosk2-сделать-фото', '', {
        инфоФото: belongsTo('i-i-s-fotokiosk2-инфо-фото', '', {
          цена: attr('Стоимость', { index: 2 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true }),
      дата: attr('Дата', { index: 3 }),
      время: attr('Время', { index: 4, hidden: true })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-fotokiosk2-клиент', {
    отправНаПочту: belongsTo('i-i-s-fotokiosk2-отправ-на-почту', 'ФИО', {
      фИО: attr('ФИО', { index: 0 })
    }, { index: -1, hidden: true }),
    оплата: belongsTo('i-i-s-fotokiosk2-оплата', 'Способ оплаты', {
      способОпл: attr('Способ оплаты', { index: 1 }),
      сделатьФото: belongsTo('i-i-s-fotokiosk2-сделать-фото', '', {
        инфоФото: belongsTo('i-i-s-fotokiosk2-инфо-фото', '', {
          цена: attr('Стоимость', { index: 2 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true }),
      дата: attr('Дата', { index: 3 }),
      время: attr('Время', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
