# Redcross

## Backend bootstrap

1. Build and compile  ``./gradlew build`` (NOTE: you may have to setup database before build can pass)

2. Run dev server (spring) ``./gradle bootRun``

## Frontend bootstrap

ALL COMMANDS BELOW SHOULD BE RUN IN web/ FOLDER  
1. go to web/ directory

2. install all the dependencies: ``yarn install``

3. build and compile ``yarn run build-dev``

4. start dev server (webpack) ``yarn run start``

## Database

1. If you don't have mysql, install mysql through HomeBrew: ``brew install mysql``(Other installation methods are highly unrecommended!)
2. open mysql in terminal: ``mysql -u root`` or ``mysql -uroot`` (you may want to run ``mysql.server start`` first)
3. First run scripts in schema_setup.sql
4. ``use redcross;``
5. run the rest of the scripts in table_setup.sql
