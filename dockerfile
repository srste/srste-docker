#command - docker build -t srste/srste:2.0.0 .
FROM srste/srste:1.0.0.full
WORKDIR /app/srstee_prod

COPY src /app/srstee_prod

#Obfuscation
WORKDIR /app/srstee_prod/mmf/base
RUN npm install javascript-obfuscator -g
RUN javascript-obfuscator ./script --output ./dist/script
RUN rm -rf ./script
RUN mv ./dist/script ./script
RUN rm -rf ./dist

WORKDIR /app/srstee_prod
RUN pwd
EXPOSE 8080
CMD [ "npm", "start" ]
