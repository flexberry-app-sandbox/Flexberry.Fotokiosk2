import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-fotokiosk2-сделать-фото', 'Unit | Serializer | i-i-s-fotokiosk2-сделать-фото', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-fotokiosk2-сделать-фото',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-fotokiosk2-вид-оплаты',
    'transform:i-i-s-fotokiosk2-категория',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
