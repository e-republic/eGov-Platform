# Write docker-compose override
if [ ! -f "docker-compose.override.yml" ]; then
    cat <<EOF >> docker-compose.override.yml
version: '3'
EOF
fi

# Check production mode
production=false

while getopts "p" flag
do
    case "${flag}" in
        p) production=true;;
    esac
done

shift $(($OPTIND - 1))

# Run
if "$production" != true; then
    docker-compose -f docker-compose.yml -f docker-compose.override.yml "$@"
else
    docker-compose -f docker-compose.yml -f docker-compose.override.yml "$@"
fi
