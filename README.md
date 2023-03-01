# demo-infra-app
This repo is a demonstration of a basic NodeJS application and the mechanisms that could be used to deploy it.

In the present state, the app offers a simple web interface that displays the values of a counter.
You can click a button to make the counter go up.

## Quick Start
With Docker:
```sh
docker run --rm -it -p 3000:3000 $(docker build -q .)
```

With Podman:
```sh
podman run --rm -it -p 3000:3000 $(podman build -q .)
```
