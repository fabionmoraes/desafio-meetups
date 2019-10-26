'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MeetupSchema extends Schema {
  up () {
    this.create('meetups', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.text('description').notNullable()
      table.date('date_meetup')
      table.string('location').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table
        .integer('file_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('meetups')
  }
}

module.exports = MeetupSchema
