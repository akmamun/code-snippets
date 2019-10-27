FROM python:3.8-alpine

RUN apk add --no-cache python3-dev \
    && pip3 install --upgrade pip

WORKDIR /src

COPY . .

RUN pip install -r requirements.txt                                                                            

EXPOSE 5000

ENTRYPOINT  ["python3"]

CMD ["app.py"]
