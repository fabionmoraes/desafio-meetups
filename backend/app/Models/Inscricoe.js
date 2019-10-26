'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Inscricoe extends Model {
  user () {
    return this.belongsTo('App/Models/User', 'id_user') // belongs apenas um projeto relacionado
  }

  organizador () {
    return this.belongsTo('App/Models/User', 'org_id') // belongs apenas um projeto relacionado
  }

  meetup () {
    return this.belongsTo('App/Models/Meetup') // belongs apenas um projeto relacionado
  }

  file () {
    return this.belongsTo('App/Models/File') // belongs apenas um projeto relacionado
  }
}

module.exports = Inscricoe
