import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDb } from './connect-db';
import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;

(async function server() {
    var app = express();
let db = await connectDb();

const PORT = process.env.PORT || 7777;

app.use(
    cors(),
    bodyParser.urlencoded({extended: true}),
    bodyParser.json()
);

passport.use(
    'login',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        session: false,
      },
      (username, password, done) => {
        try {
            db.collection('Users').find({
            email: username,
            password
          }).toArray((err, user) => {
            if (user === null) {
              return done(null, false, { message: 'bad username' });
            }
            else {
                return done(null, user);
            }
            // bcrypt.compare(password, user.password).then(response => {
            //   if (response !== true) {
            //     console.log('passwords do not match');
            //     return done(null, false, { message: 'passwords do not match' });
            //   }
            //   console.log('user found & authenticated');
            //   return done(null, user);
            // });
          });
        } catch (err) {
          done(err);
        }
      },
    ),
  );

app.post('/task', async (req, res)=> {
    // let db = await connectDb();
    let count = await db.collection('Users').insertMany([req.body]);
    console.log('count',count);
    res.status(200).send(count);
});
app.use(passport.initialize());
app.post('/loginUser', async (req, res, next)=> {
    // let db = await connectDb();
    console.log('user is',req.body.username);
    passport.authenticate('login', (err, users, info) => {
        if (err) {
          console.error(`error ${err}`);
        }
        if (info !== undefined) {
          console.error(info.message);
          if (info.message === 'bad username') {
            res.status(401).send(info.message);
          } else {
            res.status(403).send(info.message);
          }
        } else {
          req.logIn(users, () => {
            db.collection('tasks').find({
                name: req.body.username
              }).then(user => {
            //   const token = jwt.sign({ id: user.id }, jwtSecret.secret, {
            //     expiresIn: 60 * 60,
            //   });
            //   res.status(200).send({
            //     auth: true,
            //     token,
            //     message: 'user found & logged in',
            //   });
            });
          });
        }
      })(req, res, next)
});

app.listen(PORT, ()=> console.log('Server listening on port',PORT));
})()
