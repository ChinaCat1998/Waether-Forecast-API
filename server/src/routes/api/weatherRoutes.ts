import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/api/weather', (req: Request, res: Response) => {},
  // TODO: GET weather data from city name
  router.get('/api/weather', async (req: Request, res: Response) => {
     try {
    const savedCity = HistoryService.addCity();
    res.json(savedCity);
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
  }),
  // TODO: save city to search history
  router.post('/api/weather', async (req: Request, res: Response) => {})
);

// TODO: GET search history
router.get('/history', async (req: Request, res: Response) => {
  try {
    const history = await HistoryService.getHistory();
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

});

// * BONUS TODO: DELETE city from search history
//router.delete('/history/:id', async (req: Request, res: Response) => {});

export default router;
