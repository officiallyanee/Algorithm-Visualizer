
# **Algorithm Visualizer**
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&pause=1000&color=F70000&width=435&lines=Welcome+to+Algorithm+Visualizer!;Let's+explore+algorithms+together!" alt="Typing SVG">
</p>

---
<p align="center">
  <img src="https://img.shields.io/badge/Built%20with-Love-red?style=for-the-badge&logo=heart">
  <img src="https://img.shields.io/badge/Powered%20by-JavaScript-yellow?style=for-the-badge&logo=javascript">
  <img src="https://img.shields.io/github/repo-size/officiallyanee/algorithm-visualizer?style=for-the-badge" alt="Repo Size">
  <img src="https://img.shields.io/github/last-commit/officiallyanee/algorithm-visualizer?style=for-the-badge" alt="Last Commit">
</p>

---

<p align="center">
  <img src="https://raw.githubusercontent.com/officiallyanee/algorithm-visualizer/main/assets/demo.gif" alt="Algorithm Visualizer Demo" style="border-radius: 10px;">
</p>

---

## **Introduction**
Algorithm Visualizer is an interactive online platform designed to help users understand and visualize various algorithms in action. It provides clear and engaging animations for complex algorithms, enabling learners, programmers, and computer science enthusiasts to explore and analyze algorithms step by step. Topics covered include sorting, searching, graph traversal, and more.

---

## **Table of Contents**

- [Introduction](#introduction)
- [Project Objective](#project-objective)
- [Key Features](#key-features)
- [Target Users](#target-users)
- [Tech Stack](#tech-stack)
- [Project Workflow](#project-workflow)
- [Development Goals](#development-goals)
- [Impact](#impact)
- [Installation](#installation)
- [Usage](#usage)
- [Demo Photos and Videos](#demo-photos-and-videos)
- [Contributions](#contributions)
- [License](#license)
  

---

## **Project Objective**
The primary goal of Algorithm Visualizer is to simplify the understanding of algorithms through:
- ***Visual Representations***: Step-by-step animations for clarity.
- ***Interactive Tools***: User-defined inputs for dynamic exploration.
- ***Collaboration and Community***: Engage with peers and experts to deepen your understanding.

---

## **Key Features**

### **1. Interactive Algorithm Visualizations**
- Real-time animations for algorithms, including:
  - Bubble Sort
  - Selection Sort
  - Quick Sort
- Customizable options for user-defined inputs.

### **2. User-Centric Design**
- *Login System*: Powered by Node.js.
- *Feedback Section*: Submit suggestions and view past feedback.
- *Community Section*: Post questions, discuss algorithms, and interact with peers.

### **3. Beginner-Friendly Resources**
- FAQs and resources tailored for newcomers.

### **4. Real-Time Updates**
- Live chat using Socket.IO/WebSocket.

### **5. Responsive UI**
- Styled with HTML, CSS, and ReactJS for a seamless experience.

---

## **Target Users**

### **1. Students**
- Visual demonstrations to complement theoretical knowledge.

### **2. Educators**
- Teaching aid to demonstrate step-by-step algorithm processes.

### **3. Competitive Programmers**
- Compare and visualize algorithms for refining problem-solving strategies.

---

## **Tech Stack**

### **Frontend**
- *HTML*: Structure for interactive elements.
- *CSS*: Styling and responsiveness. [Learn More](https://developer.mozilla.org/en-US/docs/Web/CSS)
- *JavaScript & ReactJS*: Animations and dynamic content rendering. [Learn More](https://reactjs.org/)
- *ReactDOM*: For efficient updates and rendering.

### **Backend**
- *Node.js & Express*: Backend operations, including API endpoints and authentication. [Learn More](https://expressjs.com/)
- *bcrypt*: Password security. [Learn More](https://www.npmjs.com/package/bcrypt)
- *Socket.IO/WebSocket*: Real-time updates and communication. [Learn More](https://socket.io/)

### **Database**
- *MySQL*: Manage user data, feedback, and discussions. [Learn More](https://dev.mysql.com/doc/)

---

## **Project Workflow**

1. **Login Page**: Authenticate users for secure access.
2. **Algorithms Section**: Explore interactive algorithm visualizations.
3. **Feedback Section**: Submit and review platform suggestions.
4. **Community Section**: Engage in discussions and receive live updates.

---

## **Development Goals**

### **Primary Goals**
- Secure login system.
- Interactive feedback and community sections.
- Core algorithm visualizations with user input.
- Responsive and seamless user experience.

### **Secondary Goals**
- Extend algorithm library.
- Advanced features like real-time notifications.
- Deploy on platforms like Netlify.
- Comprehensive documentation.

---

## **Impact**
Algorithm Visualizer fosters a collaborative learning environment by offering a deeper understanding of algorithms. Its engaging design and robust features make it accessible to users at all levels, empowering learners, educators, and developers alike.

---

## **Installation**

### **Prerequisites**
Ensure the following are installed:

- **Node.js (v16 or higher)**: [Download Here](https://nodejs.org)
- **MySQL (v8 or higher)**: [Download Here](https://www.mysql.com/)
- **Git**: [Download Here](https://git-scm.com/)
- **VS Code**: [Download Here](https://code.visualstudio.com/)

### **Steps**

1. **Clone the repository**:
```bash
  git clone https://github.com/officiallyanee/algorithm-visualizer.git
  
  cd algorithm-visualizer
  ```


2. **Install dependencies for Frontend**:
```bash
  cd frontend/main
```

```bash
  npm i
```

3. **Install dependencies for Backend**:
```bash
  cd server
```

```bash
  npm i
```

4. **Set up MySQL database**:
   - Create a database: **mysql**.
   - Import the SQL schema from **/db/schema.sql**.
   - Update database credentials in **config.js**.

5. **Start the server**:
For *BackEnd*:
```bash
   npm start
```
For *FrontEnd*:
```bash
  npm run dev
```

6. **Access the app**:

- Open http://localhost:5173 in your browser for the frontend.
- Open https://localhost:8081 in your browser for the backend.
Run them simultaneuosly for the output to be shown.

---

## **Usage**

### **Example: Creating an API with Express**
Simplifies routing and middleware:
```javascript
const express = require('express');
const app = express();

app.post('/api/login', (req, res) => {
  // Process login data
  res.send('Login successful!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

### **Querying MySQL**
Manage user credentials, feedback, and discussions:
```javascript
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'algorithm_visualizer',
});

connection.query('SELECT * FROM users', (err, results) => {
  if (err) throw err;
  console.log(results);
});
```

### **Visualizing Bubble Sort**
Update the DOM to show array state changes during sorting:
```javascript
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap and update visualization
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        updateVisualization(array);
      }
    }
  }
}
```

## **Demo Photos and Videos**

### **Video Link**
https://drive.google.com/file/d/1gbSMNuX7TQWNJU2ni_YBN1dIxEmG5nKn/view?usp=drive_link

### **Image**
Dark Mode
![HomePageDark](https://github.com/user-attachments/assets/635ca29d-11e9-4a09-8dce-bf7f8a0bf057)

---

## **Contributions**

We welcome contributions! Feel free to:
- Submit a pull request.
- Open issues for bugs or suggestions.

### **Contact**
<p align="center">
  <a href="mailto:anee_j@ma.iitr.ac.in"><img src="https://img.shields.io/badge/Email-anee_j@ma.iitr.ac.in-red?style=for-the-badge&logo=gmail"></a>
  <a href="https://github.com/officiallyanee"><img src="https://img.shields.io/badge/GitHub-@officiallyanee-blue?style=for-the-badge&logo=github"></a>
</p>

---

## **License**
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

```text
MIT License

Copyright (c) 2025 Anee Jain

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

---

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Roboto+Mono&color=%2376C7C0&size=20&lines=Empowering+Algorithm+Exploration;Building+Community+One+Step+at+a+Time;Continuing+From+Line+271" alt="Typing SVG">
</p>

---

## **Additional Features**

### **Algorithm Comparison Mode**
- Compare the performance of two algorithms side by side in real-time.
- Displays key metrics like time complexity and memory usage with animated graphs.

### **Interactive Learning Challenges**
- Solve algorithm puzzles designed to test your knowledge.
- Earn badges for completing challenges and mastering specific algorithms.

### **Dark Mode Support**
- Toggle between light and dark themes for a comfortable learning experience at any time of the day.

---

## **New Animations and Visual Elements**

### **1. Sorting Algorithm Animations**
Each sorting step is visualized with unique color-coded bars:
```javascript
function visualizeSorting(array) {
  array.forEach((value, index) => {
    setTimeout(() => {
      const bar = document.querySelector(`#bar-${index}`);
      bar.style.height = `${value}px`;
      bar.style.backgroundColor = 'cyan';
      setTimeout(() => (bar.style.backgroundColor = 'blue'), 300);
    }, index * 500);
  });
}
```

### **2. Graph Algorithm Animations**
Highlight visited nodes during DFS and BFS traversals:
```javascript
function highlightNode(nodeId) {
  const node = document.getElementById(nodeId);
  node.style.backgroundColor = 'yellow';
  setTimeout(() => (node.style.backgroundColor = 'green'), 500);
}
```



---

## **Upcoming Features**

### **1. Dynamic Algorithm Visualizer API**
- Expose an API endpoint to allow third-party integrations.
- Enable developers to embed algorithm visualizations into their own applications.

### **2. Mobile Application**
- Extend the platform to iOS and Android devices using React Native.

### **3. AI-Powered Algorithm Recommendations**
- Suggest algorithms based on user activity and learning history.

---

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Roboto+Mono&color=%23FF5733&size=20&lines=Stay+Tuned+for+More+Updates!;Your+Feedback+Matters!;Let%27s+Visualize+Together!" alt="Typing SVG">
</p>
