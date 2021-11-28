#clear this folder of old files
rm -r ./dist

# create dist folder in backend
# -p  = create all the sub folders
mkdir -p ./dist/src/main/resources/static

# build jar file with maven
mvn clean package

# move jar file to dist folder
mv ./target/plantrade-0.0.1.jar ./dist/

# build frontend
cd ../frontend
npm run build


# move frontend build to static folder
# move everything in frontend dist folder to backend
mv ./dist/* ../backend/dist/src/main/resources/static

# create script to run jar file
echo "java -jar plantrade-0.0.1.jar" > ./dist/run.sh
