import DS from 'ember-data';
import Publisher from './publisher';

export default DS.Model.extend({
  books: DS.hasMany('book')
});
