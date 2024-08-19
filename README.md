# Crew Management System

## Overview

The Crew Management System is a web application for managing crew members and their certificates. It includes functionalities for viewing, adding, updating, and deleting crew members and certificates. The system is built using Angular and Angular Material for the frontend, with Bootstrap for modal dialogs.

## Features

### Crew List
- **View Crew Members**: Display a list of crew members in a table format.
- **Add Crew**: Open a modal to add a new crew member with a form.
- **Update Crew**: Open a modal to update existing crew member details.
- **View Certificates**: View certificates associated with a crew member in a modal.
- **Delete Crew**: Remove a crew member from the list.
- **Discount Management**: Apply and update discounts directly in the table.

### Certificates List
- **View Certificates**: Display a list of all certificates in a table format.
- **Add Certificate**: Open a modal to add a new certificate.
- **Update Certificate**: (Coming soon) Modal for updating certificate details.

## Components

### Crew Management

#### Crew List Table
- **Columns**:
  - Personal ID
  - First Name
  - Last Name
  - Nationality
  - Title
  - Certificates (with a button to view details)
  - Days On Board
  - Daily Rate
  - Currency
  - Discount
  - Total Income
  - Actions (Edit and Delete buttons)

- **Modals**:
  - **Add Crew Modal**: Form to add a new crew member.
  - **Update Crew Modal**: Form to update an existing crew member.
  - **Certificate Modal**: View certificates associated with a crew member.

#### Add Crew Form
- **Fields**:
  - First Name
  - Last Name
  - Certificates (checkboxes for multiple options)
  - Nationality (dropdown)
  - Title (dropdown)
  - Days On Board
  - Currency (dropdown)
  - Daily Rate

#### Update Crew Form
- **Fields**:
  - First Name
  - Last Name
  - Nationality (dropdown)
  - Title (dropdown)
  - Days On Board
  - Currency (dropdown)
  - Daily Rate

### Certificates Management

#### Certificates List Table
- **Columns**:
  - Certificate ID
  - Certificate Name
  - Description

- **Modals**:
  - **Add Certificate Modal**: Form to add a new certificate.

#### Add Certificate Form
- **Fields**:
  - Certificate Name
  - Description

## Usage

- **View Crew Members**: Navigate to the Crew List section to see all crew members. Use the "Add Crew" button to open the form modal for adding new members. Use the "Edit" button to update details and the "Delete" button to remove members.
- **View and Manage Certificates**: Access the Certificates List to view all certificates. Use the "Add Certificate" button to open the form modal for adding new certificates.
- **Discounts**: Apply discounts in the Crew List table to calculate and update total income directly.
- **Backend Simulation**: For backend simulation with `json-server`, use the following command:

    ```bash
    nodemon --exec "json-server --watch db.json"
    ```

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repo/crew-management-system.git
    ```

2. Navigate to the project directory:

    ```bash
    cd crew-management-system
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

## Dependencies

- Angular 16+
- Angular Material
- Bootstrap
- Font Awesome

## Contributing

Feel free to contribute to the project by creating issues, submitting pull requests, or suggesting improvements. For any questions or issues, please contact the project maintainers.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
