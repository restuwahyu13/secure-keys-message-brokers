import 'dotenv/config'
import { RabbitMQ } from './rascal'

// rabbitmq subsciber
;(async () => {
	try {
		const broker: InstanceType<typeof RabbitMQ> = new RabbitMQ('send-message', `node:${process.env.RABBITMQ_SECRET}`)
		broker.subscriber((content: string, error: Error) => {
			if (!error) console.log(content)
		})
	} catch (err) {
		console.error(err)
	}
})()
