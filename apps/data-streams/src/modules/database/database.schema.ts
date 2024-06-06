import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Document } from 'mongoose';

@Schema()
export class WorkerResponse extends Document {
  @Prop(SchemaTypes.Mixed)
  data: unknown[];
}

export const WorkerResponseSchema =
  SchemaFactory.createForClass(WorkerResponse);
