yarn --cwd /src/static/ build
python /src/manage.py collectstatic --noinput --clear
