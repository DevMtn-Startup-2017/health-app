const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const request = require('request')
const session = require('express-session')
const massive = require('massive')
const passport = require('passport')
var google = require('googleapis')
const oAuth = require('passport-oauth')
const Auth0Strategy = require('passport-auth0')
const config = require('./config')
const Dfp = require('node-google-dfp')


//========================== Setup ================================

// express setup
let app = module.exports = express()
app.use(express.static('./dist'))
app.use(bodyParser.json())
app.use(cors())


const massiveInstance = massive.connectSync({
  connectionString: config.dev.database.connectionString
})

// massive set-up
app.set('db', massiveInstance)

let db = app.get('db')

// auth0 setup
app.use(session({
  secret: config.dev.session.secret,
  resave: true,
  saveUninitialized:false
}))

//========================== OAuth2 ================================


var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2(
  YOUR_CLIENT_ID,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URL
);

// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/calendar'
];

var url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes,

  // Optional property that passes state parameters to redirect URI
  // state: { foo: 'bar' }
})


//========================== Auth 0 ================================


// initialize passport and Auth0
app.use(passport.initialize())
app.use(passport.session())
passport.use(new Auth0Strategy(config.dev.auth0Strategy, function(accessToken, refreshToken, extraParams, profile, done) {
  return done(null, profile)
}))

// login endpoint
app.get('/login', passport.authenticate('auth0'), function(req,res) {
  res.redirect('/#!/workouts')
})

app.get('/auth/callback',
passport.authenticate('auth0', {
  successRedirect: '/#!/space',
  failureRedirect: '/login'
}))

passport.serializeUser(function(user,done) {
  done(null, user)
})

passport.deserializeUser(function(user,done) {
  done(null, user)
})

// Get user info from Auth0
app.get('/api/auth0', function(req,res) {
  res.send(req.user)
})

//========================== Google DPF ================================


   let dfpUser = new Dfp.User(NETWORK_CODE, APP_NAME, VERSION)


    dfpUser.setSettings({
        client_id : config.dev.dfpSettings.clientID,
        client_secret : config.dev.dfpSettings.clientSecret,
        refresh_token : config.dev.dfpSettings.refreshToken,
        redirect_url : config.dev.dfpSettings.redirectUrl
      })
      

    dfpUser.getService('LineItemService', function (err, lineItemService) {
      if (err) {
        return console.error(err);
      }

      var statement = new DfpClass.Statement('WHERE id = 103207340');

      lineItemService.getLineItemsByStatement(statement, function (err, results) {
        console.log(results);
      })
    })


// import controller module
// const controller = require('./servCtrl')

//========================== Endpoints ================================



//========================== Listen ================================

app.listen(config.dev.server.port, () => console.log(`Listening to Andre${config.dev.server.port}`))
