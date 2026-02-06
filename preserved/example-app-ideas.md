# Example App Ideas

These three example app ideas demonstrate how to describe an app for the bootcamp. Each follows the template from the App Idea Guidance and is designed to work within the technical requirements (Next.js, InstantDB, Vercel, no external APIs).

Use these as inspiration for your own idea, or as examples of the level of detail expected.

---

## Example 1: StudySync

# StudySync

## One-Sentence Summary

StudySync helps college students organize and join study sessions for their classes, making it easy to find study partners and coordinate group study time.

## The Problem

It's hard to find people to study with, especially in large lecture classes where you don't know many people. Group chats get messy, and there's no central place to see when and where people are studying. Students often study alone when they'd be more effective studying with others.

## User Types

- **Registered users**: All users have the same capabilities—they can create and join study sessions.

## Core Features

- Create a study session with a class name, topic, location, and time
- Browse upcoming study sessions and filter by class
- Join a study session (RSVP)
- See who else is attending a session
- Cancel your RSVP if plans change

## What Users See

### Screen 1: Home / Upcoming Sessions
A list of upcoming study sessions, showing:
- Class name and topic
- Date, time, and location
- Number of attendees
- A "Join" button

Users can filter by class name or search for specific topics.

### Screen 2: Create Session
A form to create a new study session with fields for:
- Class name (e.g., "ECON 101", "Intro to Marketing")
- Topic (e.g., "Midterm Review", "Chapter 5 Problems")
- Location (e.g., "Library 3rd Floor", "Smith Hall 204")
- Date and time
- Optional notes

### Screen 3: Session Details
Shows full details of a specific session:
- All session information
- List of attendees (names/emails)
- "Join" or "Leave" button depending on RSVP status
- If you created the session, an "Edit" or "Cancel Session" option

### Screen 4: My Sessions
A personal dashboard showing:
- Sessions I've created
- Sessions I've joined
- Past sessions I attended

## Example Scenario

Maya is taking ECON 101 and has a midterm next week. She opens StudySync and sees there's already a study session posted for "ECON 101 - Midterm Review" on Thursday at 6pm in the library. She clicks "Join" and sees that 4 other students are already attending. 

On Wednesday, she realizes she also wants to study for her statistics class, so she creates a new session: "STATS 200 - Hypothesis Testing Practice" for Friday at 2pm in the campus coffee shop. She adds a note: "Bring practice problems from Chapter 7." 

By Friday morning, 3 other students have joined her session. They meet up, work through problems together, and exchange contact info for future study groups.

---

## Example 2: PotluckPal

# PotluckPal

## One-Sentence Summary

PotluckPal helps groups organize potluck dinners by letting guests claim dishes to bring, preventing duplicates and ensuring a balanced meal.

## The Problem

When organizing a potluck, hosts often end up with five desserts and no main dishes because there's no coordination. Group texts get confusing, people forget what they signed up for, and someone always has to manually track everything in a spreadsheet.

## User Types

- **Hosts**: Create potluck events and see the full picture of what's being brought
- **Guests**: Join events and claim dishes to bring

(Note: All registered users can be both hosts and guests—the difference is just their role for a specific event)

## Core Features

- Create a potluck event with a name, date, location, and dish categories
- Generate a shareable link to invite guests
- Claim a dish category and specify what you're bringing
- See what dishes are claimed and what's still needed
- Update your dish if plans change

## What Users See

### Screen 1: My Potlucks
A list showing:
- Potlucks I'm hosting (with links to manage them)
- Potlucks I'm attending (with my claimed dish)
- Option to create a new potluck

### Screen 2: Create Potluck
A form to create a new event:
- Event name (e.g., "Friendsgiving 2024")
- Date and time
- Location
- Dish categories needed (e.g., "Main Dish", "Side Dish", "Dessert", "Drinks", "Appetizer")
- How many of each category you need (e.g., "2 Main Dishes, 3 Sides, 2 Desserts")

### Screen 3: Potluck Details (Host View)
Shows:
- Event information
- A shareable invite link
- All dish categories with who's bringing what
- Unclaimed slots highlighted
- Guest list

### Screen 4: Potluck Details (Guest View)
Shows:
- Event information
- Available dish categories (unclaimed slots)
- A form to claim a slot: select category + describe your dish
- Option to update or remove your claimed dish

## Example Scenario

Priya is hosting Friendsgiving at her apartment. She creates a potluck in PotluckPal called "Friendsgiving 2024" for November 23rd. She sets up categories: 2 main dishes, 3 sides, 2 desserts, and 2 drinks needed. She copies the invite link and texts it to her friend group.

Her friend Marcus clicks the link, signs up, and sees that one main dish slot is still open. He claims it and types "Roasted Turkey Breast" as his dish. 

Over the next week, friends claim slots: Jasmine brings mac and cheese (side), Omar brings pumpkin pie (dessert), and so on. When someone tries to claim a dessert and both slots are full, they see "Dessert is full—consider bringing a side dish!" and choose to bring green beans instead.

The day before the potluck, Priya checks PotluckPal and sees everything is claimed. She screenshots the list and sends it to the group as a reminder. Everyone shows up with their dish, and nothing is duplicated.

---

## Example 3: ChoreChart

# ChoreChart

## One-Sentence Summary

ChoreChart helps roommates fairly divide and track household chores, with a simple rotating schedule so everyone does their share.

## The Problem

Roommate chore drama is real. One person feels like they always clean the bathroom, another "forgets" it's their turn to take out trash, and passive-aggressive texts ensue. There's no shared record of who did what, so arguments become "he said, she said."

## User Types

- **Household members**: All roommates in a household have equal capabilities

## Core Features

- Create a household and invite roommates via email
- Set up recurring chores (e.g., "Clean bathroom - weekly")
- Assign chores to specific people or set them to rotate automatically
- Mark chores as complete
- View chore history to see who did what and when

## What Users See

### Screen 1: My Chores (Dashboard)
Personalized view showing:
- Chores assigned to me for this week
- Checkbox to mark each as done
- Quick stats: "You've completed 3 of 4 chores this week"

### Screen 2: Household View
Overview of all chores for the household:
- Current week's assignments for everyone
- Who has completed their chores (with checkmarks)
- Who still has pending chores

### Screen 3: Manage Chores
For setting up the household:
- Add a new chore (name, frequency, rotation or fixed assignment)
- Edit or remove existing chores
- See the rotation schedule

### Screen 4: History
A log showing:
- All completed chores
- Who completed each
- When it was marked done
- Useful for resolving "I always do the dishes" disputes

### Screen 5: Household Settings
- Invite new roommates (by email)
- See household members
- Leave household

## Example Scenario

Jordan just moved into an apartment with two roommates, Taylor and Sam. Jordan creates a household in ChoreChart called "Apartment 4B" and invites Taylor and Sam by email.

Once everyone joins, Jordan sets up the chores:
- "Take out trash" - weekly, rotates between all three
- "Clean bathroom" - weekly, rotates between all three
- "Vacuum common areas" - weekly, rotates between all three
- "Wipe kitchen counters" - every 3 days, rotates

The app automatically creates a rotation schedule. This week, Jordan has trash, Taylor has bathroom, and Sam has vacuuming. They each see only their assigned chores on their dashboard.

When Jordan takes out the trash on Tuesday, they open ChoreChart and tap the checkbox. The chore shows as complete, and it's logged in history with a timestamp.

At the end of the month, Sam claims "I always clean the bathroom." Taylor pulls up the history, which shows they've all cleaned it exactly 4 times each. No argument, just data.

---

## Key Takeaways from These Examples

1. **Each solves a real problem** that the student has likely experienced
2. **Multiple users interact** with shared data
3. **Core features are limited** to 4-5 essential actions
4. **Screens are concrete** — easy to imagine what each page looks like
5. **The scenario shows the app in action** with specific users and steps
6. **No external APIs needed** — all data is user-generated
7. **No file uploads** — just text data
8. **Authentication is natural** — users need accounts to track their own activity

Use these as models when writing your own app idea!
