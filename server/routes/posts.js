import { v4 as uuidv4 } from 'uuid';

const ROUTE = "/posts";


const addPostOpts = (req, reply) => {
	const { lang, message } = req.body;

	const item = {
		id: uuidv4(),
		lang,
		message
	}

	reply.code(201).send({ log: logInfo(req), payload: item });
}

function logInfo(request) {
	return {
		"ip": request.ip,
		"hostname": request.hostname,
		"method": request.method,
		"user-agent": request.headers["user-agent"],
	}
};

const postsOpts = {
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

function postsRoutes(fastify, options, done) {

	fastify.get(ROUTE, postsOpts);

	fastify.post(ROUTE, addPostOpts);

	done();
}


export default postsRoutes;
