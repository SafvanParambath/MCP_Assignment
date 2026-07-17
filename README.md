# MCP Assignment Repository

This repository is used to submit assignments for an MCP project.

## Project Goal

Automate the following user flow on SauceDemo:

- Open `https://www.saucedemo.com/`
- Perform login
- Add one or more items to the cart
- Verify cart update

## Assignment Scope

The automation should cover:

- Valid login flow
- Product selection and add-to-cart action
- Basic validation of cart state (for example, cart badge count)

## Suggested Structure

```text
.
├── tests/
├── scripts/
├── README.md
└── (framework/config files)
```

## Notes

- Use test credentials provided by SauceDemo (for example, `standard_user` / `secret_sauce`) for assignment testing only.
- Keep test code modular and reusable.
- Include clear assertions for each critical step in the flow.

## Run Instructions

Add your framework-specific setup and execution commands here, for example:

```bash
# install dependencies
<your install command>

# run tests
<your test command>
```
