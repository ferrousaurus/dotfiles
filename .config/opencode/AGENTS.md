# Tooling

Tool versions are managed by `mise`; invoke installed tools directly.
Use `nub` for JavaScript and TypeScript package management. Do not use `npm` or `pnpm`.
Always write one-off scripts in TypeScript; never write them in Python. Do not create temporary `.js` or `.ts` files merely to execute them; execute them with `nub -e "${SCRIPT}"`.
Use `yq` for inspection of CSV, INI, JSON, TOML, XML, and YAML files.
