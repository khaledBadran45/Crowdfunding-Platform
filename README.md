
### Crowdfunding Platform Requirements Summary

**Platform Overview**

- Full stack development using HTML, CSS (Bootstrap or Sass), JavaScript (ES6+), and JSON Server.
- Simulate REST API functionality for managing campaigns, pledges, and users.

**Deadline:** 21-05-2025

**Roles and Features Breakdown:**

1. **Admin (40%)**

   - Manage user roles and permissions.
   - Approve/reject campaign creation requests.
   - Moderate campaigns and user activity.
   - View comprehensive data across users, campaigns, and pledges.

2. **Campaigner (35%)**

   - Create and manage campaigns using `fetch()` to JSON Server.
   - Upload campaign images.
   - Update campaign details and communicate updates.
   - Access pledge data associated with campaigns.

3. **Backer (20%)**

   - Register/login as a backer.
   - Browse and filter campaigns.
   - Submit pledges with specified amounts and rewards.

4. **Anonymous User (5%)**

   - Read-only access to approved campaigns.
   - Search campaigns based on categories and keywords.

**Technology Stack:**

- **Frontend:** HTML, Bootstrap/Sass, JavaScript (ES6+).
- **Backend:** JSON Server for simulating REST APIs.
- **Database Schema:** `db.json` with structured data for users, campaigns, and pledges.

**Key Adjustments:**

- Mock payment flow for pledges with confirmation dialog (no real money transactions).

**Inspiration Websites:** Examples include GoFundMe, Kickstarter, and Crowdfunding.com.

This summary encapsulates the essential requirements and features needed to develop the Crowdfunding Platform according to the project specifications.
