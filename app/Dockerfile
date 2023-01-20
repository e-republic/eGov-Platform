FROM python:3.9-alpine

WORKDIR /src

# Adding Node.js support
RUN apk add --update nodejs nodejs-npm yarn

RUN apk add --no-cache libffi-dev build-base python3-dev postgresql-dev g++ gcc python3-dev \
    musl-dev libxml2 libxslt-dev linux-headers bash mariadb-dev jpeg-dev zlib cairo pango gdk-pixbuf libffi fontconfig \
    ttf-dejavu graphviz graphviz-dev

# Install requirements
COPY requirements.txt /src/requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

RUN apk del libffi-dev build-base python3-dev g++ gcc python3-dev musl-dev linux-headers
# TODO: move to the 3rd step
RUN apk update && apk add binutils libc-dev

