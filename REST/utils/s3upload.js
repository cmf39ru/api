require('dotenv').config()
const aws = require('aws-sdk'),
      multer = require('multer'),
      multerS3 = require('multer-s3')

const s3Config = new aws.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_ACCESS_SECRET,
        Bucket: process.env.AWS_BUCKET_NAME
      })
const fileFilter = (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
          cb(null, true)
        } else {
          cb(null, false)
        }
      }
const multerS3Config = multerS3({
        s3: s3Config,
        bucket: process.env.AWS_BUCKET_NAME,
        // acl: 'public-read',
        metadata: function (req, file, cb) {
          cb(null, { fieldName: file.fieldname })
        },
        key: function (req, file, cb) {
          let curdate = new Date().toISOString()
          cb(null, process.env.AWS_BUCKET_UPLOAD_PATH  + curdate + '-' + file.originalname)
        }
      })
const upload = multer({
        storage: multerS3Config,
        fileFilter: fileFilter,
        limits: {
          fileSize: 1024 * 1024 * 5 // max file size 5 Mb
        }
      })
console.log('Upoading files to AWS S3', process.env.AWS_BUCKET_NAME, 'storage', process.env.AWS_BUCKET_UPLOAD_PATH);
module.exports = upload;
