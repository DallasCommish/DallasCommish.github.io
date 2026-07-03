---
name: process-al-transactions
description: Process weekly FAAB transactions from CBS Sports email. Use when the user mentions processing AL transactions, FAAB updates, or the Add_Drops email file.
---

# Process AL Transactions

Process the weekly CBS Sports FAAB waiver report email and update ALFAAB.html.

## When to Use

Use this skill when:
- User asks to "process AL transactions"
- User mentions updating FAAB balances
- User references the `Add_Drops in Dallas American League.eml` file

## Prerequisites

- File `Add_Drops in Dallas American League.eml` must exist in the repository root
- Must be on a clean git working state (no uncommitted changes recommended)

## Workflow

### Step 1: Create Branch

Create and checkout a new branch using today's date:
- Format: `ALFAAB-YYYYMMDD` (e.g., `ALFAAB-20260703`)
- **If branch already exists, FAIL with an error** - do not continue

### Step 2: Parse Email Date

Extract the transaction date from the email `Date:` header:
- Location: Line starting with `Date:` (e.g., `Date: Mon, 29 Jun 2026 03:40:39 -0400`)
- Convert to format: `M/DD` (e.g., `6/29`)

### Step 3: Parse Transactions

Extract ADDED transactions from the HTML body. Ignore DROPPED transactions.

Pattern to find:
- Team name: `<div style="font-size: 20px;font-weight: bold;...">TEAM NAME</div>`
- FAAB amount: `ADDED  - Signed For: XX`
- Player name: Inside `<a>` tag following the ADDED line

Expected structure per transaction:
- Team Name
- Player Name
- FAAB Amount (number)

### Step 4: Update ALFAAB.html

For each team with transactions:

1. **Add transaction entries** to the team's `<ul class="nested">` section:
   - Format: `<li>M/DD: $$ for Player Name</li>`
   - Add after the last existing `<li>` for that team

2. **Update FAAB balance** in the balance table:
   - Find the team's row in the table (lines 24-77)
   - Subtract total spent from current balance

### Step 5: Display Summary

Before committing, display a summary:

```
Transaction Date: M/DD

Team               | Player         | Spent | Old Balance | New Balance
-------------------|----------------|-------|-------------|------------
...

Total FAAB spent this week: $$
```

Wait for user confirmation before proceeding.

### Step 6: Commit and Push

1. Stage changes: `git add ALFAAB.html`
2. Commit: `git commit -m "FAAB transactions for M/DD"`
3. Push: `git push -u origin ALFAAB-YYYYMMDD`

## File Locations

- Email file: `./Add_Drops in Dallas American League.eml`
- FAAB page: `./ALFAAB.html`
- Balance table: Lines 24-77 in ALFAAB.html
- Transaction lists: Lines 82-291 in ALFAAB.html (inside `<ul id="myUL">`)

## Team Names Reference

The 12 AL teams (as they appear in ALFAAB.html):
- Banoaster Republic
- David's 5 & Dime
- Flower Children
- Hradek Hrams
- Jak of Diamonds
- Kelly S*M*A*S*H
- Kirk's Enterprise
- Non-Zero Chance
- The Blossoms
- The Patsy Killjoys
- The Shohei Kid
- Wichita TinMen

## Error Conditions

1. **Branch exists**: Fail immediately if `ALFAAB-YYYYMMDD` branch already exists
2. **Email not found**: Fail if `.eml` file is missing
3. **Parse failure**: Report what couldn't be parsed and stop

## Post-Processing

- Leave the `.eml` file in place (do not delete)
- The file is in `.gitignore` so it won't be committed
