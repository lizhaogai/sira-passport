"use strict";

/**
 * Module dependencies.
 */
var WeiboStrategy = require('./libs/weibo');


/**
 * Framework version.
 */
require('pkginfo')(module, 'version');

/**
 * Expose constructors.
 */
exports.weibo = WeiboStrategy;
