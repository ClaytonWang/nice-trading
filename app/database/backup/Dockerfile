FROM alpine:latest
RUN apk add --update mysql-client && rm -rf /var/cache/apk/* 

VOLUME /mysql_backups

COPY Shanghai /etc/localtime
COPY mysql_backup.sh /
COPY docker-entrypoint.sh /usr/local/bin/

RUN chmod +x /mysql_backup.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh


ENTRYPOINT ["/bin/sh","docker-entrypoint.sh"]

CMD ["sh"]