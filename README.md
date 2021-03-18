# README
##
You need to run this commands 

* rails db:create db:migrate db:seed
* bundle install

## Create files
 You need to create a .env file in client/ (this folder is to run react )
`
SKIP_PREFLIGHT_CHECK=true
REACT_APP_API='http://localhost:3001/api/v1'
`

and to run the app you need 

` rake start `

if you have some problems create a file `Procfile` in the root directory with
  this info

```
web: cd client && npm start
api: rails s -p 3001```
