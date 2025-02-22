# National Football Championship Management System (GVDQG)

## Introduction

GVDQG is a national football championship management system that automates tournament management processes, including team registration, match scheduling, result recording, information retrieval, and statistical report generation. The project is developed by Group 14 - SE104.N21 as part of the "Introduction to Software Engineering" course at the University of Information Technology, VNU-HCM.

## Key Features
- **Team Management:** Store information about teams, players, and coaches.
- **Match Scheduling:** Automatically arrange matches for group and knockout stages.
- **Result Recording:** Enter and update match results in real-time.
- **Information Retrieval:** Search for teams, players, match schedules, and results.
- **Reports & Statistics:** Generate rankings and compile tournament statistics.
- **Regulation Management:** Modify rules such as maximum player count, point calculation, and penalty card limits.

## Requirements
- **Backend:** Node.js with Express.js
- **Frontend:** HTML, CSS and Javascript (including Boostrap)
- **Database:** MySQL
- **Deployment Model:** Three-tier architecture (Client - Server - Database)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/HoangHai0810/GVDQG.git
cd GVDQG
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the database

- Create a MySQL database and import tables from the `database.sql` file in the `database/` directory.
- Update the `.env` file with your MySQL connection details:

```env
PORT=yourport
NODE_ENV=yourenvironment #such as development
```

### 4. Start the application

```bash
npm start
```

The application will run at `http://localhost:yourport`

## Usage

1. **Log in** as an Admin, Tournament Manager, or Team Manager.
2. **Add new teams** and update player and coach details.
3. **Schedule matches** following system rules.
4. **Update match results** once matches are completed.
5. **Retrieve information** about players, teams, and match schedules.
6. **Export reports** on rankings and tournament statistics.

## Contact
Member: 
- Anh Hoang-Hai - **Email:** hoanghaianh0810@gmail.com
- Thi Nguyen-Chi - **Email:** 21522614@gm.uit.edu.vn
- Duc Bui-Le-Trong - **Email:** 21520725@gm.uit.edu.vn
- Thinh Nguyen-Tien- **Email:** 21521472@gm.uit.edu.vn
- Long Truong-Khanh - **Email:** 21521750@gm.uit.edu.vn

**University of Information Technology, VNU-HCM**
