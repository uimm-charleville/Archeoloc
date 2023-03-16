'use strict';

/**
 * discovery router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::discovery.discovery');
