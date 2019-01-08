import Ember from 'ember';
import DS from 'ember-data';
import { underscore } from '@ember/string';

const { String: { pluralize } } = Ember;

export default DS.JSONAPIAdapter.extend({

  pathForType(type) {
    return pluralize(underscore(type));
  }

});
