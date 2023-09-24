
import Appoint from '@/models/Appoint';
import db from '@/utils/db';

export default async (req, res) => {

    const { name, coName, email, comment, token } = req.body;

    const human = await validateHuman(token);
    if (!human) {
      res.status(400);
      res.json({ errors: ["Please, you're not fooling us, bot."] });
      return;
    }

    if (req.method !== 'POST') {
      return;
    }
  
    await db.connect(); 
    const newAppoint = new Appoint({
      name,
      coName,
      email,
      comment,
    });

    const appoint = await newAppoint.save();
    await db.disconnect();
    res.status(201);
    res.send({
      message: ['Appointments updated',appoint.email]
    });
  
    async function validateHuman(token) {
     
      const secret = process.env.RECAPTCHA_SECRET_KEY;
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
      return data.success;
    }
  
  };