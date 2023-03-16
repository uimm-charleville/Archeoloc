'use strict';

/**
 * discovery controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::discovery.discovery');
