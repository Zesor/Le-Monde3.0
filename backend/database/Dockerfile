FROM python:3

WORKDIR /database

COPY . ./

RUN pip install --upgrade pip

RUN pip3 install -r requirements.txt

EXPOSE 9020

CMD [ "python3", "dbInteractions.py" ]