# Custom Vehicle CLI Management System

## Description
This command-line application allows users to create and manage vehicles (Cars, Trucks, and Motorbikes). Users can create new vehicles, select existing ones, and perform actions like starting, stopping, accelerating, etc.

## User Story
**As a user**, I want to:
- Create a new vehicle or select an existing vehicle.
- Choose the type (Car, Truck, Motorbike) when creating a vehicle.
- Enter information like make, model, year, weight, and top speed.
- Perform actions such as start, stop, accelerate, and more on a selected vehicle.

## Features
- Create new vehicles (Car, Truck, Motorbike).
- Select and perform actions on an existing vehicle.
- View vehicle details via the CLI.
- Dynamic VIN generation for each vehicle.

## Acceptance Criteria
- When prompted, the user can choose to create a new vehicle or interact with an existing one.
- Users can select the vehicle type when creating a new vehicle.
- Once a vehicle is selected or created, users can perform numerous different actions such as (start, stop, accelerate, etc.).
- The result of the action is displayed in the CLI.

## Installation Instructions
1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd <project-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

## Usage Instructions
- Upon starting the application, users can choose to create a new vehicle or select an existing one.
- Users will be prompted to provide vehicle information for new vehicles or select a vehicle from a list of existing ones.
- After selecting a vehicle, users can perform actions such as:
  - **Print Details**: Displays vehicle details.
  - **Start**: Starts the vehicle.
  - **Accelerate**: Accelerates the vehicle by 5 MPH.
  - **Decelerate**: Slows down the vehicle by 5 MPH.
  - **Stop**: Stops the vehicle.

## Walkthrough Video
[Link to Walkthrough Video](#)

## Technical Requirements
- Uses the `inquirer` package for prompting user input.
- Vehicle types include Car, Truck, and Motorbike, each with unique attributes.
- Truck and Motorbike have unique methods that differ from Car.

## Repository Quality
- Follows best practices for naming conventions and structure.
- Includes a high-quality README with a description and walkthrough video link.
- Adheres to best commit practices with clear, descriptive messages.

## License
This project is licensed under the MIT License.

---
