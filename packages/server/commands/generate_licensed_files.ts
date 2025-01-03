import { BaseCommand } from '@adonisjs/core/ace';
import { inject } from '@adonisjs/core';
import type { CommandOptions } from '@adonisjs/core/types/ace';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { LicensedFileCreationService } from '#licensed-file/infrastructure/startup/licensed_file_creation_service';

export default class GenerateLicensedFiles extends BaseCommand {
  static readonly commandName = 'generate:licensed-files';
  static readonly description = 'Generate licensed files (photos and videos) for the game';

  static readonly options: CommandOptions = {
    startApp: true,
  };

  @inject()
  async run(licensedFileCreationService: LicensedFileCreationService) {
    await licensedFileCreationService.initializeLicensedFiles();
  }
}
