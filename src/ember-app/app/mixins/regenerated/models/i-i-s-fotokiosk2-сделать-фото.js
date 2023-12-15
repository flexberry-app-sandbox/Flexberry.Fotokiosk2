import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колВоФото: DS.attr('number'),
  инфоФото: DS.belongsTo('i-i-s-fotokiosk2-инфо-фото', { inverse: null, async: false })
});

export let ValidationRules = {
  колВоФото: {
    descriptionKey: 'models.i-i-s-fotokiosk2-сделать-фото.validations.колВоФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  инфоФото: {
    descriptionKey: 'models.i-i-s-fotokiosk2-сделать-фото.validations.инфоФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СделатьФотоE', 'i-i-s-fotokiosk2-сделать-фото', {
    колВоФото: attr('Кол во фото', { index: 0 }),
    инфоФото: belongsTo('i-i-s-fotokiosk2-инфо-фото', 'Инфо фото', {
      категория: attr('Категория', { index: 2, hidden: true }),
      цена: attr('', { index: 3 })
    }, { index: 1, displayMemberPath: 'категория' })
  });

  modelClass.defineProjection('СделатьФотоL', 'i-i-s-fotokiosk2-сделать-фото', {
    колВоФото: attr('Кол во фото', { index: 0 }),
    инфоФото: belongsTo('i-i-s-fotokiosk2-инфо-фото', 'Категория', {
      категория: attr('Категория', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
