import { Serializer as ИнфоФотоSerializer } from
  '../mixins/regenerated/serializers/i-i-s-fotokiosk2-инфо-фото';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ИнфоФотоSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
