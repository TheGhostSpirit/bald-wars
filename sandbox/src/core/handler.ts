import ts from 'typescript';
import { Request, Response } from 'express';
import requireFromString from 'require-from-string';

import schema from './schema';
import { battle } from './battle/battle';

import { validateSchema } from '../utils/schema-validator';

export const handler = (req: Request, res: Response) => {
  const input = validateSchema(schema.inputSchema, req.body);
  const char1Js = ts.transpile(
    Buffer.from(input.character1.program, 'base64').toString()
  );
  const char2Js = ts.transpile(
    Buffer.from(input.character2.program, 'base64').toString()
  );
  const char1Module = requireFromString(char1Js);
  const char2Module = requireFromString(char2Js);

  const result = battle(
    [ input.character1.id, input.character1.name, char1Module.default ],
    [ input.character2.id, input.character2.name, char2Module.default ]
  );

  return res.json({ result });
};
