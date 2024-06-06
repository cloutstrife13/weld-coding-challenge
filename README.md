# Welcome to Welds coding-challenge

## Implementation Strategy

Prior to starting the work, I had to go through the README in order to work out this challenge's requirements.

Given the fact that the task has mandated the implementation of a microservice architecture, I had to line up the infrastructure first. To do so, I have created `Dockerfiles` for each NestJS microservice and a `docker-compose.yaml` file for one-shot launching the backend for speed's sake. Following resources were needed:

1. As the `worker` had to continuously fetch for data whilst encapsulated from the outside world, it had to be accessed from another service. For this approach, `RabbitMQ` has been chosen.
2. The `worker` had to forward the data fetched to the `data-streams` microservice, allowing it to listen to a topic through which it can obtain the data forwarded and store in a database. I chose `MongoDB` for storing simple documents.

Once the infrastructure has been set up, I've incrementally implemented features for finalising this challenge. I have sporadically employed Test-Driven Development for E2E and Integration tests in order to guarantee the robustness of the code.

Unlike `data-streams`, `worker` has no APIs exposed at all, making its invocation via `RabbitMQ` mandatory.

Setting up `RabbitMQ` was quite tedious since it was the first time touching upon it. However, its function within the architecture was clear from the beginning, allowing me to refer to my previous experiences with AWS SQS and Azure Service Bus.

For `RabbitMQ`, two queues were required. One for sending `fetcher` status updates for enabling or disabling the diachronical data acquisition in `worker` from `data-streams` to `worker` and another one for sending the external data fetched from `worker` to `data-streams`. Had I only used one queue, the reliability of the data transmission would have suffered immensely since the second transmission from `worker` to `data-streams` has led to a crash of the `worker`.

Towards the end, I have pushed the data received from `worker` to `MongoDB` and created a new endpoint for obtaining all the data fetched from the database. Realising that the database is being populated in real-time behind the scenes is quite neat thanks to `RabbitMQ` and CRON jobs. Finally, I have refactored the code a bit in order to improve this code's readability.

Since I have been mostly focusing on delivering a working solution, I have taken advantage of NestJS's CRON Scheduler that would enable fetching data over time. Another approach would have been a `while` loop based on a singleton's state that would have been switched on and off but that would have led to writing boilerplate code which is overkill.

## Future work

Whilst working on this app, I haven't paid much attention on perfection and robustness but speed and core features. Since it is a working solution, I would recommend the following for improving it:

- More error handing for production-readiness
- Logging with emphasis on traceability such that failures can be traced on tools such as AWS CloudWatch
- Code sharing for reducing duplicated code
- Adding a microservice for configuring the behaviour of `worker` (e.g. readjusting the CRON time or adding/deleting external endpoints in real-time)
- Data transformation module for the `worker`
- Subscription to an endpoint, allowing users to observe or create summaries of events
- Exposing the configuration state of `worker` to one specific microservice
- Adding health status endpoints for all microservices
- Creating a SaaS platform to provide managed data streaming services to customers

## Prerequisites

To launch this application, you must have Docker installed.

## Repo initialisation

```bash
yarn
```

## Launching

```bash
docker-compose up
```

## Testing

```bash
# Please refer to Launching above as the whole infrastructure must be up and running
yarn test:e2e
```

## Endpoints

- **POST** http://localhost:3001/fetcher/on
- **POST** http://localhost:3001/fetcher/off
- **GET** http://localhost:3001/response
