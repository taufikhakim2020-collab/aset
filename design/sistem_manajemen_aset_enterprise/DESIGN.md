---
name: Sistem Manajemen Aset Enterprise
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#4b41e1'
  on-secondary: '#ffffff'
  secondary-container: '#645efb'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#0f0069'
  on-secondary-fixed-variant: '#3323cc'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  data-mono:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system serves an enterprise-grade Asset Management System (*Sistem Manajemen Aset*) tailored for Indonesian institutional and corporate environments. The brand personality balances precision, accountability, and modern technological efficiency. It evokes feelings of reliability, structural clarity, operational speed, and absolute trust.

The visual style blends **Corporate Modern** with **High-Density Utility**. It avoids unnecessary ornamentation in favor of purposeful whitespace, crisp surface borders, balanced data density, and clear status signaling. Visual hierarchy is established through meticulous typographic contrast and purposeful semantic state coloring, enabling inventory auditors, facility managers, and IT administrators to rapidly parse high volumes of assets, serial numbers, deprecation values, and procurement workflows.

## Colors

The color palette prioritizes high-contrast legibility, operational clarity, and immediate contextual feedback for enterprise workflows:

- **Primary Canvas & Chrome (`#0F172A`)**: Deep slate navy used for high-impact structural anchors, side navigation panels, critical headers, and primary high-priority interactive buttons.
- **Brand Accent & Focus (`#4F46E5`, hover `#4338CA`, subtle `#EEF2FF`)**: Tech indigo driving primary user flows, action links, tab active markers, row selections, and active form controls.
- **Semantic Status Signals**:
  - **Aktif / Baik (`#10B981`, soft background `#ECFDF5`)**: Emerald green signaling verified status, active deployment, healthy lifecycle, or completed audit.
  - **Dipinjam / Pemeliharaan (`#F59E0B`, soft background `#FFFBEB`)**: Warm amber for temporary allocations, scheduled maintenance, or pending approvals.
  - **Rusak / Terlambat (`#EF4444`, soft background `#FEF2F2`)**: Rose red signaling physical damage, critical audit discrepancies, expired warranties, or overdue returns.
- **Surfaces & Neutrals**:
  - Base Application Canvas: `#F8FAFC` (Slate 50).
  - Secondary Inset Canvas & Sub-panels: `#F1F5F9` (Slate 100).
  - Card & Modal Surfaces: `#FFFFFF`.
  - Border & Dividers: `#E2E8F0` (Slate 200).
  - Text Hierarchy: Primary `#0F172A`, Secondary `#475569`, Muted `#94A3B8`.

## Typography

The typographic strategy balances the approachable geometric authority of **Plus Jakarta Sans** for page headers, metric scorecards, and modal titles with the neutral, hyper-legible precision of **Inter** for dense transactional tables, forms, and audit logs.

All numerical asset tags, serial numbers, depreciation values (IDR currency), and timestamp logs must enforce tabular figures (`font-variant-numeric: tabular-nums` or `"tnum" on`) to guarantee vertical alignment across data grids. Line heights are tuned tightly for scannability without sacrificing breathing room.

## Layout & Spacing

Layout adherence follows a rigorous **8pt spatial rhythm** (`0.5rem = 8px` base increments), with `0.25rem` (4px) reserved exclusively for tight micro-alignments, badge insets, and icon-to-label gaps.

- **Grid Architecture**:
  - **Desktop (1200px+)**: Fixed collapsible 260px primary navigation sidebar paired with a 12-column fluid data canvas. Gutter is set to `1.5rem` (24px) and outer canvas padding to `2rem` (32px).
  - **Tablet (768px - 1199px)**: Slim 72px icon-only sidebar, 8-column grid with `1rem` (16px) gutters and `1.5rem` (24px) page margins.
  - **Mobile (<768px)**: Single-column reflow with an off-canvas drawer navigation. Gutter and margin scale down to `1rem` (16px). Data tables collapse into structured card stacks.
- **Vertical Hierarchy**: Component gap separation maintains consistent tiers: `space-sm` (8px) within input groups, `space-md` (16px) between card sections, and `space-xl` (32px) between major operational modules.

## Elevation & Depth

Visual depth is achieved through **low-contrast architectural outlines combined with ambient, diffused slate drop shadows**. This prevents visual clutter in screens with high data density while sustaining clear physical layers.

- **Level 0 (Base Canvas)**: Flat `#F8FAFC`, no elevation, zero shadow.
- **Level 1 (Cards, Data Tables, Filters)**: `#FFFFFF` surface with a crisp `1px solid #E2E8F0` border and an ambient shadow of `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)`.
- **Level 2 (Hovered Cards, Segmented Dropdowns, Popovers)**: `#FFFFFF` surface, `1px solid #CBD5E1`, elevated with `0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)`.
- **Level 3 (Modals, Asset Detail Slide-overs, Global Search Palette)**: `#FFFFFF` surface, backed by a semi-transparent slate backdrop overlay (`rgba(15, 23, 42, 0.45)` with `backdrop-filter: blur(4px)`), elevated with `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.08)`.

## Shapes

The design system standardizes on a balanced **Level 2 (Rounded)** curvature profile:

- **Interactive Base (`0.5rem` / 8px)**: Applied to form inputs, buttons, table row hover selections, and dropdowns to convey a refined, modern SaaS posture.
- **Containers (`0.75rem` - `1rem` / 12px - 16px)**: Applied to master-detail content cards, analytical stat cards, and modal dialogs.
- **Pill Badges (`9999px`)**: Reserved strictly for operational status tags, user avatars, asset health indicators, and filter counts. This differentiates continuous data fields from interactive controls.

## Components

### Buttons
- **Primary**: Solid Deep Slate Navy (`#0F172A`) with white text. Hover transitions to `#1E293B`. Height: 40px (Desktop), 36px (Compact/Table actions). Radius: `0.5rem`. Focus ring: 2px indigo outline with 2px offset.
- **Accent**: Solid Indigo (`#4F46E5`) with white text for main flow actions (e.g., *Tambah Aset Baru*, *Simpan Perubahan*). Hover transitions to `#4338CA`.
- **Secondary / Outlined**: White background, `1px solid #E2E8F0`, text `#0F172A`. Hover: `#F8FAFC` and border `#CBD5E1`.
- **Destructive**: Subdued rose tint (`#FEF2F2`), text `#EF4444`, border `1px solid #FCA5A5`. Active/confirm states shift to solid `#EF4444` with white text.

### Status Badges (Pills)
Constructed with full radius (`rounded-full`), `padding: 2px 10px`, typography `label-sm`:
- **Aktif / Tersedia**: Surface `#ECFDF5`, text `#065F46`, border `#A7F3D0`, prepended with a 6px solid emerald dot.
- **Dipinjam / Dalam Servis**: Surface `#FFFBEB`, text `#92400E`, border `#FDE68A`, prepended with a 6px solid amber dot.
- **Rusak / Dihapusbukukan**: Surface `#FEF2F2`, text `#991B1B`, border `#FECACA`, prepended with a 6px solid red dot.

### Form Inputs & Selects
- Height: 40px. Padding: 0 12px. Background: `#FFFFFF`. Border: `1px solid #CBD5E1`. Radius: `0.5rem`.
- Focus State: Border color `#4F46E5`, accompanied by box-shadow `0 0 0 3px rgba(79, 70, 229, 0.15)`.
- Helper & Error Text: Positioned 4px below the input; errors display in `#EF4444` using `body-sm`.

### Data Grids & Tables
- **Header**: Background `#F8FAFC`, height 44px, text `label-md` in `#475569`, bottom border `1px solid #E2E8F0`.
- **Rows**: Alternating white background with subtle hover state `#F8FAFC`. Height: 52px for comfortable touch and barcode scanning interaction. Bottom border `1px solid #F1F5F9`.
- **Numerics & Identifiers**: Right-aligned, rendered in `data-mono` styling with tabular numbers.

### Cards & Summary KPI Tiles
- Background `#FFFFFF`, border `1px solid #E2E8F0`, padding `1.25rem` (20px), radius `0.75rem` (12px).
- Metric widgets feature a top row with label and muted icon, middle row with large display value (`headline-lg`), and bottom row indicating trend badges or asset allocation percentages.

### Additional Domain Components
- **QR / Barcode Quick-Scanner Toolbar**: Sticky utility bar featuring rapid asset search, filter by location (*Gudang*, *Lantai*, *Departemen*), and a high-visibility scanner trigger button.
- **Audit Timeline Log**: Vertical tracking tree displaying historical asset custody transfers, depreciation recalculations, and maintenance logs with timestamped user stamps.