# Project-4# Full Stack Project

> The Project Planning section **should be completed** for your project pitch with instructors.
> To ensure correct Markdown, I recommend cloning this wiki and copy/pasting the raw template code.

## Overview

**Project Title** Keep Fitness


## MVP

> Have regiments linked to exercises and full CRUD in both.


#### Wireframes



![Page1](https://i.imgur.com/MhJyKg8.png)

![Page2](https://i.imgur.com/jiGV17x.png)


#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

``` structure

src
|__ components/
      |__ header
      |__ users
      |__ fitness
      |__ comments
      |__ nav
      |__ footer
|__ services/
      |__ api-helper

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   y   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   y   |   y   | _The navigation will provide a link to each of the pages._       |
|   fitness    | functional |   y   |   y   | _The contains each fitness post                                  |
|  comments    | functional |   y   |   y   | _The comment for each user on the fitness app                    |
|  api-helper  | na         |   n   |   n   | _The gallery will render the posts using cards in flexbox._      |
|  users       | functional |   y   |   y   | _being able to change the user profile and information           |
|    Footer    | functional |   y   |   y   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Header              |    L     |     1 hrs      |     0 hrs     |    0 hrs    |
| Nav                 |    M     |     2 hrs      |     0 hrs     |    0 hrs    |
| Fitness             |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| Comments            |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| Users               |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| footer              |    H     |     1 hrs      |     0 hrs     |    0 hrs    |
| Users               |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| css                 |    H     |    10 hrs      |     0 hrs     |    0 hrs    |
| TOTAL               |          |    26 hrs      |     ?         |     ?       |


<br>

### MVP Server (Back End)

#### ERD Model

![ERD](https://i.imgur.com/ajR3N0C.png)

#### Data Heirarchy

> Use this section to display the database, table, and attribute heirarchy.

``` structure

database_db
|__ users/
|__ comments/
|__ fitness/

```

<br>


## Post-MVP
> being able to link users to fitness and the fitness back to users

***

## Project Delivery



## Code Showcase


## Code Issues & Resolutions


***

