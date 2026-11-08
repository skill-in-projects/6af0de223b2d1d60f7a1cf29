# Job Planner: project notes

## What the app is for
A planner for a small trade business. Office staff and crew leads see today's jobs, add new jobs and move each job through its status (Planned, In progress, Done).

## Main screens
- Home (/): greeting, counts for today, this week and finished jobs, and today's job list.
- Jobs (/#/jobs): add a job form and the full job list. Pressing a job's status moves it to the next status.
- Flying bear (/#/bear): an animated drawing of a brown bear with flapping wings. Added on the user's request.

## API endpoints
None yet. Data comes from sample data in src/data.js.

## Trial behaviour (not saved yet)
- Jobs screen: adding a job and changing a status live only in page state and are lost on reload. Shows "Not saved yet: upgrade to keep your changes". Switch to real saving after the upgrade.

## Decisions
- Start with sample data and two screens; the user will choose what to add next.
