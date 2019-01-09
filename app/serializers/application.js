import DS from 'ember-data';
import { capitalize } from '@ember/string';
import { singularize } from 'ember-inflector';

export default DS.JSONAPISerializer.extend({
  payloadKeyFromModelName(modelName) {
    return singularize(capitalize(modelName));
  }
});
