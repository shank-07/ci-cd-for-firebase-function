FROM node:12.18.1-alpine


LABEL com.github.actions.name="GitHub Action for Firebase Function"

RUN apk --update add openjdk8-jre

RUN apk add --no-cache git

RUN npm install -g firebase-tools@9.5.0

ENTRYPOINT ["entrypoint.sh"]