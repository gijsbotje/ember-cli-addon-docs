import { inject as service } from '@ember/service';
import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';

export default Component.extend({
  layout,

  docsRoutes: service(),

  tagName: 'main',

  elementId: 'docs-viewer__scroll-body',
  classNames: 'docs-viewer__main',

  editCurrentPageUrl: computed('docsRoutes.currentRouteFilename', function() {
    let filename = this.get('docsRoutes.currentRouteFilename');
    // let currentUrl = this.get('

    // dummy/pods/docs/quickstart/template

    return `https://github.com/ember-learn/ember-cli-addon-docs/blob/master/tests/${filename}`
  })

});
