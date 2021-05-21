# vinceroti

## Description
This is my personal portfolio website that is hosted on an AWS S3 Bucket.


## Project setup
```
npm install
```

## Build Project For Production (s3 deploy)
```
npm run build
```

## Deploying

When running the build or deploy command:

```
npm run deploy
```
```
npm run build
```

It will attempt to push up all compiled build files to the s3 bucket that is set up within "aws-upload.conf.js".

You will need proper IAM credentials setup. Once those are obtained, create a .json file called "aws-credentials.json" and save it in this format with the proper keys.

```
{
    "accessKeyId": "exampleID",
    "secretAccessKey": "exampleAccessKey",
    "region": "us-east-1"
}
```

More info on s3 deploy procedure can be found here -
https://www.npmjs.com/package/s3-upload
