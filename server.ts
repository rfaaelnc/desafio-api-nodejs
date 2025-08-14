import fastify from 'fastify';
import crypto from 'node:crypto';

const server = fastify();

const courses = [
  { id: '1', title: 'curso de node.js' },
  { id: '2', title: 'curso de react' },
  { id: '3', title: 'curso de react native' },
];

server.get('/courses', (request, reply) => {
  return reply.send({ courses });
});

server.get('/courses/:id', (request, reply) => {
  type Params = {
    id: string;
  };

  const params = request.params as Params;
  const courseId = params.id;

  const course = courses.find((course) => course.id === courseId);

  if (course) {
    return { course };
  }

  return reply.status(404).send();
});

server.post('/courses', (request, reply) => {
  type Body = {
    title: string;
  };

  const courseId = crypto.randomUUID();
  const body = request.body as Body;
  const courseTitle = body.title;

  if (!courseTitle) {
    return reply.status(400).send({ message: 'Título obrigatório.' });
  }

  courses.push({ id: courseId, title: courseTitle });

  return reply.status(201).send({ courseId });
});

server.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!');
});
