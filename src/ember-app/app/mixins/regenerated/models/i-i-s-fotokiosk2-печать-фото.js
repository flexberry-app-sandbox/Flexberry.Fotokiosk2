import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  размер: DS.attr('string'),
  сделатьФото: DS.belongsTo('i-i-s-fotokiosk2-сделать-фото', { inverse: null, async: false })
});

export let ValidationRules = {
  размер: {
    descriptionKey: 'models.i-i-s-fotokiosk2-печать-фото.validations.размер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сделатьФото: {
    descriptionKey: 'models.i-i-s-fotokiosk2-печать-фото.validations.сделатьФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПечатьФотоE', 'i-i-s-fotokiosk2-печать-фото', {
    размер: attr('Размер', { index: 0 }),
    сделатьФото: belongsTo('i-i-s-fotokiosk2-сделать-фото', 'Сделать фото', {
      колВоФото: attr('Кол во фото', { index: 2, hidden: true }),
      инфоФото: belongsTo('i-i-s-fotokiosk2-инфо-фото', '', {
        категория: attr('', { index: 3 }),
        цена: attr('', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'колВоФото' })
  });

  modelClass.defineProjection('ПечатьФотоL', 'i-i-s-fotokiosk2-печать-фото', {
    размер: attr('Размер', { index: 0 }),
    сделатьФото: belongsTo('i-i-s-fotokiosk2-сделать-фото', 'Кол во фото', {
      колВоФото: attr('Кол во фото', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
