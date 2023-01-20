yarn --cwd /src/static/ -s install
yarn --cwd /src/static/ -s watch & python /src/manage.py runserver 0.0.0.0:8000;
