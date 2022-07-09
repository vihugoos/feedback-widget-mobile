<div id="top"> </div>

<!---- PROJECT LOGO ----> 
<div align="center">

  <h2 align="center"> 
    Feedback Widget - Mobile App Version 
  </h2>
  
  <p align="center">
    A feedback widget to capture feedback from your app's users, developed with Expo and React Native. <br/>
    Explore <a href="https://docs.expo.dev/">Expo</a> or <a href="https://reactnative.dev/docs/getting-started">React Native</a> docs &#187; <br/> <br/>
    <a href="https://github.com/vihugoos/feedback-widget-mobile/issues"> Report Bug </a> &nbsp;•&nbsp;
    <a href="https://github.com/vihugoos/feedback-widget-mobile/issues"> Request Feature </a>
  </p>
</div>


<!---- TABLE OF CONTENTS ----> 
<details>
  <summary> Table of Contents </summary>
  <ol>
    <li>
      <a href="#about-the-project"> About The Project </a>
      <ul>
        <li><a href="#built-with"> Built With </a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started"> Getting Started </a>
      <ul>
        <li><a href="#prerequisites"> Prerequisites </a></li>
        <li><a href="#installation"> Installation </a></li>
      </ul>
    </li>
    <li><a href="#usage"> Usage </a></li>
    <li><a href="#contributing"> Contributing </a></li>
    <li><a href="#license"> License </a></li>
    <li><a href="#contact"> Contact </a></li>
  </ol>
</details>


<!---- THE PROJECT ---->
## About The Project

<img src="https://user-images.githubusercontent.com/44311634/177375857-21021f9f-d608-4c88-8d79-7188796f4fd7.jpg" align="center" alt="Project Home Page">
A widget where you can send feedback to the website administrator about bugs, ideas, etc.


### Built With 

<div style="display: inline_block">
    <!-- Icon Node.js --> 
    <a href="https://nodejs.org/en/docs/"> 
      <img align="center" alt="Icon-Node.js" height="36" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"> 
    </a> &nbsp;
    <!-- Icon TypeScript --> 
    <a href="https://www.typescriptlang.org/docs/"> 
      <img align="center" alt="Icon-TypeScript" height="36" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"> 
    </a> &nbsp;
    <!-- Icon Expo --> 
    <a href="https://docs.expo.dev/"> 
      <img align="center" alt="Icon-Expo" height="36" src="https://user-images.githubusercontent.com/44311634/178088819-374d1241-cef7-4f68-b400-4a33ccec45e2.png"> 
    </a> &nbsp;
    <!-- Icon React -->
    <a href="https://reactjs.org/docs/getting-started.html"> 
      <img align="center" alt="Icon-React" height="36" src="https://user-images.githubusercontent.com/44311634/178088844-02a9c9ba-28b9-4ef6-87f0-d12d52ceaf0b.png"> 
    </a> &nbsp;
    <!-- Icon Axios -->
    <a href="https://axios-http.com/docs/intro"> 
      <img align="center" alt="Icon-Axios" height="55" src="https://user-images.githubusercontent.com/44311634/178089407-0176462e-7e60-4f4f-9ad8-5429a22b2c5c.png"> 
    </a>
</div>

<br/>
<br/>


<!---- GETTING STARTED ----> 
## Getting Started

To get started, you need to have <strong>Node.js 16+</strong> installed on your machine, for more information, visit <a href="https://nodejs.org/en/download/"> Node.js Downloads</a>. 

<strong>WARNING</strong>: Add PostgreSQL executable path to user <strong>environment variables</strong>, to be able to use the `psql` command in the terminal, or create a database called `liber` via graphical user interface using the pgAdmin, it's up to you what you think is best. <strong>Note:</strong> This installation guide is based on Windows systems. 


### Prerequisites

First of all, we need to ensure that the database server is running, to do so, run the following commands in case you haven't created the database manually via pgAdmin, as mentioned above, if you have already created the database `liber`, just run the first command below. 

1. Open cmd terminal as <strong>administrator</strong> (<i>looking at psql version, in this case 14</i>)
   ```cmd
   net start postgresql-x64-14
   ```
2. Connect with psql 
   ```cmd
   psql -U postgres
   ```
3. Create a database 
   ```cmd
   CREATE DATABASE liber;
   ```
4. Quit psql 
   ```cmd
   \q
   ```

### Installation

1. Clone the repo 
   ```bash
   git clone https://github.com/vihugoos/liber.git
   ```
2. Change the settings in `.\liber\settings.py` (don't forget to change the password)
   ```python
    DEBUG = True
   
    DATABASES = {
      'default': {
          'ENGINE': 'django.db.backends.postgresql',
          'NAME': 'liber',
          'USER': 'postgres',
          'PASSWORD': 'yourPasswordRoot',
          'HOST': 'localhost',
          'PORT': '5432'
      }
    }
   ```
3. Inside the project root directory, create a python virtual environment 
   ```cmd
   python -m venv virtual-env
   ```
4. Enable virtual environment in cmd terminal
   ```cmd
   cd virtual-env/Scripts/
   ```
   ```cmd
   Activate
   ```
6. Go back to the root directory with virtual environment enable 
   ```cmd
   cd ..\..\
   ```
7. Install all dependencies 
   ```cmd
   pip install -r requirements.txt
   ```
8. Run the migrations
   ```cmd
   python manage.py migrate
   ```
 

<!---- USAGE EXAMPLES ---->
## Usage

With the installation complete, we can start the project. 

* Starting the project 
   ```cmd
   python manage.py runserver
   ```

<br/>
To enjoy the entire application, create a super user with the following command and follow the terminal instructions, remembering that in the 'plan' option it will be necessary to type <strong>'Basic'</strong>, <strong>'Premium'</strong> or <strong>'Black'</strong> to finish creating the user. You will be able <strong>to track</strong> and <strong>change all requests</strong> in the admin panel accessing <strong>localhost:8000/accounts/admin/</strong> 
<br/> <br/>

* Command to create super user 
   ```cmd
   python manage.py createsuperuser
   ```
<br/>


<!---- CONTRIBUTING ---->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
<br/>


<!---- LICENSE ----> 
## License

Distributed under the CC0 1.0 Universal. See `LICENSE.txt` for more information.
<br/> <br/> 


<!---- CONTACT ---->
## Contact

Developer @vihugoos - victorhugoos@live.com 

<p align="right"><a href="#top"> &#129045; back to top </a></p> 
