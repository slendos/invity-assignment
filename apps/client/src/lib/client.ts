import { AppType } from '@monorepo/server/src/app';
import { hc } from 'hono/client';

export const client = hc<AppType>('http://localhost:3000/');
