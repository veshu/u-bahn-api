/**
 * the organization skills provider controller
 */

const service = require('./service')
const helper = require('../../common/helper')
const methods = helper.getSubControllerMethods(service)

module.exports = {
  ...methods
}
