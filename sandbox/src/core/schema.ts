import { z } from 'zod';

const inputSchema = z.object({
  character1: z.object({
    id: z.number(),
    name: z.string(),
    program: z.string()
  }),
  character2: z.object({
    id: z.number(),
    name: z.string(),
    program: z.string()
  })
});

export type InputSchemaType = z.infer<typeof inputSchema>;

export default { inputSchema };
