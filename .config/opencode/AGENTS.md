# Tooling

Tool versions are managed by `mise`; invoke installed tools directly.
Always write one-off scripts in TypeScript; never write them in Python. Do not create temporary `.js` or `.ts` files merely to execute them; execute them with `nub -e "${SCRIPT}"`.
Use `yq` for inspection of CSV, INI, JSON, TOML, XML, and YAML files.
Do not search, read, or attempt to load files from `~/source` or `~/Source` unless explicitly instructed in the prompt.
