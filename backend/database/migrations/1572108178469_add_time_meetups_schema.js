'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddTimeMeetupsSchema extends Schema {
  up () {
    this.table('meetups', (table) => {
      table.timestamp('time').after('date_meetup')
    })
  }

  down () {
    this.table('meetups', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddTimeMeetupsSchema
