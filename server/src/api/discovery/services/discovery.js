'use strict';

/**
 * discovery service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::discovery.discovery');
