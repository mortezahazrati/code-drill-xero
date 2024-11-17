# Fullstack typescript application

### Prerequisite

This app is containernized, meaning to run it you'll need to have Docker and Docker compose installed on your machine.

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

### After cloning the repo, in the root of the project, run:

```
docker-compose up -d --build
```

- Then you should see the below process of pulling/creating the images , and then creating and running the containers:


https://github.com/user-attachments/assets/88096473-4dd6-455b-8194-ab647ee4fe9a


- After successfully running the `docker-compose up -d --build` command, If you visit your Docker Desktop, then you can access the running services like below:





- The services will be accessible as follows:

  - `xero` service on `http://localhost:3000/`
  - `server` service on `http://localhost:4000/`
  - `client` service on `http://localhost:8000/`

- If you visit `http://localhost:8000/`, then you'll the client of the application displaying the balance report, like th below video:



https://github.com/user-attachments/assets/5c19d205-e11d-46bb-8285-0105f8af659a

