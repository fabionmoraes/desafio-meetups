'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Meetup extends Model {
  user () {
    return this.belongsTo('App/Models/User') // belongs apenas um projeto relacionado
  }

  file () {
    return this.belongsTo('App/Models/File') // belongs apenas um projeto relacionado
  }
}

module.exports = Meetup
