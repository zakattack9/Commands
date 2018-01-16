// creating boilerplate for serverless
// serverless create --template aws-nodejs

// testing lambda functions
// serverlesss invoke local -f function -p test.json
// OR
// sls invoke local -f "function name"
// *In the command above, "function" is the name of the function to run, and "test.json" is the JSON file of which the data is put in

// creating a bucket in aws
// aws s3api create-bucket --bucket test_bucket_zak --region us-west-2 --acl public-read --create-bucket-configuration LocationConstraint=us-west-2

// list all buckets in aws
// aws s3api list-buckets

// upload files to bucket
// aws s3 cp /c/Users/Student/Downloads/google.png s3://test-bucket-zak --acl public-read

// changes bucket to static webpage
// aws s3 website s3://test-bucket-zak/ --index-document index.html --error-document error.html

// publish page
// curl http://test-bucket-zak.s3-websites-us-west-2.amazonaws.com

// npm init --yes
// creates package.json

// npm install -s aws-sdk
// installs aws-sdk (make sure to add node_modules to .gitignore)

// sls invoke local -f function-name --path serverless.yml
// runs lambda function from local drive

// aws s3 website s3://zak-dev-serverlessdeploymentbucket-179rc2ts8tuat/ --index-document index.html --error-document error.html
// changes bucket to static webstie and also indicates to run off index.html

// aws s3 cp /c/Users/Student/Documents/Zak-Capstone/aws-photo-bucket/client-side/index.html s3://zak-dev-serverlessdeploymentbucket-179rc2ts8tuat/ --acl public-read
// uploads index.html to aws bucket

// http://zak-dev-serverlessdeploymentbucket-179rc2ts8tuat.s3-website-us-west-2.amazonaws.com/
// link to website, follow format of: http://bucketname.region.amazonaws.com

// deploy lambdas (deploys everything)
// sls deploy