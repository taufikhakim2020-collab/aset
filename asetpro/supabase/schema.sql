-- AsetPro Database Schema
-- Run this SQL in Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Assets table
create table public.assets (
  id uuid primary key default uuid_generate_v4(),
  code text unique not null,
  name text not null,
  brand text,
  category text,
  serial text,
  location text,
  sub_location text,
  value text,
  date text,
  status text not null default 'Tersedia',
  image text,
  icon text,
  icon_bg text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Index for faster queries
create index idx_assets_status on public.assets(status);
create index idx_assets_category on public.assets(category);
create index idx_assets_location on public.assets(location);

-- Auto-update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

create trigger set_updated_at
  before update on public.assets
  for each row execute procedure public.handle_updated_at();

-- Enable Row Level Security (RLS)
alter table public.assets enable row level security;

-- Allow public read access for demo purposes
create policy "Allow public read access"
  on public.assets for select
  using (true);

-- Allow public insert for demo purposes
create policy "Allow public insert access"
  on public.assets for insert
  with check (true);

-- Allow public update for demo purposes
create policy "Allow public update access"
  on public.assets for update
  using (true);

-- Allow public delete for demo purposes
create policy "Allow public delete access"
  on public.assets for delete
  using (true);

-- Insert sample data
insert into public.assets (code, name, brand, category, serial, location, sub_location, value, date, status, icon, icon_bg) values
  ('AST-NB-0428', 'MacBook Pro 14" M3 Pro', 'Apple', 'IT Hardware', 'C02GJ827MD6T', 'HQ Jakarta', 'Lt. 4 Engineering', 'Rp 29.500.000', '14 Mar 2024', 'Tersedia', null, 'bg-surface-container-high'),
  ('AST-NB-0391', 'ThinkPad P16s Gen 2', 'Lenovo', 'IT Hardware', 'PF4D92LX8801', 'HQ Jakarta', 'Lt. 3 Data Analytics', 'Rp 23.400.000', '18 Jan 2024', 'Dipinjam', null, 'bg-surface-container-high'),
  ('AST-NET-0112', 'Cisco Catalyst 2960-X', 'Cisco', 'Perangkat Jaringan', 'FCW2219B0QZ', 'Sentra Data BSD', 'Rack Server 02A', 'Rp 18.250.000', '11 Nov 2023', 'Tersedia', 'router', 'bg-surface-container-high'),
  ('AST-VH-0024', 'Toyota Avanza 1.5 G CVT', 'Toyota', 'Armada Operasional', 'B 1842 POL (MHKM)', 'Pool Slipi', 'Area Parkir B2', 'Rp 269.000.000', '05 Agu 2022', 'Servis Berkala', 'directions_car', 'bg-surface-container-high'),
  ('AST-CAM-0087', 'Sony FX3 Cinema Camera', 'Sony', 'Multimedia & Video', 'SN-3910582-JK', 'HQ Jakarta', 'Lt. 2 Studio Utama', 'Rp 58.900.000', '02 Des 2023', 'Dipinjam', null, null),
  ('AST-FUR-0519', 'Steelcase Migration Desk', 'Steelcase', 'Furnitur Kantor', 'SC-MIG-2022-81', 'HQ Jakarta', 'Lt. 3 Co-working', 'Rp 14.800.000', '19 Jun 2022', 'Tersedia', 'table_restaurant', 'bg-surface-container-high'),
  ('AST-LOG-0004', 'Toyota 8FBN25 Elektrik Forklift', 'Toyota Material', 'Alat Berat Gudang', 'TY-8FBN25-9932', 'Gudang Cikarang', 'Zona Muat 01', 'Rp 340.000.000', '10 Feb 2021', 'Tersedia', 'forklift', 'bg-surface-container-high');