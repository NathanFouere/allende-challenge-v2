import type { PoliticalPartyDTO } from '@shared/dist/political-party/political-party-dto.js';
import { inject } from '@adonisjs/core';
import type PoliticalParty from '#political-party/domain/models/political_party';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { LicensedFileDTOFactory } from '#licensed-file/application/factory/licensed_file_dto_factory';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import ChartDataFactory from '#common/utils/chart_data_factory';

@inject()
export class PoliticalPartyDTOFactory {
  constructor(
    private readonly licensedFileDTOFactory: LicensedFileDTOFactory,
    private readonly chartDataFactory: ChartDataFactory,
  ) {
  }

  public createPoliticalPartyDTO(politicalParty: PoliticalParty): PoliticalPartyDTO {
    return {
      id: politicalParty.id,
      name: politicalParty.name,
      affiliation: politicalParty.affiliation,
      licensedFile: this.licensedFileDTOFactory.createFromLicensedFile(politicalParty.licensedFile),
      description: politicalParty.description,
      happinessLevel: politicalParty.happinessLevel,
      happinessPerMonthChartData: this.chartDataFactory.createFromAmountPerTurn(
        politicalParty.happinessPerTurn,
        'Happiness Level',
        0,
        4,
        [
          { min: 0, max: 0, value: 'Very-Low' },
          { min: 1, max: 1, value: 'Low' },
          { min: 2, max: 2, value: 'Medium' },
          { min: 3, max: 3, value: 'High' },
          { min: 4, max: 4, value: 'Very-High' },
        ],
      ),
    };
  }
}
