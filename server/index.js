const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const qs = require('query-string');
app.use(cors());

// Constantes
const urlToGetLinkedInAccessToken = 'https://www.linkedin.com/oauth/v2/accessToken';
const urlToGetUserProfile ='https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))'
const urlToGetUserEmail = 'https://api.linkedin.com/v2/clientAwareMemberHandles?q=members&projection=(elements*(primary,type,handle~))';

app.get('/getUserCredentials', function (req, res) {
    console.log('Starts here');
  const user = {};
  const code = req.query.code;

    getAccessToken(code)
    .then((response) => {
        getUserProfile(response.data["access_token"])
        .then((response) => {
            resStatus = 200;
            let user = {};
            user.firstName = response.data["localizedFirstName"];
            user.lastName = response.data["localizedLastName"];
            user.profileImageURL = response.data.profilePicture["displayImage~"].elements[0].identifiers[0].identifier;
            res.status(resStatus).json({ user })
        })
    }).catch((error) => {
        res.status(500).send(`${error}`)
        console.error(error)
      })

})

/**
 * Get access token from LinkedIn
 * @param code returned from step 1
 * @returns accessToken if successful or null if request fails 
 */
function getAccessToken(code) {
  let accessToken = null;
  const config = {
    headers: { "Content-Type": 'application/x-www-form-urlencoded' }
  };
  const parameters = {
    "grant_type": "authorization_code",
    "code": code,
    "redirect_uri": "http://localhost:3000/",
    "client_id": "8611igirv8nck4",
    "client_secret": "EIJ01cYdrG9GpGTM",
  };
  return axios
    .post(
        urlToGetLinkedInAccessToken,
      qs.stringify(parameters),
      config)
    .catch(err => {
      console.log("Error getting LinkedIn access token : " + err );
    })
    // return accessToken;
}

/**
 * Get user first and last name and profile image URL
 * @param accessToken returned from step 2
 */
function getUserProfile(accessToken) {
  let userProfile = null;
  const config = {
    headers: {
      "Authorization": 'Bearer ' + accessToken 
    }
  }
  console.log("parmaters : " + qs.stringify(config))
  console.log("access : " + accessToken);
  return axios
    .get(urlToGetUserProfile, config)
    .catch(error => console.log("Error grabbing user profile : " + error))
}


/**
 * Get user email
 * @param accessToken returned from step 2
 */
function getUserEmail(accessToken) {
  const email = null;
  const config = {
    headers: {
      "Authorization": 'Bearer ' + accessToken
    }
  };
  return axios
    .get(urlToGetUserEmail, config)
    // .then(response => {
    //   email = response.data.elements[0]["handle~"];
    // })
    .catch(error => console.log("Error getting user email"))

  return email;
}

/**
 * Build User object
 */
function userBuilder(userProfile, userEmail) {
  return {
    firstName: userProfile.firstName,
    lastName: userProfile.lastName,
    profileImageURL: userProfile.profileImageURL,
    email: userEmail
  }
}

app.listen(3001, function () {
  console.log(`Node server running...`)
});
