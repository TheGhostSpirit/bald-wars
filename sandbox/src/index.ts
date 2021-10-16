import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import createHttpError, { HttpError } from 'http-errors';
import passport from 'passport';

import { logger } from './utils/logger';
import { CONFIG } from './config';
import { handler } from './core/handler';

/**
 * Express HTTP application entrypoint.
 * Routes and middlewares setup.
 */
const main = () => {
  express()
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(passport.initialize())
    .post('/', handler)
    .use(({}, {}, next: NextFunction) =>
      next(createHttpError(404, 'Requested route not found'))
    )
    .use((err: HttpError, {}: Request, res: Response, {}) => {
      logger.error(err);
      res.status(err.statusCode ?? 500).json({ message: err.message });
    })
    .listen(CONFIG.port, () =>
      logger.info(`Server up and running on port ${CONFIG.port}!`)
    )
    .on('error', (error) => (logger.error(error), process.exit(1)));
};

main();
