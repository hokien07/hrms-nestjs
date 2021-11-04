import { Injectable } from '@nestjs/common';
import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  InferSubjects,
} from '@casl/ability';
import { Action } from './constant';

type Subjects =
  | InferSubjects<typeof CreateEmployeeDto | typeof DashboardDto>
  | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  constructor(employee: CreateEmployeeDto) {
    const { can, cannot, build } = new AbilityBuilder<
      Ability<[Action, Subjects]>
    >(Ability as AbilityClass<AppAbility>);
  }
}
