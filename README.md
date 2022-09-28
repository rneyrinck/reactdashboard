# React Dashboard

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="./src/data/shoppyDashboardScreenGrab.jpg" alt="Shoppy Logo" width="180" height="180">
  </a>

  <h3 align="center">Shoppy Dashboard</h3>

  <p align="center">
    React App showcasing SyncFusions components library created following a JS Mastery tutorial.
    <br />
    <a href="https://rneyrinck.github.io/reactdashboard/" target="_blank"><strong>Link to the Deployed Site »</strong></a>
    <br />
    <br />
    <a href="https://www.youtube.com/c/JavaScriptMastery" target="_blank">JS Mastery</a>
    ·
    <a href="https://www.syncfusion.com/?utm_source=youtube&utm_medium=video&utm_campaign=syncfusion_javascriptmastery_yt" target="_blank">SyncFusion</a>
    ·
    <a href="https://rneyrinck.github.io/Portfolio-2022/" target="_blank">My Portfolio</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#react-architecture">React Architecture</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Dashboard application designed to showcase often-used functionalities wtihin dashboards, explore different tools for styling in React, and showcase to employers my ability to work on large scale, complex applications that are mobile friendly.

Whats cool about it:

- SyncFusion is awesome! Creating Kanban boards, drag and drop calendars, or complex data visualization usually takes forever, but SyncFusion let me utilize their cleverly built UI components to make show stopping components in a matter of moments instead of days.
- Most companies use some sort of internal tool with a dashboard functionality. This project allowed me to gain experience in quickly reaching MVP on a large scale projects.
- The dashboard is only front-end at the moment but its clean code will make adding a backend simple.

Thanks for taking a look at the readme, if you have any questions please feel free to reach out through my portfolio!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This project was built using base code provided by JS Mastery - mainly placeholder content since there isn't a backend yet. SyncFusion is used as a component library with Material UI for styling.

- React.js
- SyncFusion
- Material UI

### REACT ARCHITECTURE

| Component           |                                  Description                                   |
| ------------------- | :----------------------------------------------------------------------------: |
| ----- src -------   | :----------------------------------------------------------------------------: |
| App                 |                     This will render the react components                      |
| components          |       Houses all components in application for streamlined architecture        |
| data and contexts   | Holds often called snippets such as the API call, images, and placeholder URLS |
| Pages               |                             Holds page structures                              |
| -- components ---   | :----------------------------------------------------------------------------: |
| components/charts   |     Folder containing charts that are only called inside other components      |
| charts/LineChart    |           SyncFusion linechart component rendered in eccomerce page            |
| charts/Pie          |        SyncFusion pie chart component rendered in pages/charts/pie page        |
| charts/SparkLine    |          SyncFusion chart component rendered in pages/charts/pie page          |
| charts/Stacked      |             SyncFusion chart component rendered in eccomerce page              |
| Button              |                           Reusable button component                            |
| Cart                |             Cart dropdown menu called in the navbar (Display Only)             |
| ChartsHeader        |                 Reusable header for all charts in pages folder                 |
| Chat                |             Chat dropdown menu called in the navbar (Display Only)             |
| Footer              |          Simple footer component called below browserrouter in App.js          |
| Header              |              Reusable header used on all pages except chart pages              |
| Index.jsx           |      holds shorthand of all files in components folder for quick exports       |
| NavBar              |   logo link to eccomerce, renders chat, userprofile, cart, and notification    |
| Notification        |    Notification dropdown, displays quickview of new activity (Display Only)    |
| SideBar             |       Displays navigation menu as quarter overlay on left side of screen       |
| ThemeSettings       |      Displays settings menu to change theme to dark/light mode and color       |
| UserProfile         |         UserProfile dropdown menu called in the navbar (Display Only)          |
| ---- pages -----    | :----------------------------------------------------------------------------: |
| pages/charts        |           Folder containing charts that make up the body of one page           |
| charts/Area         |           SyncFusion Area chart component inflation rate percentage            |
| charts/Bar          |          SyncFusion bar graph component displays Olympic medal counts          |
| charts/ColorMapping |         SyncFusion line chart component rendered in as a heat average          |
| charts/Financial    |            SyncFusion data plot component rendered as stock ticker             |
| charts/Line         |               SyncFusion line graph component for inflation rate               |
| charts/Pie          |             SyncFusion bar graph component project cost breakdown              |
| charts/Pyramid      |             SyncFusion bar graph component Food calorie breakdown              |
| charts/Stacked      |   SyncFusion bar graph component revenue breakdown(also called in ecommerce)   |
| Calendar            |            Fully editable calendar with drag-and-drop functionality            |
| ColorPicker         |      Two color swatches when a color is selected it changes color of pen       |
| Customers           |        Sortable, editable(with delete or change) table of customer info        |
| Ecommerce           |        Main dashboard page, displays quickreference info to most tables        |
| Editor              |                            Fully usable text editor                            |
| Employees           |  Searchable, sortable, editable(with delete or change) table of employee info  |
| Index.jsx           |         holds shorthand of all files in pages folder for quick exports         |
| Kanban              | Jira clone kanban board. drag and drop (lacks addition or deletion as of now)  |
| Orders              |         Sortable, editable(with delete or change) table of orders info         |

### Navigation

| **URL**             | **HTTP Verb** | **Action** | **Description**               |
| ------------------- | ------------- | ---------- | ----------------------------- |
| /                   | GET           | read       | view dashboard                |
| /ecommerce          | GET           | read       | view dashboard                |
| /_file name_        | GET           | read       | view file in question         |


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Robert Neyrinck - [LinkedIn](https://www.linkedin.com/in/robert-neyrinck/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [JS Mastery Github Repo](https://github.com/adrianhajdin/project_syncfusion_dashboard/blob/main/src/pages/Charts/Stacked.jsx)
- [JS Mastery Youtube Tutorial](https://www.youtube.com/watch?v=jx5hdo50a2M)
- [SyncFusion Docs](https://ej2.syncfusion.com/documentation/grid/getting-started/)
- [Material UI](https://mui.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
