import { model, Schema } from 'mongoose';

export const UserSchema: Schema = new Schema({
 
  firstName: {
    type: String,
    default: '',
    required: true
  },
});