import { Column, Model, Table, } from 'sequelize-typescript';

@Table
export class Beer extends Model<Beer> {
  @Column
  name: string;

  @Column
  type: string;

  @Column
  country: string;
}
