import { randomUUID } from "crypto";
import { BeforeInsert, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class EntityBase {
  @PrimaryColumn()
  public uid!: string;

  @BeforeInsert()
  public beforeInsert(): void {
    this.uid = randomUUID();
  }
}
