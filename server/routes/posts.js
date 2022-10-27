import { v4 as uuidv4 } from 'uuid';
import { analyzeCommand } from '../../shared/analyzer.js';

const ROUTE = "/posts";

export function postsRoutes(fastify, options, done) {
	fastify.get(ROUTE, getOpts);
	fastify.post(ROUTE, postOpts);
	done();
}


function logInfo(request) {
	return {
		"ip": request.ip,
		"hostname": request.hostname,
		"method": request.method,
		"user-agent": request.headers["user-agent"],
		request: request.body,
	}
};


const postOpts = {
	schema: {
		tags: ['posts'],
		summary: 'Recives command, verifies it, inserts it into the database and returns the result',
		body: {
			type: 'object',
			required: ['command'],
			properties: {
				command: { type: 'string' }
			}
		},
		response: {
			201: {
				type: 'object',
				properties: {
					"log": {
						type: 'object',
						properties: {
							"ip": { type: 'string' },
							"hostname": { type: 'string' },
							"method": { type: 'string' },
							"user-agent": { type: 'string' },
							"request": { type: 'string' },
							"request": { type: 'object' },
						}
					},
					"details": {
						type: 'object',
						properties: {
							"id": { type: 'string', format: 'uuid' },
							"lang": { type: 'string' },
							"message": { type: 'string' },
						}
					}
				},
			}
		}
	},
	handler: function (req, reply) {
		console.log(req.body);

		const command = analyzeCommand(req.body.command);

		if (command === false) {
			reply.status(400).send({ error: 'Invalid Command !', request: logInfo(req) });
			return;
		}

		const item = {
			id: uuidv4(),
			lang: command.lang,
			message: command.msg
		}

		console.log(item);

		reply.code(201).send({ log: logInfo(req), details: item });
	}
}


const getOpts = {
	schema: {
		tags: ['posts'],
	},
	handler: function (request, reply) {
		return {
			"log": {
				"ip": request.ip,
				"hostname": request.hostname,
				"method": request.method,
				"user-agent": request.headers["user-agent"],
			},
			"message": "Hello Posts!"
		}
	}
};
