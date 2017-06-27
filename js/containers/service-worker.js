import React, { Component } from 'react';
import serviceWorker from '../../webpack/loaders/sw?name=/js/workers/sw.js!../workers/sw';

class ServiceWorker extends Component {
  constructor(...props) {
    super(...props);
  }

  static hasServiceWorker() {
    return 'serviceWorker' in navigator;
  }

  setServiceWorker() {
    serviceWorker({scope: '/js/workers/'})
      .then(args => {
        console.error('success', args);
      })
      .catch(error => {
        console.error('error', error);
      });

  }

  componentDidMount() {
    if (this.constructor.hasServiceWorker()) {
      this.setServiceWorker();
    }
  }

  render() {
    return (
      <div>Service Worker</div>
    );
  }
}

export default ServiceWorker;
