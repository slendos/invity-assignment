import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { z } from 'zod';

import { fibBinet } from './fibBinet';

// TODO potential improvement: https://hono.dev/snippets/zod-openapi
export const app = new Hono()
  .use('*', cors())
  .get('/v1/fibonacci', zValidator('query', z.object({ number: z.coerce.number().positive().max(3000) })), (c) => {
    const { number } = c.req.valid('query');

    return c.json({ fibonacciNumber: fibBinet(number) });
  });

export type AppType = typeof app;
