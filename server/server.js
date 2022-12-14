import Fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

import { postsRoutes } from './routes/posts.js'


const PORT = 5000;

const fastify = Fastify({
	logger: true
});

// Plugin
await fastify.register(fastifySwagger, {
	info: {
		title: "UAE Codes API",
		description: "UAE Codes API",
		version: "0.1"
	},
	schemes: ['http', 'https'],
	uiConfig: {
		docExpansion: 'none',
		deepLinking: false,
	},
	tags: [
		{ name: 'posts', description: 'primary end-point' },
	],
	// uiHooks: {
	// 	onRequest: function (request, reply, next) { next() },
	// 	preHandler: function (request, reply, next) { next() }
	// },
	consumes: ['application/json'],
	produces: ['application/json'],
	staticCSP: true,
	securityDefinitions: {
		apiKey: {
			type: 'apiKey',
			name: 'apiKey',
			in: 'header'
		}
	},
	transformStaticCSP: (header) => header,
});

await fastify.register(fastifySwaggerUi, {
	routePrefix: '/docs',
});

// Routes
fastify.register(postsRoutes);

fastify.get('/', async (request, reply) => {

	reply.send({ hello: 'world!' });
	return { hello: 'world' }
});

/**
 * Run the server!
 */
const start = async () => {
	try {
		await fastify.listen({ port: PORT })
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
}
start();
