const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const request = require('request')
const session = require('express-session')
const massive = require('massive')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const config = require('./config')


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


//========================== Auth 0 ================================


// initialize passport and Auth0
app.use(passport.initialize())
app.use(passport.session())
passport.use(new Auth0Strategy(config.dev.auth0Strategy, function(accessToken, refreshToken, extraParams, profile, done) {
  
  var options = {
  theme: {
    authButtons: {
      "testConnection": {
        displayName: "Test Conn",
        primaryColor: "#b7b7b7",
        foregroundColor: "#000000",
        icon: "http://example.com/icon.png"
      },
      "testConnection2": {
        primaryColor: "#000000",
        foregroundColor: "#ffffff",
      }
    }
  }
}
  
  
  return done(null, profile)
}))

// login endpoint
app.get('/api/login', passport.authenticate('auth0'), function(req,res) {
  res.redirect('/#!/workouts')
})

app.get('/api/signup', passport.authenticate('auth0'), function(req,res) {
  res.redirect('/#!/signup')
})

app.get('/auth/callback',
passport.authenticate('auth0', {
  successRedirect: '/#!/workouts',
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


//========================== Endpoints ================================



//========================== Listen ================================

app.listen(config.dev.server.port, () => console.log(`Listening to Andre${config.dev.server.port}`))
