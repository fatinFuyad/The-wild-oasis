# The Wild Oasis

A full-featured booking management platform designed for hospitality
businesses. It centralizes operations for cabins, reservations, guest
records, availability, and revenue insights.

## Overview

The Wild Oasis provides an end-to-end workflow for managing cabin
inventory and guest bookings. It is built to support reception, admin,
and operations teams with real-time data, streamlined processes, and
structured interfaces.

The application focuses on five core areas: 1. Cabin inventory
management 2. Booking lifecycle management 3. Guest information and
verification 4. Operational analytics (occupancy, revenue, stay
durations) 5. User authentication and role-based access

## Key Features

### Cabin Management

- Create, update, and archive cabin listings
- Set base prices, discounts, and max occupancy
- Upload cabin images and manage assets

### Booking Management

- Create new bookings manually or edit existing ones
- Check availability instantly
- Update booking status (unconfirmed, confirmed, checked-in,
  checked-out)
- Automatic price calculations and totals (base price, extras, taxes)
- Cancel bookings with audit logs

### Guest Management

- Store guest details (name, email, phone, nationality)
- Track past stays and booking history
- Validate national IDs or passports (depending on configuration)

### Dashboard & Analytics

- Daily, weekly, and monthly occupancy metrics
- Revenue summaries
- Pending check-ins and check-outs
- Performance insights filtered by time range

### Authentication & Security

- Secure login system
- Role-based permissions for staff
- Server-side validation and protected API routes
- Session persistence

### Settings & Configuration

- Global application settings (min/max guest booking, breakfast price)
- User profile and password updates

## Tech Stack

### Frontend

- React (functional components, hooks)
- React Router
- React Query / TanStack Query
- Styled Components
- Context API for global state

### Backend / Services

- Supabase (PostgreSQL + Auth + Storage)
- RLS policies for strict data access control
- Supabase Edge Functions (optional)

### Dev Tools

- Vite For Creating React App
- ESLint & Prettier
- Node.js
- GitHub Actions (optional)

## Installation & Setup

### 1. Clone the Repository

    git clone https://github.com/fatinFuyad/The-wild-oasis.git

### 2. Install Dependencies

    npm install

### 3. Environment Variables

Create a `.env` file:

    VITE_SUPABASE_URL=<your-supabase-url>
    VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>

### 4. Start Development Server

    npm run dev

## Deployment

Deploy to: - Netlify - Vercel - Supabase Hosting

## Database & Supabase Notes

- Tables: cabins, bookings, guests, settings, users
- RLS must be configured
- Storage buckets for cabin images
- Auth policies for read/write access

## Contributing

Open PRs or issues for major changes.

## License

Add your organization's licensing here.
