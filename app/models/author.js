import DS from 'ember-data';
import Publisher from './publisher';

export default Publisher.extend({
  books: DS.hasMany('book', { async: true }),

  loadedAt: Ember.on('didLoad', function() {
    this.set('loadedAt', new Date());
  })

});
