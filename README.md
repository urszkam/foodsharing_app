## **About** 
 _____

Web App created in the Flask framework for sharing food items between users, inspired by the less-waste movement. Users can create their accounts, log in, post advertisements stored in the database, search for adverts in their area, contact other users 

**Technologies:** <br>Python (Flask, unit tests), HTML5, SCSS, Bootstrap, 
      MySQL, JavaScript, APIs




## Configuration 
_________

1. Set up 'Sherfood' database

Run ```db.sql``` script in MySQL IDE to set up the database

2. Configure Database 

Open config.py, replace ```HOST```, ```USER```, ```PASSWORD``` with your own data:

```HOST="Your DB Host name"```

```USER="Your user name"```

```PASSWORD = "Your DB password"```

```EMAIL_USER = "Company email address"```

```EMAIL_PASSWORD ="App password"```

To generate ```EMAIL_PASSWORD```, user has to set up 2-step verification on the account so that they could have access to the generation of a 16-digit app password.

This kind of password is usually used for less secure apps or if you don't want to share your password with a particular application.

```For gmail```, please follow this instruction: https://support.google.com/mail/answer/185833?hl=en-GB



3. Configure API 

Please register on https://console.cloud.google.com/ for an api key to allow the usage of geolocalisation accessible
via def extract_lat_long_via_address() and calculate_distance(). This will allow you to see closest annoucements.

When you generate your api key please insert it into string below.

```Example api key = AIzaSyApyx4KbXuO-hBRceBu3LugFm-rYdAlvWR``` (This one IS NOT working)

```GOOGLE_API_KEY = f"AIzaSyApyx4KbXuO-hBRceBu3LugFm-rYdAlvWR"```


## **How to run the project **
________

Make sure you are in the Project_CFG_team3 directory and run the following command :


For **Mac** and **Linux** users:

```export FLASK_APP=Project_CFG_team3```

```export FLASK_DEBUG=1```

```flask run```

For **Windows** users:

```$env:FLASK_APP="Project_CFG_team3"```

```python -m flask run```
