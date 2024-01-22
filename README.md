# About 
 _____

Web App created in the Flask framework for sharing food items between users, inspired by the less-waste movement. Users can create their accounts, log in, post advertisements stored in the database, search for adverts in their area, contact other users 

**Technologies:** <br>Python (Flask, unit tests), HTML5, SCSS, Bootstrap, 
      MySQL, JavaScript, APIs


# Getting started
_________

To run and use the project, follow these steps:


## Clone the Repository
Clone the repository to your local machine:

```bash
git clone https://github.com/urszkam/foodsharing_app.git FOODSHARING_APP
```

## Configuration 

1. Set up 'Sherfood' database

      Run ```db.sql``` script in MySQL IDE to set up the database

2. Install the requirements

      ```bash
      pip install -r requirements. txt
      ```


2. Configure Database 

      Open config.py, replace ```HOST```, ```USER```, ```PASSWORD``` with your own data:

      ```HOST="Your DB Host name"```

      ```USER="Your user name"```

      ```PASSWORD = "Your DB password"```

      ```EMAIL_USER = "Email address"```

      ```EMAIL_PASSWORD ="App password"```

      To generate ```EMAIL_PASSWORD```, user has to set up 2-step verification on the account so that they could have access to the generation of a 16-digit app password.

      This kind of password is usually used for less secure apps or if you don't want to share your password with a particular application.

      ```For gmail```, please follow this instruction: https://support.google.com/mail/answer/185833?hl=en-GB



3. Configure API 

      Please register on https://console.cloud.google.com/ for an api key to allow the usage of geolocalisation accessible
      via def extract_lat_long_via_address() and calculate_distance(). This will allow you to see the adverts nearby.

      When you generate your api key please insert it into string below.

      ```Example api key = AIzaSyApyx4KbXuO-hBRceBu3LugFm-rYdAlvWR``` (This one IS NOT working)

      ```GOOGLE_API_KEY = f"AIzaSyApyx4KbXuO-hBRceBu3LugFm-rYdAlvWR"```


## How to run the project

Make sure you are in the FOODSHARING_APP directory and run the following command :


For **Mac** and **Linux** users:

```bash
      export FLASK_APP=FOODSHARING_APP
      export FLASK_DEBUG=1
      flask run
```

For **Windows** users:

```bash
      $env:FLASK_APP="FOODSHARING_APP"
      python -m flask run
```
