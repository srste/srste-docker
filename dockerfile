FROM srste/srste:1.0.0.full
#FROM node:10-alpine
#RUN apk --no-cache add git
#RUN apk --no-cache add python
# Create app directory
WORKDIR /app/srstee_prod

COPY src /app/srstee_prod

#Obfuscation
WORKDIR /app/srstee_prod/mmf/base
RUN npm install javascript-obfuscator -g
RUN javascript-obfuscator ./script --output ./dist/script
RUN rm -rf ./script
RUN mv ./dist/script ./script
RUN rm -rf ./dist
docker-squash -f 100 -t srste/srste:1.0.1 srste/srste:1.0.0.full

WORKDIR /app/srstee_prod
RUN pwd
EXPOSE 8080
CMD [ "npm", "start" ]
