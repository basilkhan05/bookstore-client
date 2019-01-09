import Ember from 'ember';
import DS from 'ember-data';
import { capitalize } from '@ember/string';

const { String: { singularize } } = Ember;

export default DS.JSONAPISerializer.extend({
  payloadKeyFromModelName(modelName) {
    return singularize(capitalize(modelName));
  }
});