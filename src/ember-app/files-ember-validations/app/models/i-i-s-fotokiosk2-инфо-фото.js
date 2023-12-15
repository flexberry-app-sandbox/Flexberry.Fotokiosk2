import {
  defineNamespace,
  defineProjections,
  Model as ИнфоФотоMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk2-инфо-фото';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИнфоФотоMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
