import express from 'express';
import { Plan } from '../models/planModel.js';

const router = express.Router();

router.post("/suggestion", async (req, res) => {
    try{
      // const {prompt} = req.body;
      const features = {
        budget: req.body.budget,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        city: req.body.city,
        country: req.body.country,
      };
      console.log(features);

      const prompt = `Please ONLY response with a json object like this and NO extra text:
  
                      {"1":"name of the first place", "2":"name of the second place", ... }
      
                      Act as a travel agent and provide 15 specific places to visit for a person to choose 
                      who wants to travel to  ${features.city} in ${features.country} 
                      between ${features.startdate}  and ${features.enddate} 
                      with a budget of ${features.budget} dollars.`;
      
      console.log(prompt);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 400,
        temperature: 0,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
      
      const template = {"1":"Eiffel Tower",
                        "2":"Notre Dame Cathedral",
                        "3":"Louvre Museum",
                        "4":"Arc de Triomphe",
                        "5":"Sainte-Chapelle",
                        "6":"Musée d'Orsay",
                        "7":"Centre Pompidou",
                        "8":"Montmartre",
                        "9":"Sainte-Chapelle",
                        "10":"Champs-Élysées",
                        "11":"Musée de l'Orangerie",
                        "12":"Musée Rodin",
                        "13":"Musée de l'Armée",
                        "14":"Musée Picasso",
                        "15":"Musée du quai Branly Jacques Chirac"};
  
      res.render("completion", {choices: JSON.parse(response.data.choices[0].text)});
      //  res.render("completion", {choices: template});
      return res.status(200).json({
        success: true,
        data: response.data.choices[0].text
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.response
          ?error.response.data
          :"There was an issue on the server",
      });
    } 
  });

export default router;