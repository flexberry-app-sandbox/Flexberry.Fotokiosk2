import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  категория: DS.attr('i-i-s-fotokiosk2-категория'),
  цена: DS.attr('number'),
  допНастройки: DS.hasMany('i-i-s-fotokiosk2-доп-настройки', { inverse: 'инфоФото', async: false })
});

export let ValidationRules = {
  категория: {
    descriptionKey: 'models.i-i-s-fotokiosk2-инфо-фото.validations.категория.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-fotokiosk2-инфо-фото.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  допНастройки: {
    descriptionKey: 'models.i-i-s-fotokiosk2-инфо-фото.validations.допНастройки.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИнфоФотоE', 'i-i-s-fotokiosk2-инфо-фото', {
    категория: attr('Категория', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    допНастройки: hasMany('i-i-s-fotokiosk2-доп-настройки', 'Доп настройки', {
      уголок: attr('Уголок', { index: 0 }),
      чбЦвет: attr('Чб цвет', { index: 1 })
    })
  });

  modelClass.defineProjection('ИнфоФотоL', 'i-i-s-fotokiosk2-инфо-фото', {
    категория: attr('Категория', { index: 0 }),
    цена: attr('Цена', { index: 1 })
  });
};
