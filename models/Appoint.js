import mongoose from 'mongoose';

const appointSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    coName: { type: String, required: true },
    email: { type: String, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Appoint = mongoose.models.Appoint || mongoose.model('Appoint', appointSchema);
export default Appoint;