# Sprint 0 Setup Guide

This document provides setup instructions for Sprint 0 of the Seedhaload Backend project.

## Prerequisites

- Node.js 18+ or Deno
- Supabase CLI
- Git

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/seedhaloadproject/seedhaload-backend.git
cd seedhaload-backend
```

### 2. Install Dependencies
```bash
npm install
# or
deno cache --reload
```

### 3. Environment Setup
Create a `.env` file in the root directory with your Supabase credentials:
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 4. Database Setup
```bash
supabase start
```

### 5. Run Migrations
```bash
supabase db pull
```

## Project Structure

- **docs/**: Documentation including architecture decisions
- **supabase/**: Supabase-specific configurations
  - `functions/`: Edge functions
  - `migrations/`: Database migration scripts
  - `seed/`: Database seed files
- **scripts/**: Utility scripts
- **tests/**: Test suite

## Next Steps

Refer to `docs/decisions/` for architectural decisions and `docs/sprint-0/` for Sprint 0 specific information.

## Support

For issues or questions, refer to the main README.md file.
