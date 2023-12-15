import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КатегорияEnum from '../enums/i-i-s-fotokiosk2-категория';

export default FlexberryEnum.extend({
  enum: КатегорияEnum,
  sourceType: 'IIS.Fotokiosk2.Категория'
});
