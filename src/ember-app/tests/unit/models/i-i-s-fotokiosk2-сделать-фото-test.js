import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-fotokiosk2-сделать-фото', 'Unit | Model | i-i-s-fotokiosk2-сделать-фото', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-fotokiosk2-доп-настройки',
    'model:i-i-s-fotokiosk2-инфо-фото',
    'model:i-i-s-fotokiosk2-клиент',
    'model:i-i-s-fotokiosk2-оплата',
    'model:i-i-s-fotokiosk2-отправ-на-почту',
    'model:i-i-s-fotokiosk2-печать-фото',
    'model:i-i-s-fotokiosk2-сделать-фото',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
