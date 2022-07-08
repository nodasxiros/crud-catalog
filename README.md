## Description
A Full-stack web app beer catalog, built with [Nest](https://github.com/nestjs/nest) framework and [React](https://github.com/facebook/react/) library.

## Installation
### Clone repository
```bash
$ git clone https://github.com/nodasxiros/crud-catalog.git
```
### Run the set_up bash script provided
```bash
# The script creates env file and installs
# api and front dependencies
$ ./set_up.sh

# If you get a permissions error try
# the command below and run the script again
$ chmod 777 set_up.sh
```
### Create a database
Run mysql localy and create an empty database with appropriate configuration (the same configuraiton provided in the env file).

#### Use the sql dump file instead
If you find it hard to create your own db use the dump provided and import it using either a client or the command line

### Run db migrations and seeders (Only if you've not used dump file)
```bash
# This will run all the migration files
$ npx sequelize-cli db:migrate

# This will run all the seeder files
$ npx sequelize-cli db:seed:all
```
### Run the project
Finally, run yarn command separately for api and front, in different tabs
```bash
# First tab
$ cd api/ && yarn

# Second tab
$ cd front/ && yarn
```
## License

The present web app is [MIT licensed](LICENSE).
