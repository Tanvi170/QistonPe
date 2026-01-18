

````markdown
# MSME Vendor Payment Tracking System - Backend

This project is a backend API system for **MSMEs to manage vendor payments, purchase orders, and outstanding balances**. Built using **NestJS** and **MySQL**, the system provides RESTful endpoints for vendors, purchase orders, payments, and analytics.

---

## Setup Instructions

### Prerequisites
- Node.js >= 18.x  
- npm or yarn  
- MySQL database  
- Git  

### Installation Steps
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>
````

2. Install dependencies:

   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and update database credentials:

   ```bash
   cp .env.example .env
   ```
4. Run database migrations:

   ```bash
   npm run typeorm:migration:run
   ```
5. Seed the database with sample data:

   ```bash
   npm run seed
   ```
6. Start the application:

   ```bash
   npm run start:dev
   ```

---

## Database Schema

The system has **three main tables**:

* **vendors** – Stores vendor information and payment terms.
* **purchase_orders** – Stores POs with status, linked to vendors.
* **payments** – Records payments against POs.

Relationships are set using proper foreign keys, ensuring data integrity between vendors, purchase orders, and payments.

---

## Implemented Features

### MUST-HAVE Features

* CRUD APIs for vendors, purchase orders, and payments
* PO number auto-generation and due date calculation
* PO status auto-updates based on payments
* Vendor outstanding balance analytics endpoint
* Validation, error handling, and business rules enforcement

### NICE-TO-HAVE Features

* Soft delete for payments
* JWT authentication for API protection
* Pagination and filtering on list endpoints

---

## Key Design Decisions

* Used **NestJS modules, controllers, and services** for clean architecture
* PO status auto-updates and due date calculation implemented in service layer
* MySQL chosen for relational integrity and ease of deployment
* Focused on core business logic; authentication is simple with a hardcoded user

---

## API Endpoints

### Vendors

* `POST /vendors` – Create a vendor
* `GET /vendors` – List all vendors
* `GET /vendors/:id` – Vendor details with payment summary
* `PUT /vendors/:id` – Update vendor

### Purchase Orders

* `POST /purchase-orders` – Create a PO
* `GET /purchase-orders` – List all POs
* `GET /purchase-orders/:id` – PO details with payment history
* `PATCH /purchase-orders/:id/status` – Update PO status

### Payments

* `POST /payments` – Record a payment
* `GET /payments` – List all payments
* `GET /payments/:id` – Payment details

### Analytics

* `GET /analytics/vendor-outstanding` – Outstanding balance by vendor

---

## Testing the API

**Sample Flow: Vendor → PO → Payments**

1. Create a vendor via `POST /vendors`.
2. Create a PO for the vendor via `POST /purchase-orders`.
3. Record a partial payment via `POST /payments` → PO status updates to **Partially Paid**.
4. Record another payment to complete the PO → PO status updates to **Fully Paid**.
5. Attempting payment exceeding PO amount → API returns proper error.
6. Query analytics endpoint → Returns correct outstanding balances.

---

## Time Breakdown

* Database design: 6 hours
* API development: 10 hours
* Testing & debugging: 5 hours
* **Total:** 21 hours

---

**Deployment:**

* API hosted on **Render**
* Database hosted on **Clever Cloud**
* Tested with **Postman**

```
