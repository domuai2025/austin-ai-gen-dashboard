
# AI Agent Dashboard

## Overview

The AI Agent Dashboard is a Next.js application that provides a user interface for managing AI agents, tracking leads, and monitoring performance metrics. It uses Supabase for authentication and data storage.

## Technologies Used

- Next.js 13 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Supabase (for authentication and database)
- Recharts (for data visualization)

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Supabase account and project

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-username/ai-agent-dashboard.git
   cd ai-agent-dashboard
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Supabase Setup

The project uses Supabase for authentication and data storage. You'll need to set up the following tables in your Supabase database:

1. `user_data`: Stores user-specific information
2. `agent_statuses`: Stores the status of AI agents for each user
3. `chart_data`: Stores the weekly performance data for each user

Here's the SQL to create these tables:

```sql
-- Create user_data table
CREATE TABLE user_data (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  name TEXT,
  email TEXT,
  total_leads INTEGER,
  new_messages INTEGER,
  appointments INTEGER,
  conversion_rate DECIMAL
);

-- Create agent_statuses table
CREATE TABLE agent_statuses (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  name TEXT,
  status TEXT
);

-- Create chart_data table
CREATE TABLE chart_data (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  name TEXT,
  leads INTEGER,
  appointments INTEGER
);
```

## Backend Development 

1. Set up the Supabase project and create the necessary tables.
2. Implement server-side functions or API routes to handle data operations (CRUD) for each table.
3. Set up authentication rules and row-level security (RLS) policies in Supabase to ensure data privacy.
4. Create database triggers or functions to automatically populate user data upon registration.
5. Implement any necessary backend logic for AI agent management, lead tracking, and performance calculations.

## Project Structure

- `/app`: Contains the Next.js 13 App Router pages and layouts
- `/components`: React components used throughout the application
- `/contexts`: React context for global state management (e.g., AuthContext)
- `/lib`: Utility functions and Supabase client initialization
- `/public`: Static assets

Key files for backend integration:

- `/lib/supabase.ts`: Supabase client initialization
- `/lib/database.ts`: Functions for interacting with Supabase database
- `/contexts/auth-context.tsx`: Handles user authentication state

## API Routes

Implement the following API routes for data operations:

- `GET /api/user-data`: Fetch user-specific data
- `POST /api/user-data`: Update user data
- `GET /api/agent-statuses`: Fetch AI agent statuses for a user
- `POST /api/agent-statuses`: Update AI agent status
- `GET /api/chart-data`: Fetch performance chart data for a user
- `POST /api/chart-data`: Update performance chart data

## Security Considerations

- Implement proper authentication checks in all API routes.
- Use Supabase Row Level Security (RLS) policies to ensure users can only access their own data.
- Sanitize and validate all input data before storing in the database.
- Use environment variables for storing sensitive information (e.g., API keys).

## Testing

- Implement unit tests for utility functions and API routes.
- Set up integration tests for database operations.
- Create end-to-end tests for critical user flows.

## Deployment

The frontend is deployed on Vercel. For the backend:

1. Ensure all Supabase tables and functions are set up in your production Supabase project.
2. Update environment variables in your Vercel project settings.
3. Set up proper CORS settings in Supabase to allow requests from your deployed frontend.

## License

[MIT License](LICENSE)
