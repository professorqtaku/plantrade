#clear this folder of old files
rm -r ./dist

# create dist folder in backend
# -p  = create all the sub folders
mkdir -p ./dist/src/main/resources/static/uploads


cp -r ./src/main/resources/static/uploads/* ./dist/src/main/resources/static/uploads
cp -r ./plantrade.db ./dist/

## build frontend
cd ./frontend
npm run build


# move frontend build to static folder
# move everything in frontend dist folder to backend
cp -r ./dist/* ../dist/src/main/resources/static
cp -r ./dist/* ../src/main/resources/static

cd ..
# build jar file with maven
mvn clean package

# move jar file to dist folder
mv ./target/plantrade-0.0.1.jar ./dist/
