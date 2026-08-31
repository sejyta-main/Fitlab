# FitLab

Single-file exercise coach and workout logger. Sister app to FuelLog.

## Deploy (GitHub Pages, same as FuelLog)
1. Create a repo (e.g. `fitlab`), add `index.html` and `sw.js` to the root.
2. Settings → Pages → Deploy from branch `main` / root.
3. Open the Pages URL on your phone → Share → Add to Home Screen.

`sw.js` is optional but recommended: it makes the app open offline and caches the exercise images you have viewed.

## What is inside
- **Today** – week strip, next session in the cycle, Start / Skip.
- **Gym Mode** – one exercise per screen, ± steppers, auto-fill from last session, progression suggestion, rest timer (vibration + notification), swap when a machine is busy, pain check, wake-lock.
- **Library** – 40+ exercises with coach cards: three cues, watch-outs, set-up, why it is in the plan, common mistakes, swaps, muscle map, start/end photos (free-exercise-db, public domain).
- **Plan** – your Hollywood Aesthetic 4-day routine preset, weekly volume + frequency audit against growth landmarks, per-slot rationale, swap, share as text.
- **Build a plan** – goal, days, time, priority muscle, equipment → generated program (3–6 days).
- **Progress** – 4-week "is it working?" verdict (recomp-aware), e1RM trend per exercise, hard sets per week, body-composition overlay, deload log.
- **Settings** – kg/lb, joint-health mode, FuelLog/Withings CSV import, JSON backup/restore, sessions CSV export, training-day flags for FuelLog.

## Progression rules (built in)
- Hit the top of the rep range on every set at RIR ≤ 2 twice → add load (per-exercise increment).
- Miss the bottom of the range → hold load, add reps; third miss → drop 5% or swap.
- 10+ days off → start at −10% and ramp back.
- Deload every 5–6 weeks or after regressions: same load, 40% fewer sets.

## Data
Everything stays in `localStorage` on the device (key `fitlab.v1`). Export a JSON backup from Settings before clearing browser data.

## Add or edit exercises
Edit the `EX` array in `index.html`. Each entry has `cues` (3), `watch`, `setup`, `why`, `mistakes`, `swaps`, `primary`/`secondary` muscles, `equip`, `cls` (compound/accessory/isolation/core/cardio), `inc` (load step) and an optional `img` id from free-exercise-db.
