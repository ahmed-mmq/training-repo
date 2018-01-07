import { model, Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
 
  firstName: {
    type: String,
    default: '',
    required: true
  },
});

export default model('User', UserSchema);