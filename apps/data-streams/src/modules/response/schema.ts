import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Document } from 'mongoose';

@Schema()
export class Response extends Document {
  @Prop({ type: SchemaTypes.Date, required: true })
  dateAdded: Date;

  @Prop({ type: SchemaTypes.String, required: true })
  sourceUrl: string;

  @Prop({ type: SchemaTypes.Mixed, required: true, default: {} })
  data: unknown;
}

export const ResponseSchema = SchemaFactory.createForClass(Response);
