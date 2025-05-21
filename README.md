# KoinX Tax Loss Harvesting React Application

This is a React-based application to demonstrate tax loss harvesting concepts using sample capital gains and holdings data. The app allows users to view pre-harvesting and post-harvesting capital gains, select holdings to harvest losses, and see estimated savings.

---

## Features

- View Pre-Harvesting capital gains summary (short-term and long-term profits & losses)
- Select holdings to harvest losses
- Dynamic Post-Harvesting summary update based on selected holdings
- Holdings table with sortable columns, checkboxes, and "View More/Less" functionality
- Styled with styled-components for clean UI matching the Figma design

---

## Setup Instructions

### Prerequisites

- Node.js (v14 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
git clone https://github.com/saideepsai/koinx-tax-loss-harvesting.git
cd koinx-tax-loss-harvesting

2. Install dependencies:
Using npm:
npm install

3.Start the development server:
npm start

This will open the app at http://localhost:3000 in your browser.


Usage :

View the Pre-Harvesting card to see your initial capital gains.

Select holdings from the Holdings Table to harvest losses.

Watch the After Harvesting card update dynamically.

Use the checkbox at the top to select/deselect all holdings.

Click "View More" to see all holdings.


Screenshots :
![Screenshot 2025-05-22 022207](https://github.com/user-attachments/assets/f4274e03-8e58-474e-9c50-8d4807fca414)
![Screenshot 2025-05-22 022228](https://github.com/user-attachments/assets/12359901-8cc2-4aad-bed8-26aabf045668)

Folder Structure :
/public
  capital-gains-api.json
  holdings-api.json
/src
  /components
    Header
    TitleSection
    Disclaimer
    PreHarvestingCard
    AfterHarvestingCard
    HoldingsTable
  /styles
  App.js
  index.js

Contact : 
For questions or feedback, please contact:

Sai Deep
Email: saideepduggishetty@gmail.com

GitHub: https://github.com/saideepsai

Thank you for using this app!
Happy harvesting! 🌿💰


