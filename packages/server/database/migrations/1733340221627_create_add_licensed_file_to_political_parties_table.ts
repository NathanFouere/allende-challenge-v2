import { BaseSchema } from '@adonisjs/lucid/schema';

export default class AddLicensedFileIdentifierToPoliticalParties extends BaseSchema {
  protected tableName = 'political_parties';

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .string('licensed_file_identifier')
        .references('identifier')
        .inTable('licensed_files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
        .nullable();
    });

    this.schema.alterTable('licensed_files', (table) => {
      table
        .integer('political_party_id')
        .unsigned()
        .references('id')
        .inTable('political_parties')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
        .nullable();
    });
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('licensed_file_identifier');
    });

    this.schema.alterTable('licensed_files', (table) => {
      table.dropColumn('political_party_id');
    });
  }
}