FROM nginx
MAINTAINER Maximilian Kramp

COPY dist /usr/share/nginx/html

#Setup ENV values
#ENV DOMAIN_NAME "test.cherryfish.com"
ENV SERVICE_TAGS "nginx,portal"
ENV SERVICE_80_CHECK_HTTP "/"

#Fix permissions
RUN chown -R nginx:nginx /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
# RUN npm install


EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
