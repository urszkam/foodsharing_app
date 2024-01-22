## SHERFOOD APP
 _____

Web App created in the Flask framework for sharing food items between users, inspired by the less-waste movement. Users can create their accounts, log in, post advertisements stored in the database, search for adverts in their area, contact other users.

**Technologies:** <br>Python (Flask, unit tests), HTML5, SCSS, Bootstrap, 
      MySQL, JavaScript, APIs


## Table of Contents

- [Features](#features)
      - [User Authentication](#1-user-authentication)
      - [Posting announcements](#2-posting-announcements)
      - [Searching Announcements](#3-searching-announcements)
      - [Viewing Announcements](#4-viewing-announcement-details)
      - [Contacting Announcement Poster](#5-contacting-announcement-poster)
- [Installation](#installation)
      - [Clone the repository](#clone-the-repository)
      - [Configuration](#configuration)
- [How to run the project](#how-to-run-the-project)

## Features

### 1. User Authentication

Sherfood provides user authentication features, including:

- **Sign Up:** Users can create accounts by providing a unique username, email, and password.
- **Sign In:** Registered users can sign in using their username and password.
- **Logout:** Users can securely log out of their accounts.

### 2. Posting Announcements

Users can post announcements about available food items. The announcement form includes the following fields:

- **Address:** The location where the food is available.
- **Pick-Up Details:** Information about when and where the user can pick up the food.
- **Expiration Date:** The date until when the food is available.
- **Tags:** Users can specify dietary information such as vegan, vegetarian, kosher, halal, gluten-free, and lactose-free.
- **Product Name:** The name of the food product.
- **Description:** Additional details about the food item.

### 3. Searching Announcements

Users can search for food announcements based on location. The search functionality includes:

- **Address:** Users can enter an address to find food announcements in that location.
- **Distance Filter:** The app filters announcements based on a 10 km radius from the provided address.

### 4. Viewing Announcement Details

Users can view detailed information about a specific food announcement, including:

- **Product Name**
- **Description**
- **Pick-Up Details**
- **Tags**
- **Expiration Date**

### 5. Contacting Announcement Poster

If a user is interested in a specific food announcement, they can use the contact form to send a message to the user who posted the announcement. The contact form includes fields for the user's name, email, and a message.

## Installation
_________

To run and use the project, follow these steps:


## Clone the Repository
Clone the repository to your local machine:

```bash
git clone https://github.com/urszkam/foodsharing_app.git FOODSHARING_APP
cd FOODSHARING_APP
```

## Configuration 

**1. Set up 'Sherfood' database**

```bash
# Create the database schema
mysql -u <username> -p <password> < db_schema.sql
```

**2. Install the requirements**

```bash
pip install -r requirements. txt
```

**2. Configure Database** 

Open config.py, replace ```HOST```, ```USER```, ```PASSWORD``` with your own data:

```bash
HOST="Your DB Host name"
USER="Your user name"
PASSWORD = "Your DB password"
EMAIL_USER = "Email address"
EMAIL_PASSWORD ="App password"
```

To generate ```EMAIL_PASSWORD```, user has to set up 2-step verification on the account so that they could have access to the generation of a 16-digit app password.

This kind of password is usually used for less secure apps or if you don't want to share your password with a particular application.

```For gmail```, please follow this instruction: https://support.google.com/mail/answer/185833?hl=en-GB



**3. Configure API** 

Please register on https://console.cloud.google.com/ for an api key to allow the usage of geolocalisation accessible via def extract_lat_long_via_address() and calculate_distance(). This will allow you to see the adverts nearby.

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

Visit http://localhost:5000 in your web browser to access the application.
