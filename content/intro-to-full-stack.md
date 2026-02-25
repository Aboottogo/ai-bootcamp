# Introduction to Dynamic Web Applications

## From Static to Dynamic

A **static website** displays the same content to everyone. The pages are fixed files served to anyone who requests them. There is no memory between visits and no personalization.

A **dynamic web application** stores, retrieves, and responds to data. A to-do list app remembers *your* tasks. A social media feed shows *you* different posts than it shows someone else. An online store knows what's in *your* cart.

The key difference is whether users can modify data. A dynamic web application allows users to create, read, update, and delete data (often abbreviated as CRUD). You can add a new post, edit your profile, remove an item from your cart. The application responds to your actions by changing what's stored. That's what makes it "dynamic."

---


## Architecture: Backend and Frontend

Dynamic web applications are divided into a **backend** and the **frontend**.

A **backend** consists of a **database** for storing persistent information like user accounts, passwords, posts, or anything that needs to survive beyond a single session. Users can create, replace, update, and delete data (CRUD) in the database depending on their permissions. 

- Users never see the backend and don't access the database directly. Instead, they interact with the frontend, which communicates with the database behind the scenes.

A **frontend** consists of everything that runs in the user's browser: buttons, forms, text, images, animations. When someone visits your web app, the frontend code is downloaded to their browser and executes on their device.

- The frontend communicates with the backend through an **API** (Application Programming Interface)—a structured protocol for sending requests and receiving responses. This requires the dynamic web application be hosted on a server that supports APIs.




### System Flow: A Complete Interaction

Consider what happens when you order food through a delivery app:

1. **User opens the app:** The browser downloads the frontend and renders the interface—the restaurant listings, menu items, and buttons.

2. **User logs in:** The frontend sends credentials to the backend via the API. The backend checks the database to verify the email and password match, then returns the user's identity. The frontend now knows who is logged in.

3. **App loads user data:** The frontend requests data from the backend: saved addresses, payment methods, order history. The backend retrieves this from the database and returns it. The frontend applies business logic (e.g., show the default address first) and displays the result.

4. **User browses restaurants and adds items to cart:** The frontend may store cart contents locally, or send each addition to the backend. Either way, the frontend updates the display to show the current cart.

5. **User clicks "Submit Order:** The frontend sends the order details to the backend via the API. The backend saves the order to the database, processes payment, notifies the restaurant, and sends a confirmation back through the API. The frontend displays "Order Confirmed!"

6. **User closes the app:** The session may persist (staying logged in) or end. The order remains in the database—when the user reopens the app, they can see their order history.




## What We Need to (Ask Cursor to) Build

For the **backend** we need a database to store and handle data. Building a secure database system from scratch takes weeks or months—these systems involve security vulnerabilities, scaling, data consistency, and crash recovery. 

* We'll use **InstantDB.com**, a free service that provides a database, authentication, and data synchronization out of the box. Rather than setting up and maintaining your own database, InstantDB handles all of this as a managed service, letting you focus on your app's unique features.

For the **frontend** we'll ask Cursor to build our website with a **framework**-a pre-built set of tools that enable communication with the backend through an API. 

* We'll ask Cursor to build our application **Next.js**, a frontend framework built on React (a popular library for building user interfaces).

Finally, our dynamic app needs a different **hosting solution** to be accessed on the internet. Previously, we hosted our static sites on **GitHub Pages**—but GitHub Pages cannot host the API connections that a dynamic app requires. 

* We'll host our web application on **Vercel.com**. Since Vercel developed Next.js in 2016, their free hosting service is a natural fit. The good news is that all we have to do is give Vercel the link to our GitHub repository, and it handles the rest.


---


### Tools Overview

| Category | Tool | Function |
|----------|------|----------|
| Development Environment | **Cursor** | AI-powered code editor; generates code from natural language descriptions |
| Frontend Framework | **Next.js** | Structure and tooling for building user interfaces; built on React |
| Backend Database | **InstantDB** | Database and authentication as a service |
| Hosting Platform | **Vercel** | Deploys and serves the dynamic web application; integrates with Next.js |
| Code Repository | **GitHub** | Version control and sharing code with the hosting platform |


---


## Key Terms

| Term | Definition |
|------|------------|
| **Static website** | Site showing fixed content to all visitors; users cannot modify data |
| **Dynamic web application** | App that allows users to create, read, update, and delete data; stores data and provides personalized experiences |
| **Backend / Database** | Remote computers that store and manage data |
| **Frontend / Framework** | Pre-built tools for serving webpages to users |
| **API** | Application Programming Interface; protocol for frontend-backend communication |
