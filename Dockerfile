FROM php:7.2.4-apache

LABEL "com.uestudio.vendor"="tusonrisasenota"
LABEL version="0.0.1"
LABEL description="docker for cluster tusonrisasenota"

# Install dependencies
RUN apt-get update -y
RUN apt-get install -y git zip unzip vim

# Install app
ADD . /var/www/html

WORKDIR /var/www/html

#Symbolyc links
RUN ln -s /var/www/html/public /var/www/html/public/yodona
RUN ln -s /var/www/html/public /var/www/html/public/fueradeserie

RUN apache2 -v

# Enable apache mods.
RUN a2enmod rewrite
RUN a2enmod deflate
RUN a2enmod headers

# Manually set up the apache environment variables
ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2
ENV APACHE_LOCK_DIR /var/lock/apache2
ENV APACHE_PID_FILE /var/run/apache2.pid

# Update the default apache site with the config we created.
ADD config/apache/000-default.conf /etc/apache2/sites-enabled/000-default.conf

RUN service apache2 restart

EXPOSE 80

# By default start up apache in the foreground, override with /bin/bash for interative.
CMD /usr/sbin/apache2ctl -D FOREGROUND