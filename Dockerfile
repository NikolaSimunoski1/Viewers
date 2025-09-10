FROM nginxinc/nginx-unprivileged:1.27-alpine

ARG PUBLIC_URL=/
ENV PUBLIC_URL=${PUBLIC_URL}
ENV PORT=3000
EXPOSE 3000

RUN rm /etc/nginx/conf.d/default.conf
USER nginx
COPY --chown=nginx:nginx .docker/Viewer-v3.x /usr/src
RUN chmod 777 /usr/src/entrypoint.sh

COPY --chown=nginx:nginx platform/app/dist/ /usr/share/nginx/html${PUBLIC_URL}

USER root
RUN chown -R nginx:nginx /usr/share/nginx/html
USER nginx

ENTRYPOINT ["/usr/src/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
